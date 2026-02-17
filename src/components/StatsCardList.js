import StatsCard from "./StatsCard";
import { LuAward, LuBookMarked, LuBadgeCheck, LuAlarmClock, LuChartLine } from "react-icons/lu";


const quickStats = [
    { icon: <LuAward color="#737CF0" size={30} />, iconBg: 'bg-[#25254C]', value: "3.85", label: 'Current GPA', subLabel: "+0.15 from last month" },
    { icon: <LuBookMarked color="#B673F5" size={30} />, iconBg: 'bg-[#35204D]', value: "4/6", label: 'Active Courses', subLabel: "2 completed" },
    { icon: <LuBadgeCheck color="#00CBEA" size={30} />, iconBg: 'bg-[#123745]', value: "12/15", label: 'Assignments Done', subLabel: "3 pending submissions" },
    { icon: <LuAlarmClock color="yellow" size={30} />, iconBg: 'bg-[#453119]', value: "3", label: 'Due this week', subLabel: "1 due tommorrow" },

]
const StatsCardList = () => {
    return (
        <section className="flex gap-6 ">
            {quickStats.map((item, _) => <StatsCard key={_} icon={item.icon} iconBg={item.iconBg} value={item.value} label={item.label} subLabel={item.subLabel} />)}
        </section>
    )
}

export default StatsCardList;