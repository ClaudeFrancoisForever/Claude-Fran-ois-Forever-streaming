import { useEffect, useState } from 'react'

export default function Home() {
  const [videos, setVideos] = useState([])
  const [file, setFile] = useState(null)

  useEffect(() => {
    fetch('/api/videos')
      .then(res => res.json())
      .then(setVideos)
  }, [])

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)
    await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    setFile(null)
    e.target.reset()
    const updated = await fetch('/api/videos').then(r => r.json())
    setVideos(updated)
  }

  return (
    <div className="container mx-auto p-4 text-gray-200 bg-[#0D0B1E] min-h-screen">
      <h1 className="text-3xl font-serif text-purple-300 mb-6 text-center">Claude François Forever Streaming</h1>
      <form onSubmit={handleUpload} className="mb-6">
        <input type="file" onChange={e => setFile(e.target.files[0])} className="mb-2" />
        <button className="bg-purple-900 text-white px-3 py-1 rounded" type="submit">Uploader</button>
      </form>
      <ul>
        {videos.map(v => (
          <li key={v} className="mb-4">
            <video controls className="w-full max-w-lg">
              <source src={`/uploads/${v}`} />
            </video>
            <p className="mt-2">{v}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
