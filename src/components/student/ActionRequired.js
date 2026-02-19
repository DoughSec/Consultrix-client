import GlassCard from "../GlassCard";
import ActionItem from "./ActionItem";

import { LuBadgeInfo, LuAlarmClock } from "react-icons/lu";

const actionItems = [
  {
    id: "node-final-project",
    title: "Node.js Final Project Due Soon",
    subtitle: "Submit by Feb 20, 2026 - 11:59PM",
    ctaLabel: "Submit",
    intent: "warning",
    icon: <LuAlarmClock size={20} color="yellow" />,
  },
  {
    id: "react-workshop-attendance",
    title: "Missing Attendance - React Workshop",
    subtitle: "Contact instructor for makeup session",
    ctaLabel: "Contact",
    intent: "danger",
    icon: <LuBadgeInfo size={20} color="red" />,
  },
];

const ActionRequired = () => {
  return (
    <section className="">
      <GlassCard className="">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Action Required</h2>
          <LuBadgeInfo size={30} color="yellow" />
        </div>
        {actionItems.map((item) => (
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
