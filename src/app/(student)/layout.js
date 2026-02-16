import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"

export default async function StudentLayout({ children }) {
    const user = await getCurrentUser()

    if (!user || user.role !== "STUDENT") {
        redirect("/unauthorized")
    }

    return (
        <div className="flex">
            <StudentSidebar />
            <main>{children}</main>
        </div>
    )
}
