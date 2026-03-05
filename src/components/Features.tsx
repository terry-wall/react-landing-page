import React from 'react'

const Features: React.FC = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built with modern technologies for optimal performance and speed.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Looks great on desktop, tablet, and mobile devices out of the box.'
    },
    {
      icon: '🛠️',
      title: 'Easy to Customize',
      description: 'Clean, well-structured code that\'s easy to modify and extend.'
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      description: 'Built with security best practices and modern web standards.'
    },
    {
      icon: '🎨',
      title: 'Beautiful UI',
      description: 'Thoughtfully designed interface with attention to detail.'
    },
    {
      icon: '🚀',
      title: 'Ready to Deploy',
      description: 'Optimized build process with Docker support for easy deployment.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build modern, scalable web applications with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of developers building amazing applications with our platform.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Start Building Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features