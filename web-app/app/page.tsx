import MinotauroViewerWrapper from "@/components/MinotauroViewerWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f13] text-white flex flex-col items-center justify-center px-4 py-16">

      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-xs font-bold tracking-[4px] text-yellow-500 uppercase mb-3">
          Club Olimpo
        </p>
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Theo
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          La mascota oficial del Club Olimpo. Minotauro legendario,
          símbolo de fuerza y determinación.
        </p>
      </div>

      {/* Badge nivel */}
      <div className="flex items-center gap-2 mb-6">
        <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
          ⚡ Nivel 4 — Legendario
        </span>
      </div>

      {/* Visor 3D */}
      <div className="w-full max-w-md">
        <MinotauroViewerWrapper />
      </div>

      {/* Hint de interacción */}
      <p className="mt-4 text-xs text-gray-600">
        Arrastra para rotar · Scroll para zoom
      </p>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-3 gap-6 w-full max-w-md">
        {[
          { label: "Fuerza",     value: 100, color: "from-yellow-400 to-yellow-600" },
          { label: "Velocidad",  value: 95,  color: "from-yellow-400 to-yellow-600" },
          { label: "Resistencia",value: 98,  color: "from-yellow-400 to-yellow-600" },
        ].map(({ label, value, color }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <span className="text-2xl font-black text-yellow-400">{value}</span>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${color}`}
                style={{ width: `${value}%` }}
              />
            </div>
            <span className="text-xs text-gray-500 uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>

    </main>
  );
}
