import { useState, useEffect } from 'react';

export default function HodPortal() {
  const [pendingSchedules, setPendingSchedules] = useState([]);

  useEffect(() => {
    setPendingSchedules([]);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">HOD Approval Desk</h1>
        <p className="text-gray-500 mt-1">Review generated draft schedules before publication.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm p-8 text-center text-gray-500">
        No schedules pending review.
      </div>
    </div>
  );
}
