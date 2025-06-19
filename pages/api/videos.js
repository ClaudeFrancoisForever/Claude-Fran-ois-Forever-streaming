import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const dir = path.join(process.cwd(), 'public/uploads')
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  const files = fs.readdirSync(dir).filter(f => f !== '.gitkeep')
  res.status(200).json(files)
}
