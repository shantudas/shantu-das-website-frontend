import fs from 'fs'
import path from 'path'

export default defineEventHandler((event) => {
  const filePath = path.join(process.cwd(), 'public/data/recommendations.json')
  const data = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(data)
})
