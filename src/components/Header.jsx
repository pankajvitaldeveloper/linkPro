import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="text-2xl font-bold text-blue-600">LinkPro</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/ui" className="text-gray-600 hover:text-blue-600 transition-colors">UI</Link>
            {/* <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link> */}
            <Link to="/reactui" className="text-gray-600 hover:text-blue-600 transition-colors">React UI</Link>
            <Link to="/Command" className="text-gray-600 hover:text-blue-600 transition-colors">Command</Link>
            <Link to="/career" className="text-gray-600 hover:text-blue-600 transition-colors">Career</Link>
            <Link to="/ai" className="text-gray-600 hover:text-blue-600 transition-colors">Ai</Link>
            <Link to="/extention" className="text-gray-600 hover:text-blue-600 transition-colors">Extention</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/ui" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                UI
              </Link>
              {/* <Link 
                to="/about" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link> */}
              <Link
               to="/reackui"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              >
              Reack Ui
              </Link>
              <Link
               to="/command"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              >
              Command
              </Link>
              <Link
               to="/career"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              >
              Career
              </Link>
              <Link
               to="/ai"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              >
              Ai
              </Link>
              <Link
               to="/extention"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              >
              Extention
              </Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header