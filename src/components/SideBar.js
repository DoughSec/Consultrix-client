"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuGraduationCap } from "react-icons/lu";

const SideBar = ({ links }) => {
  const pathname = usePathname();

  return (
    <aside className="bg-black/20 w-64 px-6 py-4 h-screen border-r border-white/20 flex flex-col">
      <div className="flex flex-col gap-12 mt-8">
        <div className="flex gap-4">
          <div className="bg-linear-to-br from-[#7156FF] to-[#9426FC] h-12 w-12 rounded-lg flex items-center justify-center">
            <LuGraduationCap size={40} />
          </div>
          <div className="flex flex-col ">
            <span className="text-xl">Consultrix</span>
            <span className="text-sm text-gray-500">Student</span>
          </div>
        </div>
        <div className="h-px -mx-6 bg-white/20" />
        <ul className="flex flex-col gap-4">
          {links.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-4 p-2 rounded-lg hover:bg-blue-500/30 ${isActive ? "bg-blue-500" : ""
                    }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-auto">
        <div className="h-px -mx-6 bg-white/20" />
        <button
          type="button"
          className="mt-4 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
        >
          Log Out
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
