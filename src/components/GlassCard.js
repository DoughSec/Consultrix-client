export default function GlassCard({
    title,
    subtitle,
    footer,
    children,
    className = "",
    contentClassName = "",
}) {
    const cardClassName = [
        "relative overflow-hidden rounded-2xl border border-white/35",
        "bg-white/20 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.18)]",
        "before:pointer-events-none before:absolute before:inset-0",
        "before:bg-[linear-gradient(135deg,rgba(255,255,255,0.45),rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.02))]",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const innerClassName = [
        "relative z-10 p-5 md:p-6",
        contentClassName,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <section className={cardClassName}>
            <div className={innerClassName}>
                {(title || subtitle) && (
                    <header className="mb-4">
                        {title && <h3 className="text-lg font-semibold text-slate-900">{title}</h3>}
                        {subtitle && <p className="mt-1 text-sm text-slate-700/85">{subtitle}</p>}
                    </header>
                )}

                {children}

                {footer && <footer className="mt-5 border-t border-white/35 pt-3">{footer}</footer>}
            </div>
        </section>
    );
}
