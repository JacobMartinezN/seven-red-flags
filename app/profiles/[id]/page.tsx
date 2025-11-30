type ProfilePageProps = {
  params: { id: string };
};

export default function ProfilePage({ params }: ProfilePageProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="space-y-1">
          <p className="text-xs text-slate-400">Perfil #{params.id}</p>
          <h1 className="text-2xl font-semibold">Iniciales de la persona</h1>
          <p className="text-sm text-slate-400">
            Rango de edad · Ciudad · Distrito · Ocupación
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-200">
            Resumen de historial
          </h2>
          <div className="border border-slate-800 rounded-xl bg-slate-900 p-4 text-sm text-slate-300">
            Aquí mostraremos estadísticas: número de reportes, positivos vs negativos, etc.
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-200">
            Reportes
          </h2>
          <div className="border border-slate-800 rounded-xl bg-slate-900 p-4 text-sm text-slate-400">
            Aquí listaremos cada experiencia publicada sobre este perfil.
          </div>
        </section>
      </div>
    </main>
  );
}
