import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Blog() {
  const [posts, setPosts] = useState([])
  useEffect(() => { fetch(`${API}/api/blog`).then(r=>r.json()).then(setPosts).catch(()=>{}) }, [])
  return (
    <div className="min-h-screen pt-24 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Promo & Blog</h1>
        <div className="grid md:grid-cols-2 gap-5">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-blue-100/90 mt-2">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
