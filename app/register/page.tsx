import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50 px-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold text-center">Crear cuenta</h1>

        <form className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm">Correo electrónico</label>
            <input
              type="email"
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm">Contraseña</label>
            <input
              type="password"
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-emerald-500 py-2 text-sm font-semibold hover:bg-emerald-400 transition"
          >
            Registrarme
          </button>
        </form>

        <p className="text-xs text-center text-slate-400">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="text-emerald-400 hover:underline">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </main>
  );
}
