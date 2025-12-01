import { prisma } from "@/lib/db";

type ProfilePageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const resolvedParams = await params;
  const profile = await prisma.profile.findUnique({
    where: { id: resolvedParams.id },
    include: {
      reports: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!profile) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-50 px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-slate-400">Perfil no encontrado.</p>
        </div>
      </main>
    );
  }

  const totalReports = profile.reports.length;
  const negativeCount = profile.reports.filter(
    (r) =>
      r.experienceType === "INFIDELIDAD" ||
      r.experienceType === "GHOSTING" ||
      r.experienceType === "TOXICO" ||
      r.experienceType === "VIOLENCIA_EMOCIONAL"
  ).length;
  const positiveCount = profile.reports.filter(
    (r) => r.experienceType === "POSITIVO"
  ).length;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="space-y-1">
          <p className="text-xs text-slate-400">ID: {profile.id}</p>
          <h1 className="text-2xl font-semibold">
            {profile.initials} · {profile.city} – {profile.district}
          </h1>
          <p className="text-sm text-slate-400">
            Rango de edad: {profile.ageRange.replace("_", "").replace("PLUS", "+")} · Género:{" "}
            {profile.gender.toLowerCase()}
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-200">
            Resumen de historial
          </h2>
          <div className="border border-slate-800 rounded-xl bg-slate-900 p-4 text-sm text-slate-300 space-y-1">
            <p>Total de reportes: {totalReports}</p>
            <p>Experiencias positivas: {positiveCount}</p>
            <p>Experiencias negativas: {negativeCount}</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-200">
            Reportes
          </h2>
          {profile.reports.length === 0 ? (
            <div className="border border-slate-800 rounded-xl bg-slate-900 p-4 text-sm text-slate-400">
              Aún no hay reportes para este perfil.
            </div>
          ) : (
            <div className="space-y-3">
              {profile.reports.map((report) => (
                <article
                  key={report.id}
                  className="border border-slate-800 rounded-xl bg-slate-900 p-4 text-sm space-y-1"
                >
                  <p className="text-xs text-slate-400">
                    {report.relationshipType} · {report.experienceType} ·{" "}
                    {new Date(report.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-slate-200">{report.summary}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
