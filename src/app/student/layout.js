import SideBar from "@/components/SideBar"

export default function StudentLayout({ children }) {
    return (
        <div className="flex">
            <SideBar />
            <main className="p-12">{children}</main>
        </div>
    )
}
