import { useState, useEffect } from 'react';
import { Search, Download } from 'lucide-react';
import axios from 'axios';

export default function StudentPortal() {
  const [schedules, setSchedules] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/public/schedules')
      .then(res => setSchedules(res.data.data || []))
      .catch(() => setSchedules([]));
  }, []);

  const filtered = schedules.filter(item => {
    const hay = `${item.batch} ${item.courseCode} ${item.courseName} ${item.date}`.toLowerCase();
    return hay.includes(searchFilter.toLowerCase());
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Assessment Timetable</h1>
          <p className="text-gray-500 mt-1">Search and view published assessment schedules.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition shadow-sm">
            <Download className="w-4 h-4" /> PDF
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by batch, course, or date..."
          className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 font-medium text-gray-600">Date</th>
              <th className="px-6 py-4 font-medium text-gray-600">Time</th>
              <th className="px-6 py-4 font-medium text-gray-600">Batch</th>
              <th className="px-6 py-4 font-medium text-gray-600">Course</th>
              <th className="px-6 py-4 font-medium text-gray-600">Room</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">{new Date(item.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-gray-500">{item.startTime} - {item.endTime}</td>
                <td className="px-6 py-4"><span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">{item.batch}</span></td>
                <td className="px-6 py-4">{item.courseCode}</td>
                <td className="px-6 py-4 text-gray-500">{item.allocations?.map(a => a.room?.roomNumber).join(', ')}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan="5" className="px-6 py-8 text-center text-gray-500">No schedules published yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
