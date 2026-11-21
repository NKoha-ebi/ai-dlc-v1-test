import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, resolve, sep } from 'node:path'
import { cloudPatientApi } from './cloudPatientApi.ts'
import { respond } from './localPatientApi.ts'

const api = cloudPatientApi()
const dist = resolve('dist')
const contentTypes: Record<string, string> = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.ico': 'image/x-icon',
}

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname)
    if (pathname.startsWith('/api/')) return await api(request, response, pathname)
    if (request.method !== 'GET' && request.method !== 'HEAD') return respond(response, 405, {})
    let file = resolve(dist, '.' + pathname)
    if (!file.startsWith(dist + sep) && file !== dist) return respond(response, 404, {})
    if (!extname(file)) file = resolve(dist, 'index.html')
    if (!(await stat(file).catch(() => null))?.isFile()) return respond(response, 404, {})
    response.setHeader('Content-Type', contentTypes[extname(file)] ?? 'application/octet-stream')
    response.setHeader('X-Content-Type-Options', 'nosniff')
    response.end(request.method === 'HEAD' ? undefined : await readFile(file))
  } catch {
    if (!response.headersSent) respond(response, 500, { error: '処理に失敗しました。' })
    else response.end()
  }
}).listen(Number(process.env.PORT ?? '8080'), '0.0.0.0')
