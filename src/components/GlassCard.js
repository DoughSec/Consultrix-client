export default function GlassCard({
  title,
  value,
  subtitle,
  accent = "from-cyan-300 to-blue-300",
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/35 bg-white/12 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl transition-transform duration-200 hover:-translate-y-1">
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-35 blur-2xl transition-opacity duration-200 group-hover:opacity-55`}
      />
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/45" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/35 via-white/10 to-transparent" />

      <div className="relative z-10 space-y-1">
        <p className="text-sm font-medium text-slate-800/80">{title}</p>
        <p className="text-3xl font-semibold tracking-tight text-slate-900">
          {value}
        </p>
        <p className="text-sm text-slate-800/70">{subtitle}</p>
      </div>
    </article>
  );
}
