import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import AdminLayout from './components/AdminLayout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About.tsx';
import Programs from './pages/Programs.tsx';
import Implementation from './pages/Implementation.tsx';
import Contact from './pages/Contact.tsx';
import Register from './pages/Register.tsx';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import Profile from './pages/admin/Profile';
import Settings from './pages/admin/Settings';
import RegistrationList from './pages/admin/RegistrationList';
import Reports from './pages/admin/Reports';
import SupervisorRegistration from './pages/admin/SupervisorRegistration';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main className="flex-grow"><Home /></main>
                <Footer />
              </>
            }
          />
          <Route 
            path="/about" 
            element={
              <>
                <Navbar />
                <main className="flex-grow"><About /></main>
                <Footer />
              </>
            }
          />
          <Route 
            path="/programs" 
            element={
              <>
                <Navbar />
                <main className="flex-grow"><Programs /></main>
                <Footer />
              </>
            }
          />
          <Route 
            path="/implementation" 
            element={
              <>
                <Navbar />
                <main className="flex-grow"><Implementation /></main>
                <Footer />
              </>
            }
          />
          <Route 
            path="/contact" 
            element={
              <>
                <Navbar />
                <main className="flex-grow"><Contact /></main>
                <Footer />
              </>
            }
          />
          <Route 
            path="/register" 
            element={
              <>
                <Navbar />
                <main className="flex-grow"><Register /></main>
                <Footer />
              </>
            }
          />
          <Route 
            path="/supervisor-registration" 
            element={
              <>
                <Navbar />
                <main className="flex-grow"><SupervisorRegistration /></main>
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          <Route 
            path="/admin"
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="registrations" element={<RegistrationList />} />
            <Route path="reports" element={<Reports />} />
            <Route path="supervisor-registration" element={<SupervisorRegistration />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
