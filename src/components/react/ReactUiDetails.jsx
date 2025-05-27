import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { react } from '../../data/reactlink'

const ReactUiDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const resource = react.find(item => item.id === parseInt(id))

  if (!resource) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Resource not found</h2>
        <button
          onClick={() => navigate('/reactui')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to React UI Resources
        </button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/reactui')}
        className="mb-6 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
      >
        Back to React UI Resources
      </button>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative pb-[40%] overflow-hidden">
          <img
            src={resource.img}
            alt={resource.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold text-gray-800">{resource.title}</h1>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {resource.category}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                {resource.key}
              </span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg mb-6">{resource.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Resource Details</h2>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Category:</span> {resource.category}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Type:</span> {resource.key}
                </p>
              </div>
              
              {resource.url && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Resource Link</h2>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactUiDetails