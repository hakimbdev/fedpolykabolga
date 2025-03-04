import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Branding */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://res.cloudinary.com/dc5qncppu/image/upload/v1740480225/FEDPOLYLOGO_dt7a5r.jpg" 
              alt="FEPOKA Logo" 
              className="h-16 w-16 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight">
                FEDERAL POLYTECHNIC
              </span>
              <span className="font-bold text-xl leading-tight">
                KABO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Main Navigation Links */}
            <Link to="/" className="hover:bg-blue-800 px-3 py-2 rounded-lg transition-colors">
              Home
            </Link>
            <Link to="/academics" className="hover:bg-blue-800 px-3 py-2 rounded-lg transition-colors">
              Academics
            </Link>
            <Link to="/admission" className="hover:bg-blue-800 px-3 py-2 rounded-lg transition-colors">
              Admission
            </Link>
            <Link to="/about" className="hover:bg-blue-800 px-3 py-2 rounded-lg transition-colors">
              About
            </Link>

            {/* Online Registration Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-1 hover:bg-blue-800 px-3 py-2 rounded-lg transition-colors"
                onClick={() => toggleDropdown('registration')}
              >
                <span>Online Registration</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'registration' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    to="/staff-login" 
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-50"
                  >
                    Staff Login
                  </Link>
                  <Link 
                    to="/student-login" 
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-50"
                  >
                    Student Login
                  </Link>
                </div>
              )}
            </div>

            {/* Online Application Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-1 hover:bg-blue-800 px-3 py-2 rounded-lg transition-colors"
                onClick={() => toggleDropdown('application')}
              >
                <span>Online Application</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'application' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    to="/staff-application" 
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-50"
                  >
                    Staff Login
                  </Link>
                  <Link 
                    to="/applicant-login" 
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-50"
                  >
                    Applicant Login
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-blue-800 rounded-lg transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 space-y-1">
          <Link to="/" className="block hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors">
            Home
          </Link>
          <Link to="/academics" className="block hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors">
            Academics
          </Link>
          <Link to="/admission" className="block hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors">
            Admission
          </Link>
          <Link to="/about" className="block hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors">
            About
          </Link>
          
          {/* Mobile Registration Links */}
          <div className="px-4 py-2">
            <div className="font-semibold mb-2">Online Registration</div>
            <Link to="/staff-login" className="block hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors ml-4">
              Staff Login
            </Link>
            <Link to="/student-login" className="block hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors ml-4">
              Student Login
            </Link>
          </div>

          {/* Mobile Application Links */}
          <div className="px-4 py-2">
            <div className="font-semibold mb-2">Online Application</div>
            <Link to="/staff-application" className="block hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors ml-4">
              Staff Login
            </Link>
            <Link to="/applicant-login" className="block hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors ml-4">
              Applicant Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
