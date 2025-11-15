export default function FAQ() {
  const faqs = [
    { q: 'Berapa lama proses top-up?', a: 'Rata-rata 1-5 menit setelah pembayaran terverifikasi.' },
    { q: 'Metode pembayaran apa saja?', a: 'QRIS, Dana, OVO, Gopay, dan Transfer Bank.' },
    { q: 'Apakah aman?', a: '100% aman, server resmi dan terenkripsi.' },
  ]
  return (
    <div className="min-h-screen pt-24 px-4 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">FAQ</h1>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-5">
              <p className="font-semibold">{f.q}</p>
              <p className="text-blue-100/90 text-sm mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
