import React from "react";
import Sidebar from "../components/Sidebar";
import { Plus, Sparkles, Search, Settings, MoreHorizontal, ChevronDown, PieChart } from "lucide-react";

const Dashboard = () => {
  const tests = [
    {
      id: 1,
      title: "Example Quiz for Restaurant Staff",
      status: "SETUP IN PROGRESS",
      date: "2026-02-13",
      active: false,
    },
    {
      id: 2,
      title: "Example: Customer Care Periodic Test",
      status: "SETUP IN PROGRESS",
      date: "2026-02-13",
      active: false,
    },
    {
      id: 3,
      title: "Example Product Knowledge Test for Sales",
      status: "SETUP IN PROGRESS",
      date: "2026-02-13",
      active: false,
    },
    {
      id: 4,
      title: "Example Reasoning Test",
      status: "ACTIVE",
      date: "2026-02-13",
      active: true,
      avgScore: "53.3%",
      results: 30,
    },
  ];

  return (
    <div className='flex min-h-screen bg-[#f1f5f9]'>
      {/* 1. Sidebar Component */}
      <Sidebar />

      {/* 2. Main Content Area */}
      <main className='flex-1 ml-64 p-8'>
        {/* Top Header */}
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-xl font-semibold text-slate-800'>
            My tests <span className='text-slate-400 font-normal'>(4)</span>
          </h1>
          <div className='flex gap-3'>
            <button className='flex items-center gap-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-4 py-2 rounded-md font-medium transition-colors text-sm'>
              <Sparkles size={18} />
              Generate questions
            </button>
            <button className='flex items-center gap-2 bg-[#00c288] hover:bg-[#00b377] text-white px-4 py-2 rounded-md font-medium transition-colors text-sm'>
              <Plus size={18} />
              New test
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className='flex justify-between items-center bg-white p-4 rounded-t-lg border border-slate-200 border-b-0'>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2 text-sm text-slate-600 cursor-pointer'>
              <span>Category</span>
              <span className='font-semibold text-slate-800'>All categories</span>
              <ChevronDown size={16} />
            </div>
            <div className='flex items-center gap-2 text-sm text-slate-500 hover:text-[#00c288] cursor-pointer'>
              <Settings size={16} />
              <span>Manage categories</span>
            </div>
          </div>
          <div className='flex items-center gap-4 text-sm'>
            <div className='flex items-center gap-2 text-slate-600'>
              <span>Status</span>
              <span className='font-semibold text-slate-800'>All</span>
              <ChevronDown size={16} />
            </div>
            <Search size={20} className='text-slate-400 cursor-pointer ml-4' />
          </div>
        </div>

        {/* Tests Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {tests.map((test) => (
            <div
              key={test.id}
              className='bg-white rounded-lg border border-slate-200 shadow-sm relative overflow-hidden flex flex-col'>
              {/* Colored side indicator */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${test.active ? "bg-emerald-500" : "bg-purple-400"}`}></div>

              <div className='p-6'>
                <div className='flex justify-between items-start mb-4'>
                  <div className='flex gap-3 items-center'>
                    <span
                      className={`text-[10px] font-bold px-2 py-1 rounded border ${test.active ? "text-emerald-600 border-emerald-200 bg-emerald-50" : "text-purple-600 border-purple-200 bg-purple-50"}`}>
                      {test.status}
                    </span>
                    <span className='text-[10px] text-slate-400 font-medium'>CREATED: {test.date}</span>
                  </div>
                  <MoreHorizontal size={20} className='text-slate-400 cursor-pointer' />
                </div>

                <h2 className='text-lg font-bold text-slate-800 mb-1'>{test.title}</h2>
                <p className='text-sm text-slate-400 mb-6'>(no description)</p>

                <div className='flex justify-between items-center mt-auto'>
                  <div className='flex items-center gap-4'>
                    {test.active && (
                      <>
                        <div className='flex items-center gap-1.5 text-slate-500 text-sm'>
                          <PieChart size={16} />
                          <span>
                            <span className='font-bold text-slate-700'>{test.avgScore}</span> avg. score
                          </span>
                        </div>
                        <div className='text-slate-500 text-sm'>
                          Results <span className='font-bold text-slate-700'>({test.results})</span>
                        </div>
                      </>
                    )}
                  </div>
                  <span className='text-[10px] font-bold text-slate-400 tracking-wider bg-slate-50 px-2 py-1 border border-slate-100 rounded uppercase'>
                    Uncategorized
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
