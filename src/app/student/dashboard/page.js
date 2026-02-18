import StatsCardList from "@/components/StatsCardList";
import SectionHeader from "@/components/SectionHeader";
import ActionRequired from "@/components/student/ActionRequired";
import CourseProgress from "@/components/student/CourseProgress";

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

            <section className="grid grid-cols-1 gap-4 md:grid-cols-8">

                <div className="md:col-span-8">
                    {/* quick stats sections */}
                    <StatsCardList />
                </div>

                <div className="md:col-span-7">
                    {/* Required Actions Section */}
                    <ActionRequired items={actionItems} />
                </div>

                <div className="md:col-span-7">
                    {/* Course Progress section */}
                    <CourseProgress />
                </div>

            </section>



        </div>
    )
}
