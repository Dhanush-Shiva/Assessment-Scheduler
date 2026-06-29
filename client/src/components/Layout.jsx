import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LogOut, Calendar } from 'lucide-react';

export default function Layout() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <Calendar className="w-5 h-5 text-black" />
              Assessment Scheduler
            </Link>
            <div className="flex items-center gap-4">
              {!user ? (
                <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-black transition">Sign In</Link>
              ) : (
                <button onClick={logout} className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
