import GlassCard from "@/components/GlassCard";

const INTENT_STYLES = {
  warning: {
    container: "bg-yellow-500/20 border-yellow-500/20",
    iconWrapper: "bg-[#453119]",
    button: "bg-yellow-500/70",
  },
  danger: {
    container: "bg-red-500/20 border-red-500/20",
    iconWrapper: "bg-red-500/20",
    button: "bg-red-500/40",
  },
  info: {
    container: "bg-blue-500/20 border-blue-500/20",
    iconWrapper: "bg-blue-500/20",
    button: "bg-blue-500/40",
  },
};

const ActionItem = ({ icon, title, subtitle, ctaLabel, intent = "info" }) => {
  const styles = INTENT_STYLES[intent] || INTENT_STYLES.info;

  return (
    <GlassCard className={`rounded-lg flex justify-center ${styles.container} min-h-12 max-h-16`}>
      <div className="flex items-center justify-between">
        <div className="text-white flex gap-4 items-center">
          {icon && <span className={`${styles.iconWrapper} p-2 rounded-lg`}>{icon}</span>}
          <div className="flex flex-col">
            <h3 className="text-sm">{title}</h3>
            <span className="text-xs text-gray-500">{subtitle}</span>
          </div>
        </div>
        {ctaLabel && <button className={`${styles.button} px-2 rounded-xl`}>{ctaLabel}</button>}
      </div>
    </GlassCard>
  );
};

export default ActionItem;
