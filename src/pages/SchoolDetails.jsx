import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useData } from '../contexts/DataContext'
import { useAuth } from '../contexts/AuthContext'
import { 
  MapPin, 
  Star, 
  Phone, 
  Mail, 
  Car, 
  Clock, 
  DollarSign, 
  Users,
  Calendar,
  ArrowLeft,
  MessageCircle
} from 'lucide-react'
import toast from 'react-hot-toast'

const SchoolDetails = () => {
  const { id } = useParams()
  const { schools, getReviewsBySchool, addReview, addBooking } = useData()
  const { user } = useAuth()
  const [selectedService, setSelectedService] = useState(null)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [reviewData, setReviewData] = useState({ rating: 5, comment: '' })
  const [bookingData, setBookingData] = useState({
    preferredDate: '',
    preferredTime: '',
    message: ''
  })

  const school = schools.find(s => s.id === id)
  const reviews = getReviewsBySchool(id)

  if (!school) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">School not found</h2>
          <Link to="/browse" className="btn-primary">
            Browse Schools
          </Link>
        </div>
      </div>
    )
  }

  const handleBookService = (service) => {
    if (!user) {
      toast.error('Please login to book a service')
      return
    }
    setSelectedService(service)
    setShowBookingModal(true)
  }

  const handleSubmitBooking = (e) => {
    e.preventDefault()
    const booking = {
      schoolId: school.id,
      serviceId: selectedService.id,
      userId: user.id,
      userName: user.name || user.phoneNumber,
      serviceName: selectedService.name,
      price: selectedService.price,
      ...bookingData
    }
    
    addBooking(booking)
    toast.success('Booking request sent successfully!')
    setShowBookingModal(false)
    setBookingData({ preferredDate: '', preferredTime: '', message: '' })
  }

  const handleSubmitReview = (e) => {
    e.preventDefault()
    if (!user) {
      toast.error('Please login to leave a review')
      return
    }
    
    const review = {
      schoolId: school.id,
      userId: user.id,
      userName: user.name || user.phoneNumber,
      ...reviewData
    }
    
    addReview(review)
    toast.success('Review added successfully!')
    setShowReviewModal(false)
    setReviewData({ rating: 5, comment: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/browse"
            className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Browse</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* School Header */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start space-x-6">
                <img
                  src={school.logo}
                  alt={school.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {school.name}
                  </h1>
                  <div className="flex items-center space-x-1 text-gray-600 mb-2">
                    <MapPin className="h-5 w-5" />
                    <span>{school.location}</span>
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{school.rating}</span>
                      <span className="text-gray-600">({school.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{school.bio}</p>
                </div>
              </div>
            </div>

            {/* Photos */}
            {school.photos && school.photos.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Photos</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {school.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${school.name} photo ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Services */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Services</h2>
              {school.services && school.services.length > 0 ? (
                <div className="space-y-4">
                  {school.services.map((service) => (
                    <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {service.name}
                        </h3>
                        <div className="text-2xl font-bold text-primary-600">
                          ₹{service.price}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Car className="h-4 w-4 text-primary-600" />
                          <span className="text-sm">{service.vehicleType}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary-600" />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleBookService(service)}
                        className="btn-primary w-full md:w-auto"
                      >
                        Book This Service
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No services listed yet.</p>
              )}
            </div>

            {/* Instructors */}
            {school.instructors && school.instructors.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Instructors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {school.instructors.map((instructor, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Users className="h-8 w-8 text-primary-600" />
                      <span className="font-medium">{instructor}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Reviews</h2>
                {user && user.userType === 'customer' && (
                  <button
                    onClick={() => setShowReviewModal(true)}
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Write Review</span>
                  </button>
                )}
              </div>
              
              {reviews.length > 0 ? (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-medium">{review.userName}</span>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No reviews yet. Be the first to review!</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>Call School</span>
                </button>
                <button className="w-full flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
                <button className="w-full flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <MapPin className="h-4 w-4" />
                  <span>Get Directions</span>
                </button>
              </div>
            </div>

            {/* School Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">School Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-semibold">{school.rating}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reviews</span>
                  <span className="font-semibold">{school.reviewCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Services</span>
                  <span className="font-semibold">{school.services?.length || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Instructors</span>
                  <span className="font-semibold">{school.instructors?.length || 0}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Book {selectedService?.name}
            </h3>
            
            <form onSubmit={handleSubmitBooking} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={bookingData.preferredDate}
                  onChange={(e) => setBookingData({...bookingData, preferredDate: e.target.value})}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <input
                  type="time"
                  value={bookingData.preferredTime}
                  onChange={(e) => setBookingData({...bookingData, preferredTime: e.target.value})}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  value={bookingData.message}
                  onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                  className="input-field"
                  rows={3}
                  placeholder="Any special requirements or questions..."
                />
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button type="submit" className="flex-1 btn-primary">
                  Send Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Write a Review
            </h3>
            
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewData({...reviewData, rating: star})}
                      className={`p-1 ${
                        star <= reviewData.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      <Star className="h-6 w-6 fill-current" />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review
                </label>
                <textarea
                  value={reviewData.comment}
                  onChange={(e) => setReviewData({...reviewData, comment: e.target.value})}
                  className="input-field"
                  rows={4}
                  placeholder="Share your experience with this driving school..."
                  required
                />
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button type="submit" className="flex-1 btn-primary">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default SchoolDetails