import fs from 'fs'
import path from 'path'

export default defineEventHandler((event) => {
  const filePath = path.join(process.cwd(), 'public/data/technologies.json')
  const data = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(data)
})
