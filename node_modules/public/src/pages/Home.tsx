import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Dominion City Church</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Where faith meets community. Join us for an inspirational worship experience.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/about" className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-6 rounded-lg">
              Learn More
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-6 rounded-lg">
              Visit Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Sunday Worship</h3>
              <p className="text-gray-600 mb-6">Join us every Sunday for a powerful worship experience. Our service is designed to inspire and encourage you in your faith journey.</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-semibold">9:00 AM - 11:30 AM</span>
                <span className="bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full">Main Auditorium</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Mid-Week Service</h3>
              <p className="text-gray-600 mb-6">Our Wednesday service focuses on prayer, Bible study, and fellowship. It's a perfect midweek spiritual refreshment.</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-semibold">6:00 PM - 8:00 PM</span>
                <span className="bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full">Prayer Room</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-right mb-4">
                <span className="bg-green-100 text-green-800 text-sm py-1 px-3 rounded-full">This Sunday</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sunday Service</h3>
              <p className="text-gray-600 mb-4">Join us for our weekly Sunday worship service.</p>
              <div className="text-blue-600">May 21, 2023 • 9:00 AM</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-right mb-4">
                <span className="bg-purple-100 text-purple-800 text-sm py-1 px-3 rounded-full">Youth</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Youth Camp</h3>
              <p className="text-gray-600 mb-4">Annual youth camp focusing on spiritual growth and leadership.</p>
              <div className="text-blue-600">June 15-18, 2023</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-right mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full">Special</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Outreach</h3>
              <p className="text-gray-600 mb-4">Join us as we serve our local community with love and compassion.</p>
              <div className="text-blue-600">June 3, 2023 • 10:00 AM</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/events" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 