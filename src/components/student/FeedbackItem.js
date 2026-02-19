import ActionItem from "./ActionItem"
import GlassCard from "../GlassCard"

// "title": "API Integration Project",
// "subtitle": "Prof Smith",
// "message": "EGood Implementation, consider error handling.",
// "icon": "B+"

const FeedBackItem = ({ data }) => {
    return (
        <GlassCard className={`rounded-lg flex justify-center`}>
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <h3 className="text-sm">{data.title}</h3>
                    <span className="text-xs text-gray-500">{data.subtitle}</span>
                    <span className="mt-2">{data.message}</span>
                </div>
                {data.icon && <span className="p-2 rounded-lg text-green-500 font-bold">{data.icon}</span>}
            </div>
        </GlassCard >
    )
}

export default FeedBackItem