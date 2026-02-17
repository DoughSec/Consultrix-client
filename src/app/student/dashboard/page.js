import GlassCard from "@/components/GlassCard";
import StatsCardList from "@/components/StatsCardList";

import { LuBadgeInfo, LuAlarmClock } from "react-icons/lu";

export default function StudentDashboard() {
    return (
        <div className="flex flex-col gap-6 ">

            {/* Welcome header */}
            <section>
                <h1 className="text-xl font-bold">Welcome back, User</h1>
                <span className="text-sm text-gray-500">Here's your learning progress and upcoming activites</span>
            </section>

            {/* quick stats sections */}
            <StatsCardList />

            {/* Required Actions Section */}
            <section className="grid grid-cols-3">
                <GlassCard className='col-span-2'>
                    <div className="flex items-center justify-between">
                        <h2 className="font-bold">Action Required</h2>
                        <LuBadgeInfo size={30} color="yellow" />
                    </div>
                    <GlassCard className='rounded-lg flex justify-center bg-yellow-500/20 border-yellow-500/20'>
                        <div className="flex justify-between">
                            <div className="text-white flex gap-4 items-center">
                                <span className="bg-[#453119] p-2 rounded-lg"><LuAlarmClock size={20} color="yellow" /></span>
                                <div className="flex flex-col">
                                    <h3 className="text-sm">Node.js Final Project Due Soon</h3>
                                    <span className="text-xs text-gray-500">Submit by Feb 20, 2026 - 11:59PM</span>
                                </div>
                            </div>
                            <button className="bg-yellow-500/70 px-2 rounded-xl">Submit</button>
                        </div>
                    </GlassCard>

                    <GlassCard className='rounded-lg flex justify-center bg-red-500/20 border-red-500/20'>
                        <div className="flex justify-between">
                            <div className="text-white flex gap-4 items-center">
                                <span className="bg-red-500/20 p-2 rounded-lg"><LuBadgeInfo size={20} color="red" /></span>
                                <div className="flex flex-col">
                                    <h3 className="text-sm">Missing Attendance - React Workshop</h3>
                                    <span className="text-xs text-gray-500">Contact instructor for mackup session</span>
                                </div>
                            </div>
                            <button className="bg-red-500/40 px-2 rounded-xl">Contact</button>
                        </div>
                    </GlassCard>
                </GlassCard>
            </section>

        </div>
    )
}