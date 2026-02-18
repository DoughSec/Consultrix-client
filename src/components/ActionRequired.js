import GlassCard from "./GlassCard";
import ActionItem from "./ActionItem";
import { LuBadgeInfo } from "react-icons/lu";

const ActionRequired = ({ items }) => {
  return (
    <section className="grid grid-cols-3">
      <GlassCard className="col-span-2">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Action Required</h2>
          <LuBadgeInfo size={30} color="yellow" />
        </div>
        {items.map((item) => (
          <ActionItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            ctaLabel={item.ctaLabel}
            intent={item.intent}
          />
        ))}
      </GlassCard>
    </section>
  );
};

export default ActionRequired;
