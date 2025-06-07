import React from 'react'

const Career = () => {
  const featuredResource = {
    website: 'roadmap.sh',
    title: 'Developer Roadmaps & Guides',
    description: 'Interactive **roadmaps**, **guides** and other educational content to help developers grow in their careers. Features **step-by-step guides** for different tech paths including **frontend**, **backend**, **DevOps**, and more.',
    link: 'https://roadmap.sh',
    imageUrl: '/img/career/roadmap.png'
  }

  const learningPlatforms = [
    {
      id: 1,
      website: 'theodinproject.com',
      focusArea: 'Full Stack Web Dev',
      description: 'Free **full-stack curriculum** (**HTML**, **CSS**, **JS**, **Node**, **MongoDB**). Perfect for **MERN** learners.'
    },
    {
      id: 2,
      website: 'freeCodeCamp.org',
      focusArea: 'Web Dev, DSA, AI',
      description: 'Massive **open-source** learning platform. Includes **AI**, **Python**, **ML**, and **Web3** tutorials.'
    },
    {
      id: 3,
      website: 'buildspace.so',
      focusArea: 'Web3 & AI Projects',
      description: 'Learn by building projects in **AI** (**chatbots**, **image generators**) and **Web3** (**NFTs**, **contracts**).'
    },
    {
      id: 4,
      website: 'fast.ai',
      focusArea: 'Deep Learning',
      description: 'World-class **deep learning** course that\'s **practical** and **code-focused** — totally free.'
    },
    {
      id: 5,
      website: 'paperswithcode.com',
      focusArea: 'AI/ML',
      description: 'Tracks the latest **AI research** with **code implementations**. Ideal for building **real AI projects**.'
    }
  ]

  const bonusTools = [
    {
      id: 2,
      website: 'promptengineering.guide',
      focusArea: 'AI Prompting',
      description: 'Free resource to master **prompt engineering** for **LLMs**.'
    },
    {
      id: 3,
      website: 'Alchemy University',
      focusArea: 'Web3 development',
      description: 'Provides comprehensive courses on JavaScript, Ethereum development, and building full-stack dApps.'
    },
    {
      id: 4,
      website: 'mlcourse.ai',
      focusArea: 'Machine Learning',
      description: 'Free **machine learning** course with **Python**.'
    }
  ]

  const renderDescription = (text) => {
    return text.split('**').map((part, index) => {
      return index % 2 === 0 ? 
        part : 
        <strong key={index} className="font-semibold text-gray-900">{part}</strong>
    })
  }

  const interviewPrep = [
      {
      id:1,
      website: 'interviewing.io',
      title: 'Mock Technical Interviews',
      description: 'Practice coding interviews with real engineers from top tech companies. Get **instant feedback** and improve your skills.',
      link: 'https://interviewing.io',
    },
    {
      id: 2,
      website: 'leetcode.com',
      title: 'LeetCode',
      description: 'The go-to platform for practicing coding problems and preparing for technical interviews. Offers a wide range of problems across various difficulty levels.',
      link: 'https://leetcode.com',
    },
    {
      id: 3,
      website: 'pramp.com',
      title: 'Pramp',
      description: 'A peer-to-peer platform for practicing coding interviews with other developers. Offers live coding sessions and feedback.',
      link: 'https://www.pramp.com',
    },
    {
      id: 4,
      website: 'exponent.com',
      title: 'Exponent',
      description: 'Provides resources and mock interviews for technical and behavioral interviews. Focuses on both coding and system design interviews.',
      link: 'https://www.exponent.com',
    },
    {
      id: 5,
      website: 'hired.com',
      title: 'Hired',
      description: 'A job marketplace that connects developers with companies. Offers resources for interview preparation and salary negotiation.',
      link: 'https://hired.com',
    },
    {
      id: 6,
      website: 'interviewcake.com',
      title: 'Interview Cake',
      description: 'Offers coding interview practice problems with detailed solutions and explanations. Focuses on algorithmic thinking and problem-solving skills.',
      link: 'https://www.interviewcake.com',
    },
    {
      id: 7,
      website: 'exercism.org',
      title: 'Exercism',
      description: 'A platform for practicing coding problems in various programming languages. Offers mentorship and code reviews to help improve your skills.',
      link: 'https://exercism.org',
    },
    {
      id: 8,
      website: 'github.com/sudheerj/javascript-interview-questions',
      title: 'JavaScript Interview Questions & Answers',
      description: 'A comprehensive collection of JavaScript interview questions and answers. Covers a wide range of topics including algorithms, data structures, and language-specific concepts.',
      link: 'https://github.com/sudheerj/javascript-interview-questions',
    },
    {
      id: 9,
      website: 'github.com/learning-zone/nodejs-basics',
      title: 'HTML, CSS, JS, SQL, NODE.js, and MONGDB Interview Questions & Answers (Basics)',
      description: 'A curated list of front-end interview questions and answers. Covers topics like HTML, CSS, JavaScript, and front-end frameworks.',
      link: "github.com/learning-zone/nodejs-basics"
    },
    {
      id: 10,
      website: 'github.com/shubhdhungana/mern-interview-sets-pdf/blob/main/README.md',
      title: 'MERN Interview Sets PDF',
      description: 'This repository contains a curated collection of MERN Stack Full Stack Interview Questions and Answers in PDF format. ',
      link: "https://github.com/shubhdhungana/mern-interview-sets-pdf/blob/main/README.md"
    }
  ]

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Top Free Resources for Tech Learning</h1>
      
      {/* Featured Resource - Roadmap.sh */}
      <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="mr-2">🗺️</span> Featured Resource
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-3">
              <a 
                href={featuredResource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {featuredResource.title}
              </a>
            </h3>
            <div className="text-lg font-medium text-gray-600 mb-3">
              {featuredResource.website}
            </div>
            <p className="text-gray-700 mb-4">
              {renderDescription(featuredResource.description)}
            </p>
            <a
              href={featuredResource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Roadmaps
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={featuredResource.imageUrl}
              alt="Roadmap.sh Preview"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Learning Platforms */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="mr-2">🌐</span> Top Learning Platforms
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learningPlatforms.map((platform) => (
            <div key={platform.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">
                <a 
                  href={`https://${platform.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {platform.website}
                </a>
              </h3>
              <div className="text-sm text-gray-600 mb-3">{platform.focusArea}</div>
              <p className="text-gray-700">{renderDescription(platform.description)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bonus Tools */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="mr-2">🚀</span> Bonus Tools
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bonusTools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">
                <a 
                  href={`https://${tool.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {tool.website}
                </a>
              </h3>
              <div className="text-sm text-gray-600 mb-3">{tool.focusArea}</div>
              <p className="text-gray-700">{renderDescription(tool.description)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Preparation Resources */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="mr-2">🚀</span> InterView Preparation
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {interviewPrep.map((tool) => (
            <div key={tool.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">
                <a 
                  href={`https://${tool.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {tool.title}
                </a>
              </h3>
              <div className="text-sm text-gray-600 mb-3">{tool.focusArea}</div>
              <p className="text-gray-700">{renderDescription(tool.description)}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Career