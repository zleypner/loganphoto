import { useState, useRef, useEffect } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  wrapperClassName?: string
  onClick?: () => void
  priority?: boolean // For above-the-fold images
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  onClick,
  priority = false,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority) // Priority images load immediately
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) return // Skip observer for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '200px 0px', // Increased: preload 200px before visible
        threshold: 0.01,
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  // Preload image when in view
  useEffect(() => {
    if (isInView && src) {
      const img = new Image()
      img.src = src
    }
  }, [isInView, src])

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${wrapperClassName}`}
      onClick={onClick}
    >
      {/* Skeleton placeholder with blur effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-shimmer transition-opacity duration-300 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      {/* Actual image - only load when in view */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-gray-500 text-xs">Error al cargar</span>
        </div>
      )}
    </div>
  )
}
