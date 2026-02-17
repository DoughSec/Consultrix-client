
const GlassCard = ({ children, className }) => {
  return (
    <article className={`${className} flex flex-col flex-1 gap-4 overflow-hidden rounded-3xl bg-gray-900 border-1 border-gray-800 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl`}>
      {children}
    </article>
  );
}


export default GlassCard