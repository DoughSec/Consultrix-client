import GlassCard from "../GlassCard";
import ActionItem from "./ActionItem";

const actionItems = [
    {
        id: "node-final-project",
        title: "Node.js Final Project",
        subtitle: "Node.js Backend",
        intent: "warning",
    },
    {
        id: "Database Schema Assignment",
        title: "Database Schema Assignment",
        subtitle: "Database Design",
        intent: "danger",
    },
    {
        id: "react-workshop",
        title: "React ALAB320H1.1",
        subtitle: "React Development",
        intent: "info",
    },
];

const UpcomingSection = () => {
    return (
        <GlassCard>
            <h2 className="font-bold">Upcoming</h2>

            {actionItems.map(item => {
                return (
                    <ActionItem
                        key={item.id}
                        title={item.title}
                        subtitle={item.subtitle}
                        ctaLabel={item.ctaLabel}
                        intent={item.intent}
                    />
                )
            })}

        </GlassCard>
    )
}



export default UpcomingSection;
