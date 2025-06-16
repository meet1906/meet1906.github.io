import { createContext, useContext, useState, useEffect } from 'react'

const DataContext = createContext()

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

export const DataProvider = ({ children }) => {
  const [schools, setSchools] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    // Load sample data
    const sampleSchools = [
      {
        id: '1',
        name: 'Elite Driving Academy',
        logo: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=100&h=100&fit=crop&crop=center',
        location: 'New York, USA',
        coordinates: { lat: 40.7128, lng: -74.0060 },
        bio: 'Professional driving instruction with over 20 years of experience.',
        rating: 4.8,
        reviewCount: 156,
        services: [
          {
            id: 's1',
            name: 'Basic Driving Course',
            price: 299,
            duration: '4 weeks',
            vehicleType: 'Manual/Automatic',
            description: 'Complete beginner course covering all basics'
          }
        ],
        instructors: ['John Smith', 'Sarah Johnson'],
        photos: [
          'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop'
        ]
      },
      {
        id: '2',
        name: 'Quick Learn Motors',
        logo: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=100&h=100&fit=crop&crop=center',
        location: 'London, UK',
        coordinates: { lat: 51.5074, lng: -0.1278 },
        bio: 'Fast-track driving courses with flexible timings.',
        rating: 4.6,
        reviewCount: 89,
        services: [
          {
            id: 's2',
            name: 'Intensive Course',
            price: 450,
            duration: '2 weeks',
            vehicleType: 'Automatic',
            description: 'Intensive course for quick learners'
          }
        ],
        instructors: ['Mike Wilson', 'Emma Davis'],
        photos: [
          'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop'
        ]
      }
    ]

    const sampleReviews = [
      {
        id: '1',
        schoolId: '1',
        customerName: 'Alex Johnson',
        rating: 5,
        comment: 'Excellent instruction! Passed my test on the first try.',
        date: '2024-01-15'
      },
      {
        id: '2',
        schoolId: '1',
        customerName: 'Maria Garcia',
        rating: 4,
        comment: 'Great experience, very patient instructors.',
        date: '2024-01-10'
      }
    ]

    setSchools(sampleSchools)
    setReviews(sampleReviews)
  }, [])

  const addSchool = (schoolData) => {
    const newSchool = {
      ...schoolData,
      id: Date.now().toString(),
      rating: 0,
      reviewCount: 0,
      services: [],
      photos: []
    }
    setSchools(prev => [...prev, newSchool])
    return newSchool
  }

  const updateSchool = (schoolId, updates) => {
    setSchools(prev => prev.map(school => 
      school.id === schoolId ? { ...school, ...updates } : school
    ))
  }

  const addService = (schoolId, serviceData) => {
    const newService = {
      ...serviceData,
      id: Date.now().toString()
    }
    
    setSchools(prev => prev.map(school => 
      school.id === schoolId 
        ? { ...school, services: [...school.services, newService] }
        : school
    ))
  }

  const addReview = (reviewData) => {
    const newReview = {
      ...reviewData,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0]
    }
    
    setReviews(prev => [...prev, newReview])
    
    // Update school rating
    const schoolReviews = [...reviews, newReview].filter(r => r.schoolId === reviewData.schoolId)
    const avgRating = schoolReviews.reduce((sum, r) => sum + r.rating, 0) / schoolReviews.length
    
    setSchools(prev => prev.map(school => 
      school.id === reviewData.schoolId 
        ? { ...school, rating: avgRating, reviewCount: schoolReviews.length }
        : school
    ))
  }

  const getSchoolReviews = (schoolId) => {
    return reviews.filter(review => review.schoolId === schoolId)
  }

  const value = {
    schools,
    reviews,
    addSchool,
    updateSchool,
    addService,
    addReview,
    getSchoolReviews
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}