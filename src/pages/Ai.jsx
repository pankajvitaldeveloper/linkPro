import React, { useState } from 'react'
import { aiLinks } from '../data/ai'

const Ai = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPricing, setSelectedPricing] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Get unique categories
  const categories = ['all', ...new Set(aiLinks.map(tool => tool.category))]
  const pricingOptions = ['all', 'free', 'paid', 'freemium']

  // Filter tools based on selected filters and search term
  const filteredTools = aiLinks.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory
    const matchesPricing = selectedPricing === 'all' || tool.pricing === selectedPricing
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.key.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesPricing && matchesSearch
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">AI Tools Directory</h1>
      
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search AI tools..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedPricing}
          onChange={(e) => setSelectedPricing(e.target.value)}
        >
          {pricingOptions.map(option => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map(tool => (
          <div key={tool.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            {/* <div className="aspect-w-16 aspect-h-9">
              <img
                src={tool.img}
                alt={tool.name}
                className="w-full h-48 object-cover"
              />
            </div> */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{tool.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  tool.pricing === 'free' ? 'bg-green-100 text-green-800' :
                  tool.pricing === 'paid' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.key.split(', ').map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-blue-600">{tool.category}</span>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredTools.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No AI tools found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}

export default Ai