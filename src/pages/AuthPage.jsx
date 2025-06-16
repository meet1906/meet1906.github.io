import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Car, User, Building, ArrowLeft } from 'lucide-react'

const AuthPage = () => {
  const [step, setStep] = useState('userType') // userType, phone, otp, profile
  const [userType, setUserType] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [profileData, setProfileData] = useState({
    name: '',
    email: ''
  })
  const [loading, setLoading] = useState(false)
  
  const { sendOTP, verifyOTP } = useAuth()
  const navigate = useNavigate()

  const handleUserTypeSelect = (type) => {
    setUserType(type)
    setStep('phone')
  }

  const handleSendOTP = async (e) => {
    e.preventDefault()
    if (!phoneNumber) return
    
    setLoading(true)
    const success = await sendOTP(phoneNumber)
    if (success) {
      setStep('otp')
    }
    setLoading(false)
  }

  const handleVerifyOTP = async (e) => {
    e.preventDefault()
    if (!otp) return
    
    setLoading(true)
    const success = await verifyOTP(phoneNumber, otp, userType, profileData)
    if (success) {
      navigate('/dashboard')
    }
    setLoading(false)
  }

  const handleProfileSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const success = await verifyOTP(phoneNumber, otp, userType, profileData)
    if (success) {
      navigate('/dashboard')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Car className="mx-auto h-12 w-12 text-primary-600" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {step === 'userType' && 'Join SeekhoGaadi'}
            {step === 'phone' && 'Enter Your Phone Number'}
            {step === 'otp' && 'Verify OTP'}
            {step === 'profile' && 'Complete Your Profile'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {step === 'userType' && 'Choose how you want to use our platform'}
            {step === 'phone' && 'We\'ll send you a verification code'}
            {step === 'otp' && 'Enter the 6-digit code sent to your phone'}
            {step === 'profile' && 'Tell us a bit about yourself'}
          </p>
        </div>

        {/* User Type Selection */}
        {step === 'userType' && (
          <div className="space-y-4">
            <button
              onClick={() => handleUserTypeSelect('customer')}
              className="w-full flex items-center justify-between p-6 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 group"
            >
              <div className="flex items-center space-x-4">
                <User className="h-8 w-8 text-gray-600 group-hover:text-primary-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">I want to learn driving</div>
                  <div className="text-sm text-gray-600">Find and book driving schools</div>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleUserTypeSelect('school')}
              className="w-full flex items-center justify-between p-6 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 group"
            >
              <div className="flex items-center space-x-4">
                <Building className="h-8 w-8 text-gray-600 group-hover:text-primary-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">I own a driving school</div>
                  <div className="text-sm text-gray-600">List services and get students</div>
                </div>
              </div>
            </button>
          </div>
        )}

        {/* Phone Number Input */}
        {step === 'phone' && (
          <form onSubmit={handleSendOTP} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <PhoneInput
                country={'in'}
                value={phoneNumber}
                onChange={setPhoneNumber}
                inputClass="w-full !border-gray-300 !rounded-lg !py-3 !text-base"
                containerClass="w-full"
                buttonClass="!border-gray-300 !rounded-l-lg"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setStep('userType')}
                className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                disabled={loading || !phoneNumber}
                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </div>
          </form>
        )}

        {/* OTP Verification */}
        {step === 'otp' && (
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Verification Code
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit code"
                maxLength={6}
                className="input-field text-center text-2xl tracking-widest"
              />
              <p className="mt-2 text-sm text-gray-600">
                Code sent to {phoneNumber}
              </p>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setStep('phone')}
                className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                disabled={loading || otp.length !== 6}
                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Verifying...' : 'Verify & Continue'}
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => handleSendOTP({ preventDefault: () => {} })}
                className="text-sm text-primary-600 hover:text-primary-500"
              >
                Didn't receive code? Resend
              </button>
            </div>
          </form>
        )}

        {/* Profile Setup */}
        {step === 'profile' && (
          <form onSubmit={handleProfileSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {userType === 'school' ? 'School Name' : 'Your Name'}
              </label>
              <input
                type="text"
                value={profileData.name}
                onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                className="input-field"
                placeholder={userType === 'school' ? 'Enter school name' : 'Enter your name'}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                className="input-field"
                placeholder="Enter email address"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setStep('otp')}
                className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                disabled={loading || !profileData.name}
                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Account...' : 'Complete Setup'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default AuthPage