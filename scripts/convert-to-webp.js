import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const IMAGES_DIR = './public/images'
const MAX_WIDTH = 1920
const WEBP_QUALITY = 82

async function getFileSizeInMB(filePath) {
  const stats = await fs.promises.stat(filePath)
  return stats.size / (1024 * 1024)
}

async function convertToWebP(inputPath) {
  const dir = path.dirname(inputPath)
  const baseName = path.basename(inputPath, path.extname(inputPath))
  const outputPath = path.join(dir, `${baseName}.webp`)

  const originalSize = await getFileSizeInMB(inputPath)

  await sharp(inputPath)
    .resize(MAX_WIDTH, null, {
      withoutEnlargement: true,
      fit: 'inside',
    })
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath)

  const newSize = await getFileSizeInMB(outputPath)
  const savings = ((1 - newSize / originalSize) * 100).toFixed(1)

  return {
    original: inputPath,
    converted: outputPath,
    originalSize,
    newSize,
    savings,
  }
}

async function findImages(dir) {
  const images = []
  const entries = await fs.promises.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      images.push(...(await findImages(fullPath)))
    } else if (/\.(jpg|jpeg)$/i.test(entry.name)) {
      images.push(fullPath)
    }
  }

  return images
}

async function main() {
  console.log('Buscando imágenes JPG/JPEG...\n')

  const images = await findImages(IMAGES_DIR)
  console.log(`Encontradas ${images.length} imágenes para convertir\n`)

  let totalOriginal = 0
  let totalNew = 0

  for (let i = 0; i < images.length; i++) {
    const img = images[i]
    try {
      const result = await convertToWebP(img)
      totalOriginal += result.originalSize
      totalNew += result.newSize

      console.log(
        `[${i + 1}/${images.length}] ${path.basename(result.original)}`
      )
      console.log(
        `   ${result.originalSize.toFixed(2)}MB → ${result.newSize.toFixed(2)}MB (-${result.savings}%)\n`
      )
    } catch (error) {
      console.error(`Error convirtiendo ${img}:`, error.message)
    }
  }

  console.log('='.repeat(50))
  console.log(`Total original: ${totalOriginal.toFixed(2)} MB`)
  console.log(`Total WebP: ${totalNew.toFixed(2)} MB`)
  console.log(
    `Ahorro total: ${(totalOriginal - totalNew).toFixed(2)} MB (${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%)`
  )
  console.log('='.repeat(50))
  console.log('\nAhora actualiza las referencias en tu código de .jpg a .webp')
}

main().catch(console.error)
