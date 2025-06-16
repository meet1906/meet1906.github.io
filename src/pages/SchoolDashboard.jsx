import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useData } from '../contexts/DataContext'
import { 
  Plus, 
  Edit, 
  Eye, 
  Users, 
  Star, 
  Calendar,
  DollarSign,
  Car,
  MapPin,
  Upload
} from 'lucide-react'
import toast from 'react-hot-toast'

const SchoolDashboard = () => {
  const { user } = useAuth()
  const { getSchoolsByOwner, getBookingsBySchool, addService, updateSchool } = useData()
  const [activeTab, setActiveTab] = useState('overview')
  const [showServiceModal, setShowServiceModal] = useState(false)
  const [serviceData, setServiceData] = useState({
    name: '',
    price: '',
    duration: '',
    vehicleType: 'Manual',
    description: ''
  })

  const mySchools = getSchoolsByOwner(user?.id)
  const mySchool = mySchools[0] // For simplicity, assuming one school per user
  const bookings = mySchool ? getBookingsBySchool(mySchool.id) : []

  const handleAddService = (e) => {
    e.preventDefault()
    if (!mySchool) {
      toast.error('Please complete your school profile first')
      return
    }
    
    addService(mySchool.id, {
      ...serviceData,
      price: Number(serviceData.price)
    })
    
    toast.success('Service added successfully!')
    setShowServiceModal(false)
    setServiceData({
      name: '',
      price: '',
      duration: '',
      vehicleType: 'Manual',
      description: ''
    })
  }

  const stats = [
    {
      title: 'Total Bookings',
      value: bookings.length,
      icon: <Calendar className="h-6 w-6" />,
      color: 'text-blue-600'
    },
    {
      title: 'Services Listed',
      value: mySchool?.services?.length || 0,
      icon: <Car className="h-6 w-6" />,
      color: 'text-green-600'
    },
    {
      title: 'Average Rating',
      value: mySchool?.rating || 0,
      icon: <Star className="h-6 w-6" />,
      color: 'text-yellow-600'
    },
    {
      title: 'Total Reviews',
      value: mySchool?.reviewCount || 0,
      icon: <Users className="h-6 w-6" />,
      color: 'text-purple-600'
    }
  ]

  if (!mySchool) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Your Dashboard
            </h1>
            <p className="text-gray-600 mb-8">
              Complete your school profile to start receiving bookings
            </p>
            <button className="btn-primary">
              Complete Profile Setup
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {mySchool.name} Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your driving school and track your performance
          </p>
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
                { id: 'services', name: 'Services' },
                { id: 'bookings', name: 'Bookings' },
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
              <div className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Recent Bookings */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Recent Bookings
                    </h3>
                    {bookings.length > 0 ? (
                      <div className="space-y-3">
                        {bookings.slice(0, 5).map((booking) => (
                          <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium">{booking.userName}</p>
                              <p className="text-sm text-gray-600">{booking.serviceName}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">₹{booking.price}</p>
                              <p className="text-sm text-gray-600">{booking.status}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600">No bookings yet</p>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      <button
                        onClick={() => setShowServiceModal(true)}
                        className="w-full flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="h-5 w-5 text-primary-600" />
                        <span>Add New Service</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Upload className="h-5 w-5 text-primary-600" />
                        <span>Upload Photos</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Edit className="h-5 w-5 text-primary-600" />
                        <span>Edit Profile</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Your Services
                  </h3>
                  <button
                    onClick={() => setShowServiceModal(true)}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Service</span>
                  </button>
                </div>

                {mySchool.services && mySchool.services.length > 0 ? (
                  <div className="grid gap-4">
                    {mySchool.services.map((service) => (
                      <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {service.name}
                          </h4>
                          <div className="flex space-x-2">
                            <button className="p-2 text-gray-600 hover:text-primary-600">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="p-2 text-gray-600 hover:text-primary-600">
                              <Eye className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-3">{service.description}</p>
                        
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Price:</span>
                            <span className="ml-2 font-semibold">₹{service.price}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Duration:</span>
                            <span className="ml-2 font-semibold">{service.duration}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Vehicle:</span>
                            <span className="ml-2 font-semibold">{service.vehicleType}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      No services listed yet
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Add your first service to start receiving bookings
                    </p>
                    <button
                      onClick={() => setShowServiceModal(true)}
                      className="btn-primary"
                    >
                      Add Your First Service
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  All Bookings
                </h3>

                {bookings.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Customer
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Service
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date & Time
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {bookings.map((booking) => (
                          <tr key={booking.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {booking.userName}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{booking.serviceName}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {booking.preferredDate} at {booking.preferredTime}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-semibold text-gray-900">
                                ₹{booking.price}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                booking.status === 'pending' 
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : booking.status === 'confirmed'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {booking.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      No bookings yet
                    </h4>
                    <p className="text-gray-600">
                      Bookings will appear here once customers start booking your services
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  School Profile
                </h3>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        School Name
                      </label>
                      <input
                        type="text"
                        value={mySchool.name}
                        className="input-field"
                        readOnly
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={mySchool.location}
                        className="input-field"
                        readOnly
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        value={mySchool.bio}
                        className="input-field"
                        rows={4}
                        readOnly
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        School Logo
                      </label>
                      <div className="flex items-center space-x-4">
                        <img
                          src={mySchool.logo}
                          alt={mySchool.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <button className="btn-secondary">
                          Change Logo
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Instructors
                      </label>
                      <div className="space-y-2">
                        {mySchool.instructors?.map((instructor, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span>{instructor}</span>
                            <button className="text-red-600 hover:text-red-700">
                              Remove
                            </button>
                          </div>
                        ))}
                        <button className="text-primary-600 hover:text-primary-700 text-sm">
                          + Add Instructor
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button className="btn-primary">
                    Update Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Service Modal */}
      {showServiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Add New Service
            </h3>
            
            <form onSubmit={handleAddService} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Name
                </label>
                <input
                  type="text"
                  value={serviceData.name}
                  onChange={(e) => setServiceData({...serviceData, name: e.target.value})}
                  className="input-field"
                  placeholder="e.g., Basic Car Training"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    value={serviceData.price}
                    onChange={(e) => setServiceData({...serviceData, price: e.target.value})}
                    className="input-field"
                    placeholder="5000"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={serviceData.duration}
                    onChange={(e) => setServiceData({...serviceData, duration: e.target.value})}
                    className="input-field"
                    placeholder="30 days"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Type
                </label>
                <select
                  value={serviceData.vehicleType}
                  onChange={(e) => setServiceData({...serviceData, vehicleType: e.target.value})}
                  className="input-field"
                >
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={serviceData.description}
                  onChange={(e) => setServiceData({...serviceData, description: e.target.value})}
                  className="input-field"
                  rows={3}
                  placeholder="Describe your service..."
                  required
                />
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowServiceModal(false)}
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button type="submit" className="flex-1 btn-primary">
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default SchoolDashboard