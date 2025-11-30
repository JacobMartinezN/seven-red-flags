// app/report/page.tsx
export default function ReportPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold">
          Publicar una experiencia
        </h1>
        <p className="text-sm text-slate-400">
          No uses nombres completos, ni DNI, ni @ de redes sociales. Este espacio es para
          compartir experiencias reales manteniendo el anonimato y sin exponer datos sensibles.
        </p>

        <form className="space-y-6 bg-slate-900 border border-slate-800 rounded-xl p-4">
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-slate-200">
              Datos del perfil
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs">Iniciales</label>
                <input
                  type="text"
                  placeholder="Ej: J.C."
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs">Rango de edad</label>
                <select className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="">Selecciona</option>
                  <option value="18_24">18–24</option>
                  <option value="25_30">25–30</option>
                  <option value="31_40">31–40</option>
                  <option value="40_plus">40+</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs">Ciudad</label>
                <input
                  type="text"
                  placeholder="Lima"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs">Distrito</label>
                <input
                  type="text"
                  placeholder="Miraflores"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-slate-200">
              Experiencia
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs">Tipo de relación</label>
                <select className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="">Selecciona</option>
                  <option value="saliente">Saliendo</option>
                  <option value="relacion_formal">Relación formal</option>
                  <option value="aventura">Aventura</option>
                  <option value="match_app">Match de app</option>
                  <option value="amigos_con_derecho">Amigos con derecho</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs">Tipo de experiencia</label>
                <select className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="">Selecciona</option>
                  <option value="positivo">Positiva</option>
                  <option value="infidelidad">Infidelidad</option>
                  <option value="ghosting">Ghosting</option>
                  <option value="toxico">Tóxico</option>
                  <option value="violencia_emocional">Violencia emocional</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs">Resumen de la experiencia</label>
              <textarea
                rows={5}
                placeholder="Cuenta lo que pasó, sin nombres reales ni datos personales."
                className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </section>

          <button
            type="submit"
            className="w-full rounded-md bg-emerald-500 py-2 text-sm font-semibold hover:bg-emerald-400 transition"
          >
            Publicar experiencia
          </button>
        </form>
      </div>
    </main>
  );
}
