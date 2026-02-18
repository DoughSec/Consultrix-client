const SectionHeader = ({ title, subtitle }) => {
  return (
    <section>
      <h1 className="text-xl font-bold">{title}</h1>
      <span className="text-sm text-gray-500">{subtitle}</span>
    </section>
  );
};

export default SectionHeader;
