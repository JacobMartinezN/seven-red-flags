export default function SearchPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold">Buscar perfiles</h1>

        <form className="grid gap-4 md:grid-cols-4 bg-slate-900 border border-slate-800 rounded-xl p-4">
          <div className="space-y-1 md:col-span-1">
            <label className="text-xs">Iniciales</label>
            <input
              type="text"
              placeholder="Ej: J.C."
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="space-y-1 md:col-span-1">
            <label className="text-xs">Ciudad</label>
            <input
              type="text"
              placeholder="Lima"
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="space-y-1 md:col-span-1">
            <label className="text-xs">Distrito</label>
            <input
              type="text"
              placeholder="Miraflores"
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="space-y-1 md:col-span-1 flex items-end">
            <button
              type="submit"
              className="w-full rounded-md bg-emerald-500 py-2 text-sm font-semibold hover:bg-emerald-400 transition"
            >
              Buscar
            </button>
          </div>
        </form>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-300">
            Resultados
          </h2>
          <div className="border border-slate-800 rounded-xl bg-slate-900 p-4 text-sm text-slate-400">
            Aún no hay resultados. Prueba realizando una búsqueda.
          </div>
        </section>
      </div>
    </main>
  );
}
