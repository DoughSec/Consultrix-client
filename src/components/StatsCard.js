import GlassCard from "./GlassCard";

const StatsCard = ({ icon, iconBg, value, label, subLabel }) => {
    return (
        <GlassCard>
            <div className="flex justify-between items-center">
                <span className={`${iconBg} p-2 rounded-lg`}>{icon}</span>
                <p className="text-xl tracking-tight">
                    {value}
                </p>
            </div>

            <div className="flex flex-col">
                <span className="text-sm text-gray-400">{label}</span>
                <span className="text-xs text-gray-500">{subLabel}</span>
            </div>
        </GlassCard>
    )
}

export default StatsCard