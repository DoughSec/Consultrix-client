import StatsCardList from "@/components/StatsCardList";
import SectionHeader from "@/components/SectionHeader";
import ActionRequired from "@/components/ActionRequired";

import { LuBadgeInfo, LuAlarmClock } from "react-icons/lu";

export default function StudentDashboard() {
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

    return (
        <div className="flex flex-col gap-6 ">

            {/* Welcome header */}
            <SectionHeader
                title="Welcome back, User"
                subtitle="Here's your learning progress and upcoming activities"
            />

            {/* quick stats sections */}
            <StatsCardList />

            {/* Required Actions Section */}
            <ActionRequired items={actionItems} />

        </div>
    )
}
