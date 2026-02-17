import SideBar from "@/components/SideBar"

const links = [
    { name: 'Dashboard', href: '/student/dashboard' },
    { name: 'Syllabus', href: '/student/syllabus' },
    { name: 'Grades', href: '/student/grades' },
    { name: 'Assignments', href: '/student/assignments' },
    { name: 'Calender', href: '/student/calender' },
    { name: 'Messages', href: '/student/messages' },
    { name: 'Profile', href: '/student/profile' },
];

export default function StudentLayout({ children }) {
    return (
        <div className="flex">
            <SideBar links={links} />
            <main className="p-12">{children}</main>
        </div>
    )
}
