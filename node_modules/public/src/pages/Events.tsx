import React from 'react'

const Events = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl max-w-3xl mx-auto">Join us for worship, fellowship, and community events.</p>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            {/* Event 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="bg-blue-100 text-blue-800 text-center rounded-lg p-6">
                  <span className="block text-2xl font-bold">21</span>
                  <span className="block text-lg">May</span>
                  <span className="block">2023</span>
                </div>
              </div>
              <div className="md:w-3/4 md:pl-6">
                <h2 className="text-2xl font-semibold mb-2">Sunday Worship Service</h2>
                <p className="text-gray-600 mb-4">Join us for our weekly Sunday worship service. Experience powerful praise and worship, engage with God's Word, and connect with our community.</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>9:00 AM - 11:30 AM</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Main Auditorium</span>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Calendar
                </button>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="bg-purple-100 text-purple-800 text-center rounded-lg p-6">
                  <span className="block text-2xl font-bold">24</span>
                  <span className="block text-lg">May</span>
                  <span className="block">2023</span>
                </div>
              </div>
              <div className="md:w-3/4 md:pl-6">
                <h2 className="text-2xl font-semibold mb-2">Mid-Week Prayer Meeting</h2>
                <p className="text-gray-600 mb-4">Join us for our mid-week prayer meeting. This is a time for spiritual refreshment through prayer, worship, and Bible study.</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>6:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Prayer Room</span>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Calendar
                </button>
              </div>
            </div>
            
            {/* Event 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="bg-green-100 text-green-800 text-center rounded-lg p-6">
                  <span className="block text-2xl font-bold">3</span>
                  <span className="block text-lg">June</span>
                  <span className="block">2023</span>
                </div>
              </div>
              <div className="md:w-3/4 md:pl-6">
                <h2 className="text-2xl font-semibold mb-2">Community Outreach</h2>
                <p className="text-gray-600 mb-4">Join us as we serve our local community with love and compassion. We'll be distributing food, clothing, and providing various services to those in need.</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Community Center</span>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Calendar
                </button>
                <button className="ml-2 bg-transparent hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Volunteer
                </button>
              </div>
            </div>
            
            {/* Event 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="bg-yellow-100 text-yellow-800 text-center rounded-lg p-6">
                  <span className="block text-2xl font-bold">15-18</span>
                  <span className="block text-lg">June</span>
                  <span className="block">2023</span>
                </div>
              </div>
              <div className="md:w-3/4 md:pl-6">
                <h2 className="text-2xl font-semibold mb-2">Youth Camp</h2>
                <p className="text-gray-600 mb-4">Annual youth camp focusing on spiritual growth, leadership development, and building lasting friendships. Open to all youth ages 13-18.</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>All Day</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Camp Grounds</span>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </button>
                <button className="ml-2 bg-transparent hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events 