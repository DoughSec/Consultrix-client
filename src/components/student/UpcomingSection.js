import GlassCard from "../GlassCard";
import ActionItem from "./ActionItem";

const actionItems = [
    {
        title: "Node.js Final Project",
        subtitle: "Node.js Backend",
        intent: "warning",
    },
    {
        title: "Database Schema Assignment",
        subtitle: "Database Design",
        intent: "danger",
    },
    {
        title: "React ALAB320H1.1",
        subtitle: "React Development",
        intent: "info",
    }, {
        title: "Database Schema Assignment",
        subtitle: "Database Design",
        intent: "danger",
    }, {
        title: "React ALAB320H1.1",
        subtitle: "React Development",
        intent: "info",
    }, {
        title: "Database Schema Assignment",
        subtitle: "Database Design",
        intent: "danger",
    },

];

const UpcomingSection = () => {
    return (
        <GlassCard className='min-h-90 max-h-90 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
            <h2 className="font-bold">Upcoming</h2>

            {actionItems.map((item, _) => {
                return (
                    <ActionItem
                        key={_}
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
