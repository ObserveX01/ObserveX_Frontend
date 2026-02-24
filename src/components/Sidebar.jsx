import React from "react";
import {
  LayoutGrid,
  Users,
  BarChart2,
  User,
  HelpCircle,
  LogOut,
  ChevronLeft,
  PlusSquare, // Icon for Create Question
  List, // Icon for My Question
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { BookOpenCheck } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // To handle active state correctly

  // 1. Get the user role from localStorage
  const userRole = localStorage.getItem("userRole");

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <aside className='w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full shadow-sm z-50'>
      {/* Brand Logo */}
      <div className='p-6 flex items-center gap-3'>
        <img src={logo} alt='ObserveX Logo' className='w-8 h-8' />
        <span className='text-xl font-bold tracking-tight text-[#004242] uppercase'>observeX</span>
      </div>

      {/* Main Navigation Items */}
      <nav className='flex-1 px-3 mt-4'>
        <SidebarLink
          icon={<LayoutGrid size={20} />}
          label='My tests'
          active={location.pathname === "/dashboard"}
          onClick={() => navigate("/dashboard")}
        />

        {/* 2. Additional Items for Teacher Only */}
        {userRole === "Teacher" && (
          <>
            <SidebarLink
              icon={<PlusSquare size={20} />}
              label='Create Question'
              active={location.pathname === "/create-question"}
              onClick={() => navigate("/create-question")}
            />
            <SidebarLink
              icon={<List size={20} />}
              label='My Question'
              active={location.pathname === "/my-questions"}
              onClick={() => navigate("/my-questions")}
            />
            <SidebarLink
              icon={<BookOpenCheck size={20} />}
              label='Course Question'
              active={location.pathname === "/course-questions"}
              onClick={() => navigate("/course-questions")}
            />
          </>
        )}

        <SidebarLink icon={<Users size={20} />} label='Respondents' />
        <SidebarLink icon={<BarChart2 size={20} />} label='Results database' />
        <SidebarLink
          icon={<User size={20} />}
          label='My account'
          active={location.pathname === "/account"}
          onClick={() => navigate("/account")}
        />
      </nav>

      {/* Bottom Navigation Items */}
      <div className='px-3 pb-6 border-t border-slate-100 pt-4'>
        <SidebarLink
          icon={<HelpCircle size={20} />}
          label='Help'
          active={location.pathname === "/help"}
          onClick={() => navigate("/help")}
        />

        {/* Sign Out Button */}
        <SidebarLink icon={<LogOut size={20} />} label='Sign out' onClick={handleLogout} />

        <SidebarLink icon={<ChevronLeft size={20} />} label='Hide' />
      </div>
    </aside>
  );
};

/**
 * SidebarLink Helper Component
 */
const SidebarLink = ({ icon, label, active = false, onClick }) => (
  <div
    onClick={onClick}
    className={`
      flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all mb-1
      ${
        active
          ? "bg-emerald-50 text-emerald-600 font-semibold shadow-sm"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
      }
    `}>
    <span className={active ? "text-emerald-600" : "text-slate-400"}>{icon}</span>
    <span className='text-sm'>{label}</span>
  </div>
);

export default Sidebar;
