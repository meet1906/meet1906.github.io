import { Link } from 'react-router-dom'
import { 
  Car, 
  MapPin, 
  Star, 
  Users, 
  Shield, 
  Clock, 
  Award, 
  Globe,
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react'

const LandingPage = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-primary-600" />,
      title: "Global Reach",
      description: "Find driving schools in your city or anywhere around the world"
    },
    {
      icon: <Star className="h-8 w-8 text-primary-600" />,
      title: "Verified Reviews",
      description: "Read authentic reviews from real students to make informed decisions"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Certified Instructors",
      description: "Learn from qualified and experienced driving instructors"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Flexible Timings",
      description: "Choose training schedules that fit your lifestyle"
    }
  ]

  const schoolFeatures = [
    {
      icon: <Users className="h-8 w-8 text-secondary-600" />,
      title: "Reach More Students",
      description: "Connect with learners from around the world"
    },
    {
      icon: <Award className="h-8 w-8 text-secondary-600" />,
      title: "Build Your Reputation",
      description: "Showcase your expertise and collect reviews"
    },
    {
      icon: <Globe className="h-8 w-8 text-secondary-600" />,
      title: "Easy Management",
      description: "Manage your services, pricing, and bookings effortlessly"
    }
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      comment: "Found an amazing driving school through SeekhoGaadi. Passed my test on the first attempt!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "John Smith",
      location: "London, UK",
      rating: 5,
      comment: "Great platform! Easy to find qualified instructors in my area. Highly recommended.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Maria Garcia",
      location: "Madrid, Spain",
      rating: 5,
      comment: "As a driving school owner, this platform has helped me reach so many new students.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ]

  const stats = [
    { number: "10,000+", label: "Happy Students" },
    { number: "500+", label: "Driving Schools" },
    { number: "50+", label: "Countries" },
    { number: "95%", label: "Success Rate" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Learn to Drive with the 
                <span className="block text-yellow-300">Best - Globally</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Connect with certified driving schools worldwide. Start your driving journey today with trusted instructors in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/browse" className="btn-secondary text-center">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Find a School</span>
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
                <Link to="/auth" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center">
                  Join as School
                </Link>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop" 
                  alt="Driving lesson" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">4.9/5 Average Rating</span>
                  </div>
                  <p className="text-sm opacity-90">Trusted by thousands of learners worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features for Learners */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SeekhoGaadi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make learning to drive simple, safe, and accessible for everyone, everywhere.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features for Schools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Grow Your Driving School Business
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of driving schools already using our platform to reach more students and grow their business.
              </p>
              
              <div className="space-y-6">
                {schoolFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link to="/auth" className="btn-primary">
                  Join as School Partner
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop" 
                alt="Driving instructor" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Verified School</div>
                    <div className="text-sm text-gray-600">Certified & Trusted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real people who learned to drive with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Available Worldwide
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From bustling cities to quiet towns, find driving schools in over 50 countries. 
            Wherever you are, we'll help you find the perfect driving instructor.
          </p>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop" 
              alt="World map" 
              className="rounded-2xl shadow-xl mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Driving Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied learners who found their perfect driving school through our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse" className="btn-secondary text-center">
              Find Schools Near You
            </Link>
            <Link to="/auth" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center">
              List Your School
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage