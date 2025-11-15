import { useState } from 'react'
import { Menu, X, Search, ShoppingCart, MessageCircle } from 'lucide-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Navbar({ onSearch }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    if (onSearch) onSearch(query)
    if (location.pathname !== '/') navigate('/')
  }

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-blue-600' : 'text-gray-200 hover:text-white hover:bg-blue-500/20'}`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg" />
            <span className="text-white font-bold tracking-tight">TopUp.ID</span>
          </Link>

          <form onSubmit={submit} className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 w-[420px]">
            <Search className="w-4 h-4 text-blue-300" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari game favorit kamu..."
              className="bg-transparent outline-none text-sm text-white placeholder:text-gray-400 w-full"
            />
          </form>

          <nav className="hidden md:flex items-center gap-2">
            {navItem('/faq', 'FAQ')}
            {navItem('/blog', 'Promo & Blog')}
            {navItem('/history', 'Riwayat')}
            <Link to="/checkout" className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors">
              <ShoppingCart className="w-4 h-4" /> Checkout
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <form onSubmit={submit} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 mb-3">
              <Search className="w-4 h-4 text-blue-300" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari game..."
                className="bg-transparent outline-none text-sm text-white placeholder:text-gray-400 w-full"
              />
            </form>
            <div className="flex flex-col gap-2">
              {navItem('/faq', 'FAQ')}
              {navItem('/blog', 'Promo & Blog')}
              {navItem('/history', 'Riwayat')}
              <Link to="/checkout" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600">
                <ShoppingCart className="w-4 h-4" /> Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
