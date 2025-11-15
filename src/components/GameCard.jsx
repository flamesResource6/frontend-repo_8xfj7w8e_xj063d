import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function GameCard({ game }) {
  return (
    <Link to={`/game/${game.slug}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={game.image} alt={game.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold tracking-tight">{game.name}</h3>
          <p className="text-xs text-blue-200/70">{game.publisher}</p>
        </div>
        <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight />
        </div>
      </div>
    </Link>
  )
}
