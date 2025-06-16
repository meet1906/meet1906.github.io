import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useData } from '../contexts/DataContext'
import { 
  Search, 
  MapPin, 
  Star, 
  Calendar, 
  Clock, 
  Car,
  BookOpen,
  Heart,
  User
} from 'lucide-react'

const CustomerDashboard = () => {
  const { user } = useAuth()
  const { schools, getBookingsByUser } = useData()
  const [activeTab, setActiveTab] = useState('overview')
  
  const myBookings = getBookingsByUser(user?.id)
  const recentBookings = myBookings.slice(0, 3)
  const favoriteSchools = schools.filter(school => school.rating >= 4.5).slice(0, 3)

  const stats = [
    {
      title: 'Total Bookings',
      value: myBookings.length,
      icon: <Calendar className="h-6 w-6" />,
      color: 'text-blue-600'
    },
    {
      title: 'Completed Lessons',
      value: myBookings.filter(b => b.status === 'completed').length,
      icon: <BookOpen className="h-6 w-6" />,
      color: 'text-green-600'
    },
    {
      title: 'Favorite Schools',
      value: favoriteSchools.length,
      icon: <Heart className="h-6 w-6" />,
      color: 'text-red-600'
    },
    {
      title: 'Reviews Given',
      value: 0, // This would come from reviews data
      icon: <Star className="h-6 w-6" />,
      color: 'text-yellow-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name || user?.phoneNumber}!
          </h1>
          <p className="text-gray-600">
            Track your learning progress and manage your bookings
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link
            to="/browse"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4"
          >
            <div className="bg-primary-100 p-3 rounded-full">
              <Search className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Find Schools</h3>
              <p className="text-sm text-gray-600">Browse driving schools near you</p>
            </div>
          </Link>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">My Bookings</h3>
              <p className="text-sm text-gray-600">View and manage your lessons</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <User className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Profile</h3>
              <p className="text-sm text-gray-600">Update your information</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Overview' },
                { id: 'bookings', name: 'My Bookings' },
                { id: 'favorites', name: 'Favorites' },
                { id: 'profile', name: 'Profile' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Recent Bookings */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Recent Bookings
                    </h3>
                    <button
                      onClick={() => setActiveTab('bookings')}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      View All
                    </button>
                  </div>

                  {recentBookings.length > 0 ? (
                    <div className="space-y-4">
                      {recentBookings.map((booking) => (
                        <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {booking.serviceName}
                              </h4>
                              <p className="text-sm text-gray-600">
                                School ID: {booking.schoolId}
                              </p>
                            </div>
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              booking.status === 'pending' 
                                ? 'bg-yellow-100 text-yellow-800'
                                : booking.status === 'confirmed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {booking.status}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{booking.preferredDate}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{booking.preferredTime}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span className="font-semibold">₹{booking.price}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 border border-gray-200 rounded-lg">
                      <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        No bookings yet
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Start your driving journey by booking your first lesson
                      </p>
                      <Link to="/browse" className="btn-primary">
                        Find Driving Schools
                      </Link>
                    </div>
                  )}
                </div>

                {/* Recommended Schools */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Recommended Schools
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {favoriteSchools.map((school) => (
                      <Link
                        key={school.id}
                        to={`/school/${school.id}`}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <img
                            src={school.logo}
                            alt={school.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900">{school.name}</h4>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3 text-gray-500" />
                              <span className="text-xs text-gray-600">{school.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-semibold">{school.rating}</span>
                          </div>
                          <span className="text-xs text-gray-600">
                            {school.reviewCount} reviews
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  All Bookings
                </h3>

                {myBookings.length > 0 ? (
                  <div className="space-y-4">
                    {myBookings.map((booking) => (
                      <div key={booking.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">
                              {booking.serviceName}
                            </h4>
                            <p className="text-gray-600">School ID: {booking.schoolId}</p>
                          </div>
                          <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                            booking.status === 'pending' 
                              ? 'bg-yellow-100 text-yellow-800'
                              : booking.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {booking.status}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <span className="text-sm text-gray-500">Date:</span>
                            <p className="font-medium">{booking.preferredDate}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Time:</span>
                            <p className="font-medium">{booking.preferredTime}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Price:</span>
                            <p className="font-medium">₹{booking.price}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Booked:</span>
                            <p className="font-medium">
                              {new Date(booking.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        
                        {booking.message && (
                          <div className="bg-gray-50 rounded-lg p-3">
                            <span className="text-sm text-gray-500">Message:</span>
                            <p className="text-sm text-gray-700 mt-1">{booking.message}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      No bookings yet
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Book your first driving lesson to get started
                    </p>
                    <Link to="/browse" className="btn-primary">
                      Browse Schools
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Favorites Tab */}
            {activeTab === 'favorites' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Favorite Schools
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoriteSchools.map((school) => (
                    <Link
                      key={school.id}
                      to={`/school/${school.id}`}
                      className="card p-6 hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={school.logo}
                          alt={school.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{school.name}</h4>
                          <div className="flex items-center space-x-1 text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{school.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-semibold">{school.rating}</span>
                        </div>
                        <span className="text-gray-600 text-sm">
                          {school.reviewCount} reviews
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Profile Information
                </h3>
                
                <div className="max-w-md space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={user?.name || ''}
                      className="input-field"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={user?.phoneNumber || ''}
                      className="input-field"
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={user?.email || ''}
                      className="input-field"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Enter your city"
                    />
                  </div>
                  
                  <button className="btn-primary">
                    Update Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard