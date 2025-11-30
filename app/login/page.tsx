import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50 px-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold text-center">Iniciar sesión</h1>

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
            Entrar
          </button>
        </form>

        <p className="text-xs text-center text-slate-400">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="text-emerald-400 hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </main>
  );
}
