import React from 'react'
import { react } from '../../data/reactlink'
import { useNavigate } from 'react-router-dom'

const ReackUi = () => {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">React UI Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {react.map((resource) => (
          <div key={resource.key} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative pb-[56.25%] overflow-hidden">
              <img
                src={resource.img}
                alt={resource.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{resource.title}</h2>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  {resource.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 line-clamp-3">{resource.description}</p>
              
              <div className="flex justify-between items-center">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>Visit Website</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <button
                  onClick={() => navigate(`/reactui/${resource.id}`)}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReackUi