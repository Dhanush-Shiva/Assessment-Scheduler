import { useState, useEffect } from 'react';
import { CheckCircle, Clock, Calendar } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
      <h3 className="text-3xl font-bold tracking-tight">{value}</h3>
    </div>
    <div className="p-3 bg-gray-50 rounded-xl text-gray-600">
      <Icon className="w-5 h-5" />
    </div>
  </div>
);

export default function AdminDashboard() {
  const [stats, setStats] = useState({ total: 124, pending: 12, published: 112 });

  useEffect(() => {}, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
        <p className="text-gray-500 mt-1">Manage schedules, handle approvals, and upload timetables.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Assessments" value={stats.total} icon={Calendar} />
        <StatCard title="Pending Approvals" value={stats.pending} icon={Clock} />
        <StatCard title="Published" value={stats.published} icon={CheckCircle} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Upload Timetables</h3>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition cursor-pointer">
            <Calendar className="w-8 h-8 text-gray-400 mb-3" />
            <p className="text-sm font-medium text-gray-900">Click to upload Excel file</p>
            <p className="text-xs text-gray-500 mt-1">Supports Faculty, Batch, and PG .xlsx files</p>
          </div>
          <button className="w-full mt-4 bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition">Process File</button>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Schedule Generation</h3>
            <p className="text-sm text-gray-500 mb-6">Run the automated constraint-based scheduler for the current configuration window.</p>
          </div>
          <div className="space-y-3">
            <button className="w-full border border-gray-200 text-gray-700 py-2.5 rounded-lg text-sm font-medium hover:border-black hover:text-black transition">View Conflicts</button>
            <button className="w-full bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition">Generate Draft Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
}
