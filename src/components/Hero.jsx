import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-black via-[#050914] to-[#0b1224]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-300/80 bg-white/5 border border-white/10 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            24/7 Support • Trusted by gamers
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Top-up Game Instan untuk Gamers Indonesia
          </h1>
          <p className="mt-4 text-base sm:text-lg text-blue-100/90 max-w-xl">
            Cepat, aman, dan termurah. Bayar dengan QRIS, Dana, OVO, Gopay, atau Transfer Bank. Proses hanya dalam hitungan menit.
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {['100% Safe','Fast Process','Trusted Service'].map((txt, i) => (
            <div key={i} className="text-center text-xs sm:text-sm text-blue-100/80 bg-white/5 border border-white/10 rounded-xl py-2">
              {txt}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
