import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function GameDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [game, setGame] = useState(null)
  const [options, setOptions] = useState([])
  const [form, setForm] = useState({ user_id: '', server: '', amount: 0, topup_title: '', price: 0, payment_method: 'QRIS' })

  useEffect(() => {
    fetch(`${API}/api/games/${slug}`).then(r => r.json()).then(setGame).catch(() => {})
    fetch(`${API}/api/games/${slug}/options`).then(r => r.json()).then(setOptions).catch(() => {})
  }, [slug])

  const selectOption = (opt) => {
    setForm(f => ({ ...f, amount: opt.amount, price: opt.price, topup_title: opt.title }))
  }

  const submit = async (e) => {
    e.preventDefault()
    const payload = {
      game_slug: slug,
      game_name: game?.name || slug,
      user_id: form.user_id,
      server: form.server || undefined,
      topup_title: form.topup_title,
      amount: form.amount,
      price: form.price,
      payment_method: form.payment_method,
      status: 'pending'
    }
    try {
      const res = await fetch(`${API}/api/orders`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      navigate('/checkout?order=' + data.order_id)
    } catch (e) { console.error(e) }
  }

  if (!game) return <div className="min-h-screen pt-24 px-4 text-white">Loading...</div>

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto text-white">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]">
              <img src={game.image} alt={game.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h1 className="text-2xl font-bold">{game.name}</h1>
                <p className="text-blue-100/80 text-sm">{game.publisher}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-white font-semibold mb-3">Pilih Nominal</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {options.map((o) => (
                  <button key={o.title} onClick={() => selectOption(o)} className={`text-left rounded-xl border ${form.amount === o.amount ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/10 bg-white/[0.04]'} p-4 hover:border-cyan-400/60 transition`}>
                    <p className="text-white font-semibold">{o.title}</p>
                    <p className="text-xs text-blue-100/80">Rp {o.price.toLocaleString('id-ID')}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
              <h3 className="text-white font-semibold mb-4">Detail Akun</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-blue-100/80">User ID</label>
                  <input value={form.user_id} onChange={e=>setForm(f=>({...f,user_id:e.target.value}))} required className="mt-1 w-full bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2 text-white outline-none focus:border-cyan-400" />
                </div>
                <div>
                  <label className="text-sm text-blue-100/80">Server</label>
                  <input value={form.server} onChange={e=>setForm(f=>({...f,server:e.target.value}))} className="mt-1 w-full bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2 text-white outline-none focus:border-cyan-400" />
                </div>
                <div>
                  <label className="text-sm text-blue-100/80">Metode Pembayaran</label>
                  <select value={form.payment_method} onChange={e=>setForm(f=>({...f,payment_method:e.target.value}))} className="mt-1 w-full bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2 text-white outline-none focus:border-cyan-400">
                    {['QRIS','Dana','OVO','Gopay','Bank Transfer'].map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <button disabled={!form.amount || !form.user_id} className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold rounded-lg py-2 mt-2">Lanjutkan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
