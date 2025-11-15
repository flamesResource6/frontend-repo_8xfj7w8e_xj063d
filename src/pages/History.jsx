import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function History() {
  const [orders, setOrders] = useState([])
  useEffect(() => { fetch(`${API}/api/orders`).then(r=>r.json()).then(setOrders).catch(()=>{}) }, [])
  return (
    <div className="min-h-screen pt-24 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Riwayat Transaksi</h1>
        <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
          <div className="grid grid-cols-6 gap-3 px-4 py-3 text-xs font-semibold bg-white/5 border-b border-white/10">
            <div>Order</div><div>Game</div><div>User ID</div><div>Nominal</div><div>Harga</div><div>Status</div>
          </div>
          {orders.map((o) => (
            <div key={o._id} className="grid grid-cols-6 gap-3 px-4 py-3 text-sm border-b border-white/10">
              <div className="truncate">{o._id}</div>
              <div>{o.game_name}</div>
              <div>{o.user_id}{o.server ? ' ('+o.server+')' : ''}</div>
              <div>{o.topup_title}</div>
              <div>Rp {o.price?.toLocaleString?.('id-ID') || o.price}</div>
              <div className="capitalize">{o.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
