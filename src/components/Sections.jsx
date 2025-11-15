import { useEffect, useState } from 'react'
import GameCard from './GameCard'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export function GameGrid({ query }) {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    const load = async () => {
      try {
        setLoading(true)
        const url = query ? `${API}/api/games?q=${encodeURIComponent(query)}` : `${API}/api/games`
        const res = await fetch(url)
        const data = await res.json()
        setGames(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
    return () => controller.abort()
  }, [query])

  if (loading) return <div className="text-blue-100/80">Loading games...</div>

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {games.map((g) => (
        <GameCard key={g.slug} game={g} />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch(`${API}/api/testimonials`).then(r => r.json()).then(setItems).catch(() => {})
  }, [])
  return (
    <section className="py-12">
      <h2 className="text-white text-xl font-semibold mb-4">Apa kata mereka</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((t, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-blue-100/90">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400" />
              <div>
                <p className="text-white font-medium">{t.name}</p>
                <p className="text-xs">⭐️ {t.rating}/5</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">{t.message}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Badges() {
  const items = ['100% Safe','Fast Process','Trusted Service']
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
      {items.map((txt) => (
        <div key={txt} className="text-center text-xs sm:text-sm text-blue-100/80 bg-white/5 border border-white/10 rounded-xl py-2">
          {txt}
        </div>
      ))}
    </div>
  )
}
