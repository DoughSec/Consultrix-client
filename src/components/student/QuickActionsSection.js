import GlassCard from "../GlassCard"
import QuickActionItem from "./QuickActionsItem";
import CardHeader from "../CardHeader";

import {
    LuBookOpen,
    LuMessageSquare,
} from "react-icons/lu";
import { MdDateRange } from "react-icons/md";

const quickActionData = [
    { "title": "Message Instructor", "href": "#", "icon": <LuMessageSquare size={25} color="" />, "bgColor": "bg-blue-500/50" },
    { "title": "Browse Resources", "href": "#", "icon": <LuBookOpen size={25} color="" />, "bgColor": "bg-pink-500/50" },
    { "title": "Schedule Study Session", "href": "#", "icon": <MdDateRange size={25} color="" />, "bgColor": "bg-green-500/50" }
];

const QuickActionsSection = () => {
    return (
        <GlassCard>
            <CardHeader title="Quick Actions" />
            {quickActionData.map((item, _) => <QuickActionItem data={item} key={_} />)}
        </GlassCard>
    )
}


export default QuickActionsSection