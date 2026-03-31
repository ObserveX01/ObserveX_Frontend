import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { ShieldAlert, AlertTriangle, Users } from "lucide-react";

const ViolationPage = () => {
  const [data, setData] = useState([]);
  const userRole = sessionStorage.getItem("userRole");
  const userEmail = sessionStorage.getItem("userEmail");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          userRole === "Admin"
            ? "http://localhost:5142/api/violations/all"
            : `http://localhost:5142/api/violations/teacher/${userEmail}`;

        const res = await fetch(url);
        const result = await res.json();

        // 🔥 GROUP DATA
        const grouped = {};

        result.forEach((item) => {
          const key =
            item.studentEmail + "_" + item.courseName + "_" + item.teacherEmail;

          if (!grouped[key]) {
            grouped[key] = {
              studentEmail: item.studentEmail,
              teacherEmail: item.teacherEmail,
              courseName: item.courseName,
              count: 0,
              last: item.timestamp,
            };
          }

          grouped[key].count += 1;

          if (new Date(item.timestamp) > new Date(grouped[key].last)) {
            grouped[key].last = item.timestamp;
          }
        });

        setData(Object.values(grouped));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [userRole, userEmail]);

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <main className="flex-1 ml-64 p-10">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-red-100 p-4 rounded-2xl">
            <ShieldAlert className="text-red-600" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-800">
              Violation Monitoring
            </h1>
            <p className="text-slate-500 text-sm">
              Track suspicious activities detected by AI
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <StatCard
            title="Total Violations"
            value={data.reduce((acc, cur) => acc + cur.count, 0)}
            icon={<AlertTriangle className="text-red-500" />}
          />
          <StatCard
            title="Students Flagged"
            value={data.length}
            icon={<Users className="text-blue-500" />}
          />
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="font-black text-lg text-slate-700">
              Violation Summary
            </h2>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
              <tr>
                <th className="p-4 text-left">Student</th>
                <th className="p-4 text-left">Teacher</th>
                <th className="p-4 text-left">Course</th>
                <th className="p-4 text-left">Violations</th>
                <th className="p-4 text-left">Last Activity</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-slate-50 transition"
                >
                  <td className="p-4 font-medium text-slate-700">
                    {item.studentEmail}
                  </td>
                  <td className="p-4 text-slate-600">{item.teacherEmail}</td>

                  <td className="p-4 text-slate-600">{item.courseName}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.count >= 3
                          ? "bg-red-100 text-red-600"
                          : "bg-amber-100 text-amber-600"
                      }`}
                    >
                      {item.count}
                    </span>
                  </td>

                  <td className="p-4 text-slate-500">
                    {new Date(item.last).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* EMPTY STATE */}
        {data.length === 0 && (
          <div className="text-center mt-20 text-slate-400">
            No violations detected 🎉
          </div>
        )}
      </main>
    </div>
  );
};

// 🔥 REUSABLE CARD
const StatCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex justify-between items-center">
    <div>
      <p className="text-xs text-slate-400 font-bold uppercase">{title}</p>
      <h2 className="text-2xl font-black text-slate-800">{value}</h2>
    </div>
    <div className="bg-slate-100 p-3 rounded-xl">{icon}</div>
  </div>
);

export default ViolationPage;
