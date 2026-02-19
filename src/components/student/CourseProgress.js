import GlassCard from "../GlassCard";
import CourseProgressBar from "./CourseProgressBar";


const courseData = [
    { title: "Javascript", value: 85, color: 'bg-gradient-to-r from-[#695DFF] to-[#AB47FF]' },
    { title: "React", value: 60, color: 'bg-gradient-to-r from-[#AE47FF] to-[#F4349C]' },
    { title: "Hibernate", value: 45, color: 'bg-gradient-to-r from-[#00B7DC] to-[#2A80FF]' },
    { title: "Java", value: 30, color: 'bg-gradient-to-r from-[#00C851] to-[#00BD7D]' }
];

const CourseProgress = () => {
    return (
        <section className="">
            <GlassCard className="">
                <h2 className="font-bold">Course Progress</h2>

                {courseData.map((item, _) => <CourseProgressBar data={item} key={_} />)}
            </GlassCard>
        </section>
    )
}



export default CourseProgress;
