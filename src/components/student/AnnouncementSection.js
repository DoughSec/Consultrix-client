import CardHeader from "../CardHeader";
import GlassCard from "../GlassCard";
import ActionItem from "./ActionItem";

const announcementData = [
    {
        id: "1",
        title: "Career Fair Next Week",
        subtitle: "Feb 18",
        intent: "info",
    }, {
        id: "2",
        title: "New Learning Resources Available",
        subtitle: "Feb 17",
        intent: "none",
    },
    {
        id: "3",
        title: "Office Hours Schedule Update",
        subtitle: "Feb 16",
        intent: "none",
    },
];

const AnnouncementSection = () => {
    return (
        <GlassCard className='overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
            <CardHeader title="Announcements" />
            {announcementData.map(item => {
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


export default AnnouncementSection;