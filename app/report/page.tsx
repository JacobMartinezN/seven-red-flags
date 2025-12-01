"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function ReportPage() {
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      initials: data.get("initials"),
      ageRange: data.get("ageRange"),
      city: data.get("city"),
      district: data.get("district"),
      gender: data.get("gender"),
      relationshipType: data.get("relationshipType"),
      experienceType: data.get("experienceType"),
      summary: data.get("summary"),
    };

    const res = await fetch("/api/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const json = await res.json().catch(() => null);
      alert(json?.error ?? "Ocurrió un error al guardar. Intenta de nuevo.");
      return;
    }

    const json = await res.json();
    if (json.profileId) {
      router.push(`/profiles/${json.profileId}`);
    } else {
      alert("No se recibió el ID del perfil.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold">Publicar una experiencia</h1>
        <p className="text-sm text-slate-400">
          No uses nombres completos, ni DNI, ni @ de redes sociales. Este espacio es para
          compartir experiencias reales manteniendo el anonimato y sin exponer datos sensibles.
        </p>

        <form
          className="space-y-6 bg-slate-900 border border-slate-800 rounded-xl p-4"
          onSubmit={handleSubmit}
        >
          {/* Datos del perfil */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-slate-200">
              Datos del perfil
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs">Iniciales</label>
                <input
                  name="initials"
                  type="text"
                  placeholder="Ej: J.C."
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs">Rango de edad</label>
                <select
                  name="ageRange"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  defaultValue="_25_30"
                >
                  <option value="VALUE_18_24">18–24</option>
                  <option value="VALUE_25_30">25–30</option>
                  <option value="VALUE_31_40">31–40</option>
                  <option value="VALUE_40_PLUS">40+</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs">Ciudad</label>
                <input
                  name="city"
                  type="text"
                  placeholder="Lima"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs">Distrito</label>
                <input
                  name="district"
                  type="text"
                  placeholder="Miraflores"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs">Género</label>
                <select
                  name="gender"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  defaultValue="UNKNOWN"
                >
                  <option value="UNKNOWN">
                    No estoy seguro / Prefiero no decir
                  </option>
                  <option value="MALE">Hombre</option>
                  <option value="FEMALE">Mujer</option>
                  <option value="OTHER">Otro</option>
                </select>
              </div>
            </div>
          </section>

          {/* Experiencia */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-slate-200">
              Experiencia
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs">Tipo de relación</label>
                <select
                  name="relationshipType"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                >
                  <option value="">Selecciona</option>
                  <option value="SALIENTE">Saliendo</option>
                  <option value="RELACION_FORMAL">Relación formal</option>
                  <option value="AVENTURA">Aventura</option>
                  <option value="MATCH_APP">Match de app</option>
                  <option value="AMIGOS_CON_DERECHO">Amigos con derecho</option>
                  <option value="OTRO">Otro</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs">Tipo de experiencia</label>
                <select
                  name="experienceType"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                >
                  <option value="">Selecciona</option>
                  <option value="POSITIVO">Positiva</option>
                  <option value="INFIDELIDAD">Infidelidad</option>
                  <option value="GHOSTING">Ghosting</option>
                  <option value="TOXICO">Tóxico</option>
                  <option value="VIOLENCIA_EMOCIONAL">Violencia emocional</option>
                  <option value="OTRO">Otro</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs">Resumen de la experiencia</label>
              <textarea
                name="summary"
                rows={5}
                placeholder="Cuenta lo que pasó, sin nombres reales ni datos personales."
                className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                required
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
