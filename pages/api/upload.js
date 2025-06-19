import fs from 'fs'
import path from 'path'
import formidable from 'formidable'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  const form = formidable({ multiples: false, uploadDir: path.join(process.cwd(), 'public/uploads'), keepExtensions: true })
  form.parse(req, (err, fields, files) => {
    if (err || !files.file) {
      res.status(400).json({ error: 'Upload failed' })
      return
    }
    const file = files.file
    const newPath = path.join(process.cwd(), 'public/uploads', file.newFilename)
    fs.renameSync(file.filepath, newPath)
    res.status(200).json({ name: file.newFilename })
  })
}
