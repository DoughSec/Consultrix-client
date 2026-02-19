import GlassCard from "../GlassCard"
import FeedBackItem from "./FeedbackItem"

const feedBackData = [
    {
        "title": "React Components Lab",
        "subtitle": "Prof Johnson",
        "message": "Excellent work on component architecture!",
        "icon": "A"
    }, {
        "title": "API Integration Project",
        "subtitle": "Prof Smith",
        "message": "Good Implementation, consider error handling.",
        "icon": "B+"
    }
]


const FeedBackSection = () => {
    return (
        <GlassCard>
            <h2 className="font-bold">Recent Feedback</h2>


            {feedBackData.map((item, _) => <FeedBackItem data={item} key={_} />)}
        </GlassCard>
    )
}


export default FeedBackSection