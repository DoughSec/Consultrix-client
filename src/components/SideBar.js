import Link from "next/link"


const SideBar = ({ links }) => {
    return (
        <aside className="bg-white/50 w-64 p-4 h-screen">
            <div className="flex flex-col gap-12">
                <div className="flex gap-4">
                    <div className="bg-blue-500 h-12 w-12 rounded-lg" />
                    <div className="flex flex-col">
                        <span className="text-xl">Consultrix</span>
                        <span className="text-sm text-gray-500">Student</span>
                    </div>
                </div>

                <ul className="flex flex-col gap-6">
                    {links.map((item, _) => <Link href={item.href} key={_}><li>{item.name}</li></Link>)}
                </ul>
            </div>
        </aside>
    )
}

export default SideBar  