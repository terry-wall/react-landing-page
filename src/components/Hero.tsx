import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Build Something
            <span className="text-primary-600 block">Amazing Today</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create beautiful, responsive web applications with modern tools and technologies. 
            Our platform helps you turn your ideas into reality faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-16 relative">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 text-center text-sm text-gray-500">
                Your App Preview
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-64 rounded-lg flex items-center justify-center">
              <div className="text-white text-2xl font-bold">
                🚀 Your Project Here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero