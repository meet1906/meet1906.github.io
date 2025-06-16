import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useData } from '../contexts/DataContext'
import { MapPin, Upload, Plus, X } from 'lucide-react'
import toast from 'react-hot-toast'

const SchoolProfile = () => {
  const { user, updateProfile } = useAuth()
  const { addSchool, updateSchool, getSchoolsByOwner } = useData()
  const [profileData, setProfileData] = useState({
    name: '',
    location: '',
    bio: '',
    logo: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop&crop=center',
    instructors: [''],
    coordinates: { lat: 0, lng: 0 }
  })

  const mySchools = getSchoolsByOwner(user?.id)
  const existingSchool = mySchools[0]

  // Initialize with existing data if available
  useState(() => {
    if (existingSchool) {
      setProfileData({
        name: existingSchool.name || '',
        location: existingSchool.location || '',
        bio: existingSchool.bio || '',
        logo: existingSchool.logo || 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop&crop=center',
        instructors: existingSchool.instructors || [''],
        coordinates: existingSchool.coordinates || { lat: 0, lng: 0 }
      })
    }
  }, [existingSchool])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const schoolData = {
      ...profileData,
      ownerId: user.id,
      instructors: profileData.instructors.filter(instructor => instructor.trim() !== '')
    }

    if (existingSchool) {
      updateSchool(existingSchool.id, schoolData)
      toast.success('School profile updated successfully!')
    } else {
      addSchool(schoolData)
      toast.success('School profile created successfully!')
    }
  }

  const addInstructor = () => {
    setProfileData({
      ...profileData,
      instructors: [...profileData.instructors, '']
    })
  }

  const removeInstructor = (index) => {
    const newInstructors = profileData.instructors.filter((_, i) => i !== index)
    setProfileData({
      ...profileData,
      instructors: newInstructors
    })
  }

  const updateInstructor = (index, value) => {
    const newInstructors = [...profileData.instructors]
    newInstructors[index] = value
    setProfileData({
      ...profileData,
      instructors: newInstructors
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {existingSchool ? 'Edit School Profile' : 'Create School Profile'}
            </h1>
            <p className="text-gray-600">
              {existingSchool 
                ? 'Update your school information to attract more students'
                : 'Complete your school profile to start receiving bookings'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    School Name *
                  </label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    className="input-field"
                    placeholder="Enter your school name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      className="input-field pl-10"
                      placeholder="Enter city, state, country"
                      required
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    This will help students find you on the map
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    School Bio *
                  </label>
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    className="input-field"
                    rows={4}
                    placeholder="Tell students about your school, experience, and what makes you special..."
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {profileData.bio.length}/500 characters
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Logo Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    School Logo
                  </label>
                  <div className="flex items-center space-x-6">
                    <img
                      src={profileData.logo}
                      alt="School logo"
                      className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                    />
                    <div>
                      <button
                        type="button"
                        className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Upload className="h-4 w-4" />
                        <span>Upload Logo</span>
                      </button>
                      <p className="text-sm text-gray-500 mt-1">
                        JPG, PNG up to 2MB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instructors */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instructors
                  </label>
                  <div className="space-y-3">
                    {profileData.instructors.map((instructor, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={instructor}
                          onChange={(e) => updateInstructor(index, e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Instructor name"
                        />
                        {profileData.instructors.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeInstructor(index)}
                            className="p-2 text-red-600 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addInstructor}
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Add Instructor</span>
                    </button>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="School phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="School email address"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Operating Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="flex items-center space-x-3">
                    <div className="w-20">
                      <span className="text-sm font-medium text-gray-700">{day}</span>
                    </div>
                    <input
                      type="time"
                      className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="time"
                      className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities & Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Facilities & Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  'Air Conditioned Cars',
                  'Dual Control Cars',
                  'Manual Transmission',
                  'Automatic Transmission',
                  'Theory Classes',
                  'Online Booking',
                  'Flexible Timings',
                  'Pick-up Service',
                  'Female Instructors',
                  'Multilingual Support',
                  'Test Preparation',
                  'Refresher Courses'
                ].map((feature) => (
                  <label key={feature} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary"
              >
                {existingSchool ? 'Update Profile' : 'Create Profile'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SchoolProfile