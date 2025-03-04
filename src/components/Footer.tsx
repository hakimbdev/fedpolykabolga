import React from 'react';
import { Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8" />
              <span className="font-bold text-xl">Federal Polytechnic Kabo</span>
            </div>
            <p className="text-blue-200">
              Empowering students through quality education, innovation, and technological advancement.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">info@fepoka.edu.ng</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <div className="text-blue-100">
                  <p>+234 XXX XXX XXXX</p>
                  <p>+234 XXX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-1" />
                <span className="text-blue-100">
                  Federal Polytechnic Kabo<br />
                  Kabo, Kano State<br />
                  Nigeria
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/academics" className="text-blue-200 hover:text-white transition-colors">Academic Programs</a></li>
              <li><a href="/admission" className="text-blue-200 hover:text-white transition-colors">Admission</a></li>
              <li><a href="/facilities" className="text-blue-200 hover:text-white transition-colors">Facilities</a></li>
              <li><a href="/research" className="text-blue-200 hover:text-white transition-colors">Research</a></li>
              <li><a href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Schools</h3>
            <ul className="space-y-3">
              <li className="text-blue-200">School of Engineering</li>
              <li className="text-blue-200">School of Science & Technology</li>
              <li className="text-blue-200">School of Health Sciences</li>
              <li className="text-blue-200">School of Environmental Studies</li>
              <li className="text-blue-200">School of Social and Management Studies</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800">
          <p className="text-center text-blue-200">&copy; {new Date().getFullYear()} Federal Polytechnic Kabo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;