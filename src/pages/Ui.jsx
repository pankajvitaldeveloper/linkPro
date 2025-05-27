import React, { useState, useEffect } from 'react'
import { ui } from '../data/ui'
import { useNavigate } from 'react-router-dom'

const UI = () => {
  const [resources, setResources] = useState([])
  const [filteredResources, setFilteredResources] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeKey, setActiveKey] = useState('all')
  const navigate = useNavigate()

  useEffect(() => {
    setResources(ui)
    setFilteredResources(ui)
  }, [])

  // Get unique categories and keys
  const categories = ['all', ...new Set(ui.map(item => item.category))]
  const keys = ['all', ...new Set(ui.map(item => item.key))]

  const handleFilter = (category, key) => {
    let filtered = [...ui]
    
    if (category !== 'all') {
      setActiveCategory(category)
      filtered = filtered.filter(item => item.category === category)
    } else {
      setActiveCategory('all')
    }

    if (key !== 'all') {
      setActiveKey(key)
      filtered = filtered.filter(item => item.key === key)
    } else {
      setActiveKey('all')
    }

    setFilteredResources(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleFilter(category, activeKey)}
                className={`px-4 py-2 rounded-full ${activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Types</h3>
          <div className="flex flex-wrap gap-2">
            {keys.map(key => (
              <button
                key={key}
                onClick={() => handleFilter(activeCategory, key)}
                className={`px-4 py-2 rounded-full ${activeKey === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(resource => (
          <div
            key={resource.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative pb-[60%] overflow-hidden">
              <img
                src={resource.img}
                alt={resource.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">{resource.title}</h2>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {resource.category}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {resource.key}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>
              <div className="flex gap-2">
                {resource.url && (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Visit Website
                  </a>
                )}
                <button
                  onClick={() => navigate(`/ui/${resource.id}`)}
                  className="inline-block bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-700">No resources found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your filters</p>
        </div>
      )}
    </div>
  )
}

export default UI