import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 3000

// MIME types mapping
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
}

const server = http.createServer((req, res) => {
  // Normalize the request URL
  let filePath = path.join(__dirname, 'dist', req.url)

  // Handle root path
  if (filePath.endsWith('/')) {
    filePath = path.join(filePath, 'index.html')
  }

  // Get file extension
  const extname = String(path.extname(filePath)).toLowerCase()
  const contentType = mimeTypes[extname] || 'application/octet-stream'

  // Read and serve the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found, serve index.html for client-side routing
        const indexPath = path.join(__dirname, 'dist', 'index.html')
        fs.readFile(indexPath, (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' })
            res.end('<h1>500 - Internal Server Error</h1>', 'utf-8')
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data, 'utf-8')
          }
        })
      } else {
        res.writeHead(500, { 'Content-Type': 'text/html' })
        res.end('<h1>500 - Internal Server Error</h1>', 'utf-8')
      }
    } else {
      // Set cache headers for static assets
      if (extname && extname !== '.html') {
        res.setHeader('Cache-Control', 'public, max-age=31536000') // 1 year
      } else {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
      }

      res.writeHead(200, { 'Content-Type': contentType })
      res.end(data, 'utf-8')
    }
  })
})

server.listen(PORT, () => {
  console.log(`🚀 DevOps Portfolio server running at http://localhost:${PORT}`)
  console.log(`📁 Serving files from: ${path.join(__dirname, 'dist')}`)
})

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use. Try a different port.`)
  } else {
    console.error('Server error:', err)
  }
  process.exit(1)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...')
  server.close(() => {
    console.log('Server closed')
    process.exit(0)
  })
})
