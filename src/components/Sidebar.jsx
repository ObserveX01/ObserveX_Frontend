import React from "react";
import { LayoutGrid, Users, BarChart2, User, HelpCircle, LogOut, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // 1. Clear the session from localStorage
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");

    // 2. Redirect the user back to the Landing Page
    navigate("/");
  };

  return (
    <aside className='w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full shadow-sm z-50'>
      {/* Brand Logo */}
      <div className='p-6 flex items-center gap-3'>
        {/* <div className='bg-[#00c288] p-1.5 rounded-lg'>
          <LayoutGrid className='text-white w-5 h-5' />
        </div> */}
        <img src={logo} alt='ObserveX Logo' className='w-8 h-8' />
        <span className='text-xl font-bold tracking-tight text-[#004242] uppercase'>observeX</span>
      </div>

      {/* Main Navigation Items */}
      <nav className='flex-1 px-3 mt-4'>
        <SidebarLink
          icon={<LayoutGrid size={20} />}
          label='My tests'
          active={window.location.pathname === "/dashboard"}
          onClick={() => navigate("/dashboard")}
        />
        <SidebarLink icon={<Users size={20} />} label='Respondents' />
        <SidebarLink icon={<BarChart2 size={20} />} label='Results database' />
        <SidebarLink icon={<User size={20} />} label='My account' onClick={() => navigate("/account")} />
      </nav>

      {/* Bottom Navigation Items */}
      <div className='px-3 pb-6 border-t border-slate-100 pt-4'>
        <SidebarLink icon={<HelpCircle size={20} />} label='Help' onClick={() => navigate("/help")} />

        {/* Sign Out Button */}
        <SidebarLink icon={<LogOut size={20} />} label='Sign out' onClick={handleLogout} />

        <SidebarLink icon={<ChevronLeft size={20} />} label='Hide' />
      </div>
    </aside>
  );
};

/**
 * SidebarLink Helper Component
 * Handles the styling and the click events for each item
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
