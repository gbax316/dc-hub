import React from 'react'

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Dominion City Church</h1>
          <p className="text-xl max-w-3xl mx-auto">A place where lives are transformed through the power of God's Word.</p>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Vision</h2>
            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Our Mission</h3>
              <p className="text-gray-700 mb-4">To spread the love of Christ by reaching out to our community, raising disciples, and releasing leaders who will impact the world with the Gospel.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Our Vision</h3>
              <p className="text-gray-700 mb-4">To be a vibrant church that transforms lives, families, and communities through the power of God's Word, producing committed disciples of Christ.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Biblical Foundation</h3>
              <p className="text-gray-700">We are committed to the authority of God's Word as our guide for faith and practice.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Prayer</h3>
              <p className="text-gray-700">We believe in the power of prayer and depend on it for guidance, strength, and transformation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Worship</h3>
              <p className="text-gray-700">We are passionate about heartfelt worship that honors God and transforms lives.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Discipleship</h3>
              <p className="text-gray-700">We are committed to growing and maturing believers into the likeness of Christ.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Community</h3>
              <p className="text-gray-700">We value authentic relationships and meaningful connections within our church family.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Service</h3>
              <p className="text-gray-700">We are committed to serving others with the love and compassion of Christ.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 