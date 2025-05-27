import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-5 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">
            Link<span className="text-blue-500">Pro</span>
          </h2>
          <nav className="flex space-x-4">
            <Link to="/ui" className="hover:text-blue-500 transition">UI</Link>
            <Link to="/reactui" className="hover:text-blue-500 transition">React UI</Link>
            <Link to="/command" className="hover:text-blue-500 transition">Command</Link>
            <Link to="/career" className="hover:text-blue-500 transition">Career</Link>
            <Link to="/ai" className="hover:text-blue-500 transition">AI</Link>
            <Link to="/extention" className="hover:text-blue-500 transition">Extension</Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} LinkPro. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/facebook"
              className="hover:text-blue-500 transition"
            >
              Facebook
            </Link>
            <Link
              to="/twitter"
              className="hover:text-blue-500 transition"
            >
              Twitter
            </Link>
            <Link
              to="/linkedin"
              className="hover:text-blue-500 transition"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;