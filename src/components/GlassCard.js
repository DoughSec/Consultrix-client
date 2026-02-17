export default function GlassCard({ icon, iconBg, value, label, subLabel }) {
  return (
    <article className="flex flex-col flex-1 gap-4 overflow-hidden rounded-3xl border border-white/35 bg-black/12 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl transition-transform duration-200 hover:-translate-y-1">
      <div className="flex justify-between items-center">
        <span className={`${iconBg} p-2 rounded-lg`}>{icon}</span>
        <p className="text-xl tracking-tight">
          {value}
        </p>
      </div>

      <div className="flex flex-col">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-xs text-gray-500">{subLabel}</span>
      </div>
    </article>
  );
}
