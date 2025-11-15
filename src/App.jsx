import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { GameGrid, Testimonials } from './components/Sections'
import GameDetail from './pages/GameDetail'
import Checkout from './pages/Checkout'
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import History from './pages/History'

function Home() {
  const [q, setQ] = useState('')
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#050914] to-[#0b1224]">
      <Navbar onSearch={setQ} />
      <Hero />
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-xl font-semibold">Game Populer</h2>
          </div>
          <GameGrid query={q} />
        </section>
        <Testimonials />
      </main>
      <footer className="relative z-10 border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-blue-100/70 text-sm flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} TopUp.ID — Cepat • Aman • Terpercaya</p>
          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">100% Safe</span>
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Fast Process</span>
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Trusted</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:slug" element={<GameDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}
