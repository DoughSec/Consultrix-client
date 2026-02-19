import Link from "next/link"
import GlassCard from "../GlassCard"

const QuickActionItem = ({ data }) => {
    return (
        <Link href={data.href}>
            <GlassCard className={`${data.bgColor}`}>
                <div className="flex gap-4 items-center">
                    {data.icon}
                    <h3 className="text-md">{data.title}</h3>
                </div>
            </GlassCard>
        </Link >

    )
}


export default QuickActionItem