import SideBar from "@/components/SideBar";
import {
  LuLayoutDashboard,
  LuBookOpen,
  LuGraduationCap,
  LuFolderCode,
  LuMessageSquare,
  LuUserRound,
} from "react-icons/lu";
import { MdDateRange } from "react-icons/md";

const links = [
  {
    name: "Dashboard",
    href: "/student/dashboard",
    icon: <LuLayoutDashboard color="white" size={30} />,
  },
  {
    name: "Syllabus",
    href: "/student/syllabus",
    icon: <LuBookOpen color="white" size={30} />,
  },
  {
    name: "Grades",
    href: "/student/grades",
    icon: <LuGraduationCap color="white" size={30} />,
  },
  {
    name: "Assignments",
    href: "/student/assignments",
    icon: <LuFolderCode color="white" size={30} />,
  },
  {
    name: "Calender",
    href: "/student/calender",
    icon: <MdDateRange color="white" size={30} />,
  },
  {
    name: "Messages",
    href: "/student/messages",
    icon: <LuMessageSquare color="white" size={30} />,
  },
  {
    name: "Profile",
    href: "/student/profile",
    icon: <LuUserRound color="white" size={30} />,
  },
];

export default function StudentLayout({ children }) {
  return (
    <div className="flex bg-black text-white">
      <SideBar links={links} />
      <main className="p-12 w-full">{children}</main>
    </div>
  );
}
