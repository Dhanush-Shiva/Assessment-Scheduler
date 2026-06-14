import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import StudentPortal from './pages/StudentPortal';
import AdminDashboard from './pages/AdminDashboard';
import HodPortal from './pages/HodPortal';
import RepPortal from './pages/RepPortal';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Login />;
  if (user.role !== allowedRole) return <div className="p-8 text-center text-gray-500">Access Denied</div>;
  return children;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StudentPortal />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<ProtectedRoute allowedRole="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="hod" element={<ProtectedRoute allowedRole="hod"><HodPortal /></ProtectedRoute>} />
        <Route path="rep" element={<ProtectedRoute allowedRole="representative"><RepPortal /></ProtectedRoute>} />
      </Route>
    </Routes>
  );
}