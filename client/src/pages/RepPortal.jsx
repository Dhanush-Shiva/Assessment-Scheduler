import { useState } from 'react';

export default function RepPortal() {
  const [sameDayPreference, setSameDayPreference] = useState('None');

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Batch Configuration</h1>
        <p className="text-gray-500 mt-1">Enter courses and scheduling preferences for the upcoming assessment.</p>
      </div>
      <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
        <h3 className="text-base font-semibold mb-4">Scheduling Preferences</h3>
        <select
          value={sameDayPreference}
          onChange={(e) => setSameDayPreference(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
        >
          <option value="None">No Preference (Default)</option>
          <option value="All">All batches on same day</option>
          <option value="N and P">N and P on same day</option>
          <option value="N and Q">N and Q on same day</option>
          <option value="P and Q">P and Q on same day</option>
        </select>
      </div>
    </div>
  );
}
