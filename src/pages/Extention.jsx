import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Extension = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')

  const extensions = [
    {
      name: 'Auto Close Tag',
      author: 'formulahendry',
      description: 'Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text',
      category: 'html'
    },
    {
      name: 'Auto Rename Tag',
      author: 'formulahendry',
      description: 'Auto rename paired HTML/XML tag',
      category: 'html'
    },
    {
      name: 'Bracket Pair Colorization Toggler',
      author: 'dzhavat',
      description: 'Quickly toggle \'Bracket Pair Colorization\' setting with a simple command',
      category: 'editor'
    },
    {
      name: 'Code Runner',
      author: 'formulahendry',
      description: 'Run multiple programming languages',
      category: 'programming'
    },
    {
      name: 'ES7+ React/Redux/React-Native snippets',
      author: 'dsznajder',
      description: 'Extensions for React, React-Native and Redux in JS/TS with ES7+ syntax',
      category: 'react'
    },
    {
      name: 'JavaScript (ES6) code snippets',
      author: 'xabikos',
      description: 'Code snippets for JavaScript in ES6 syntax',
      category: 'javascript'
    },
    {
      name: 'Live Server',
      author: 'ritwickdey',
      description: 'Launch a development local Server with live reload feature',
      category: 'tools'
    },
    {
      name: 'Material Icon Theme',
      author: 'PKief',
      description: 'Material Design Icons for Visual Studio Code',
      category: 'theme'
    },
    {
      name: 'MERN Snippets',
      author: 'devzstudio',
      description: 'Mongodb ExpressJS React Nodejs snippets',
      category: 'mern'
    },
    {
      name: 'Postman',
      author: 'Postman',
      description: 'Powerful API testing and development tool for building and testing HTTP requests',
      category: 'api'
    },
    {
      name: 'Prettier - Code formatter',
      author: 'esbenp',
      description: 'Code formatter using prettier',
      category: 'formatter'
    },
    {
      name: 'Redux DevTools',
      author: 'Redux DevTools',
      description: 'Redux DevTools for debugging application\'s state changes',
      category: 'redux'
    },
    {
      name: 'Tailwind CSS IntelliSense',
      author: 'bradlc',
      description: 'Intelligent Tailwind CSS tooling for VS Code',
      category: 'css'
    },
    {
      name: 'Thunder Client',
      author: 'rangav',
      description: 'Lightweight Rest API Client for VS Code',
      category: 'api'
    },
    {
      name: 'vscode-icons',
      author: 'vscode-icons-team',
      description: 'Icons for Visual Studio Code',
      category: 'theme'
    },
    {
      name: 'Visual Studio Code',
      author: 'Microsoft',
      description: 'A lightweight but powerful source code editor with built-in support for JavaScript, TypeScript and Node.js',
      category: 'code-editor'
    },
    {
      name: 'Cursor',
      author: 'Cursor Team',
      description: 'AI-first code editor that helps developers write, understand, and debug code faster',
      category: 'code-editor'
    },
    {
      name: 'Trae AI',
      author: 'Trae Team',
      description: 'Next-generation code editor with integrated AI capabilities for enhanced development workflow',
      category: 'code-editor'
    },
    {
      name: 'Sublime Text',
      author: 'Sublime HQ',
      description: 'A sophisticated text editor for code, markup and prose with outstanding performance',
      category: 'code-editor'
    },
    {
      name: 'Atom',
      author: 'GitHub',
      description: 'A hackable text editor for the 21st Century, built on Electron framework',
      category: 'code-editor'
    }
  ]

  const categories = ['all', ...new Set(extensions.map(ext => ext.category))]

  const filteredExtensions = extensions.filter(ext => {
    const matchesSearch = ext.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ext.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = category === 'all' || ext.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">VS Code Extensions</h1>
      
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search extensions..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        
        <select
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExtensions.map((ext, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-lg font-semibold text-blue-600">{ext.name}</h2>
              <span className="px-2 py-1 bg-gray-100 text-sm rounded-full">{ext.category}</span>
            </div>
            <p className="text-gray-600 mb-3">{ext.description}</p>
            <p className="text-sm text-gray-500">By {ext.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Extension