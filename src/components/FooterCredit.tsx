import { useLocation } from 'react-router-dom'

export default function FooterCredit() {
  const location = useLocation()

  // Only show credit on Costa Rica routes
  if (!location.pathname.startsWith('/cr')) {
    return null
  }

  return (
    <p className="mt-2 text-primary-200/60 text-xs">
      Made by{' '}
      <a
        href="https://www.yieldge.com/cr"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary-100 transition-colors"
      >
        Yieldge
      </a>
    </p>
  )
}
