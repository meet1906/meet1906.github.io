import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../contexts/DataContext'
import { 
  Search, 
  MapPin, 
  Star, 
  Filter, 
  Car, 
  Clock, 
  DollarSign,
  Users
} from 'lucide-react'

const BrowseSchools = () => {
  const { schools } = useData()
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    location: '',
    minRating: 0,
    maxPrice: 10000,
    vehicleType: '',
    sortBy: 'rating'
  })
  const [showFilters, setShowFilters] = useState(false)

  const filteredSchools = useMemo(() => {
    let filtered = schools.filter(school => {
      const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           school.location.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesLocation = !filters.location || 
                             school.location.toLowerCase().includes(filters.location.toLowerCase())
      
      const matchesRating = school.rating >= filters.minRating
      
      const matchesPrice = !school.services?.length || 
                          school.services.some(service => service.price <= filters.maxPrice)
      
      const matchesVehicleType = !filters.vehicleType ||
                                school.services?.some(service => 
                                  service.vehicleType.toLowerCase() === filters.vehicleType.toLowerCase()
                                )

      return matchesSearch && matchesLocation && matchesRating && matchesPrice && matchesVehicleType
    })

    // Sort results
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'price':
          const aMinPrice = Math.min(...(a.services?.map(s => s.price) || [0]))
          const bMinPrice = Math.min(...(b.services?.map(s => s.price) || [0]))
          return aMinPrice - bMinPrice
        case 'reviews':
          return b.reviewCount - a.reviewCount
        default:
          return 0
      }
    })

    return filtered
  }, [schools, searchTerm, filters])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Find Driving Schools
          </h1>
          <p className="text-gray-600">
            Discover certified driving schools in your area
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by school name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Min Rating
                  </label>
                  <select
                    value={filters.minRating}
                    onChange={(e) => setFilters({...filters, minRating: Number(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value={0}>Any Rating</option>
                    <option value={3}>3+ Stars</option>
                    <option value={4}>4+ Stars</option>
                    <option value={4.5}>4.5+ Stars</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Price (₹)
                  </label>
                  <input
                    type="number"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({...filters, maxPrice: Number(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Type
                  </label>
                  <select
                    value={filters.vehicleType}
                    onChange={(e) => setFilters({...filters, vehicleType: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Any Type</option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={filters.sortBy}
                    onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="rating">Rating</option>
                    <option value="price">Price</option>
                    <option value="reviews">Reviews</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found {filteredSchools.length} driving school{filteredSchools.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchools.map((school) => (
            <Link
              key={school.id}
              to={`/school/${school.id}`}
              className="card p-6 hover:scale-105 transition-transform duration-300"
            >
              {/* School Logo */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={school.logo}
                  alt={school.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {school.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{school.location}</span>
                  </div>
                </div>
              </div>

              {/* Rating and Reviews */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold">{school.rating}</span>
                </div>
                <span className="text-gray-600 text-sm">
                  ({school.reviewCount} reviews)
                </span>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {school.bio}
              </p>

              {/* Services Preview */}
              {school.services && school.services.length > 0 && (
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Car className="h-4 w-4 text-primary-600" />
                      <span>{school.services[0].vehicleType}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span>₹{school.services[0].price}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{school.services[0].duration}</span>
                  </div>
                </div>
              )}

              {/* Instructors */}
              {school.instructors && school.instructors.length > 0 && (
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{school.instructors.length} instructor{school.instructors.length !== 1 ? 's' : ''}</span>
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredSchools.length === 0 && (
          <div className="text-center py-12">
            <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No driving schools found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setFilters({
                  location: '',
                  minRating: 0,
                  maxPrice: 10000,
                  vehicleType: '',
                  sortBy: 'rating'
                })
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BrowseSchools