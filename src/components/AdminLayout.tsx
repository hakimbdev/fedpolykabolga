import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UserCircle, 
  Settings, 
  ClipboardList, 
  BarChart2,
  LogOut,
  UserPlus
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const menuItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/profile', icon: UserCircle, label: 'Profile' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' },
    { path: '/admin/registrations', icon: ClipboardList, label: 'Registration List' },
    { path: '/admin/reports', icon: BarChart2, label: 'Reports' },
    { path: '/admin/supervisor-registration', icon: UserPlus, label: 'Supervisor Registration' },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-darkblue-900 text-white">
        <div className="flex flex-col h-full">
          <div className="p-4">
            <h1 className="text-xl font-bold">BIARN Admin</h1>
          </div>
          
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-darkblue-800 text-white'
                        : 'hover:bg-darkblue-800/50'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-darkblue-800">
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-3 px-4 py-3 w-full rounded-lg hover:bg-darkblue-800/50 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <Outlet />
      </div>
    </div>
  );
}