const GlassCard = ({ children, className }) => {
  return (
    <article
      className={`${className} flex flex-col flex-1 gap-4 overflow-hidden rounded-3xl bg-black/20 border-1 border-white/20 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl`}
    >
      {children}
    </article>
  );
};

export default GlassCard;
