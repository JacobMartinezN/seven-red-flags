import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-50 px-4">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Seven Red Flags
        </h1>
        <p className="text-sm text-emerald-400 font-medium">
          Antes de enamorarte, revisa las red flags.
        </p>

        <p className="text-slate-300">
          Plataforma anónima para compartir y consultar experiencias con personas que estás
          conociendo: infidelidad, ghosting, toxicidad o historias positivas. Sin nombres
          completos, sin DNI, sin exponer datos sensibles.
        </p>

        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <Link
            href="/search"
            className="rounded-md bg-emerald-500 px-6 py-2 text-sm font-semibold hover:bg-emerald-400 transition"
          >
            Buscar perfiles
          </Link>
          <Link
            href="/report"
            className="rounded-md border border-slate-500 px-6 py-2 text-sm font-semibold hover:bg-slate-800 transition"
          >
            Publicar una experiencia
          </Link>
        </div>
      </div>
    </main>
  );
}
