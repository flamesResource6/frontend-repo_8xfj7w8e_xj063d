import { useEffect, useMemo, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Checkout() {
  const { search } = useLocation()
  const params = useMemo(() => new URLSearchParams(search), [search])
  const orderId = params.get('order')
  const [status, setStatus] = useState('pending')

  useEffect(() => {
    // In real app, would poll payment gateway; here we just show instruction
  }, [orderId])

  return (
    <div className="min-h-screen pt-24 px-4 text-white">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
          <h1 className="text-2xl font-bold mb-4">Checkout</h1>
          <p className="text-blue-100/80 text-sm mb-6">Order ID: {orderId}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <h3 className="font-semibold mb-2">Metode Pembayaran</h3>
              <ul className="text-sm text-blue-100/90 space-y-1">
                <li>• QRIS (recommended)</li>
                <li>• Dana</li>
                <li>• OVO</li>
                <li>• Gopay</li>
                <li>• Bank Transfer</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <h3 className="font-semibold mb-2">Petunjuk</h3>
              <p className="text-sm text-blue-100/90 leading-relaxed">Selesaikan pembayaran melalui metode pilihan Anda. Setelah pembayaran terverifikasi, pesanan akan diproses otomatis dalam 1-5 menit.</p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <Link to="/" className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15">Kembali</Link>
            <span className="text-sm text-blue-100/80">Status: {status}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
