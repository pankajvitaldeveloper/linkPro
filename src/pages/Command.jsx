import React from 'react'
import { FaCopy } from 'react-icons/fa'

const Command = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  const backendCommands = `# Initial Setup
mkdir backend && cd backend
npm init -y

# Core Dependencies
npm install express mongoose cors dotenv bcryptjs jsonwebtoken

# Development Dependencies
npm install --save-dev nodemon

# Additional Useful Packages
npm install colors morgan multer validator express-rate-limit helmet
npm install winston express-async-handler cookie-parser

# Return to root
cd ..`

  const frontendCommands = `# Project Setup
npm create vite@latest frontend
cd frontend

# Core Dependencies
npm install react-router-dom axios react-icons dotenv

# State Management & Forms
npm install @reduxjs/toolkit react-redux
npm install react-hook-form yup @hookform/resolvers

# UI Components & Styling
npm install tailwindcss postcss autoprefixer
npm install react-toastify framer-motion
npm install @headlessui/react @heroicons/react

# Development Tools
npm install --save-dev @testing-library/react @testing-library/jest-dom

# Return to root
cd ..`

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Project Setup Commands</h1>
      
      <div className="mb-8">
        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-t-lg">
          <h2 className="text-white font-semibold">Backend Setup</h2>
          <button
            onClick={() => copyToClipboard(backendCommands)}
            className="text-white hover:text-gray-300"
            title="Copy commands"
          >
            <FaCopy size={20} />
          </button>
        </div>
        <pre className="bg-gray-100 p-4 rounded-b-lg whitespace-pre-wrap font-mono text-sm">
          {backendCommands}
        </pre>
      </div>

      <div>
        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-t-lg">
          <h2 className="text-white font-semibold">Frontend Setup</h2>
          <button
            onClick={() => copyToClipboard(frontendCommands)}
            className="text-white hover:text-gray-300"
            title="Copy commands"
          >
            <FaCopy size={20} />
          </button>
        </div>
        <pre className="bg-gray-100 p-4 rounded-b-lg whitespace-pre-wrap font-mono text-sm">
          {frontendCommands}
        </pre>
        {/* <iframe 
          src="https://gamma.app/embed/q8ey7gisvcug5h7" 
          style={{ width: '700px', maxWidth: '100%', height: '450px' }} 
          allow="fullscreen" 
          title="Understanding JWTs in Node.js"
        /> */}
      </div>
    </div>
  )
}

export default Command