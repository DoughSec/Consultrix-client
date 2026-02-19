import StatsCardList from "@/components/StatsCardList";
import SectionHeader from "@/components/SectionHeader";
import ActionRequired from "@/components/student/ActionRequired";
import CourseProgress from "@/components/student/CourseProgress";
import UpcomingSection from "@/components/student/UpcomingSection";
import AnnouncementSection from "@/components/student/AnnouncementSection";
import FeedBackSection from "@/components/student/FeedbackSection";

export default function StudentDashboard() {
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

                <div className="md:col-span-5 flex flex-col gap-4">
                    {/* Required Actions Section */}
                    <ActionRequired />

                    {/* Course Progress section */}
                    <CourseProgress />

                    {/* Feeback section */}
                    <FeedBackSection />
                </div>

                <div className="md:col-span-3 flex flex-col gap-4">
                    <UpcomingSection />
                    <AnnouncementSection />
                </div>

            </section>



        </div>
    )
}
