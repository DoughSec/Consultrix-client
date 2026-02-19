
const CourseProgressBar = ({ data }) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h3>{data.title}</h3>
                <span className="text-gray-400">{data.value}%</span>
            </div>

            <div className="">
                <div className="bg-gray-500 w-full h-2 rounded-lg">
                    <div
                        className={`${data.color} h-2 rounded-lg`}
                        style={{ width: `${Math.max(0, Math.min(100, data.value))}%` }}
                    />
                </div>
            </div>
        </div>
    )
}



export default CourseProgressBar;