import { createContext, useContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('seekhogaadi_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const sendOTP = async (phoneNumber) => {
    try {
      // Simulate OTP sending
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real app, you would integrate with Firebase Auth or similar
      console.log(`Sending OTP to ${phoneNumber}`)
      toast.success('OTP sent successfully!')
      return true
    } catch (error) {
      toast.error('Failed to send OTP')
      return false
    }
  }

  const verifyOTP = async (phoneNumber, otp, userType) => {
    try {
      // Simulate OTP verification
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes, accept any 6-digit OTP
      if (otp.length === 6) {
        const userData = {
          id: Date.now().toString(),
          phoneNumber,
          userType,
          isNewUser: !localStorage.getItem(`user_${phoneNumber}`),
          createdAt: new Date().toISOString()
        }
        
        setUser(userData)
        localStorage.setItem('seekhogaadi_user', JSON.stringify(userData))
        localStorage.setItem(`user_${phoneNumber}`, JSON.stringify(userData))
        
        toast.success('Login successful!')
        return userData
      } else {
        toast.error('Invalid OTP')
        return null
      }
    } catch (error) {
      toast.error('Failed to verify OTP')
      return null
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('seekhogaadi_user')
    toast.success('Logged out successfully')
  }

  const updateProfile = (profileData) => {
    const updatedUser = { ...user, ...profileData }
    setUser(updatedUser)
    localStorage.setItem('seekhogaadi_user', JSON.stringify(updatedUser))
    localStorage.setItem(`user_${user.phoneNumber}`, JSON.stringify(updatedUser))
  }

  const value = {
    user,
    loading,
    sendOTP,
    verifyOTP,
    logout,
    updateProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}