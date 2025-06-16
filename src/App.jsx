import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { DataProvider } from './contexts/DataContext'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import CustomerDashboard from './pages/CustomerDashboard'
import SchoolDashboard from './pages/SchoolDashboard'
import SchoolProfile from './pages/SchoolProfile'
import BrowseSchools from './pages/BrowseSchools'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/browse" element={<BrowseSchools />} />
            <Route path="/school/:id" element={<SchoolProfile />} />
            <Route 
              path="/dashboard/customer" 
              element={
                <ProtectedRoute userType="customer">
                  <CustomerDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard/school" 
              element={
                <ProtectedRoute userType="school">
                  <SchoolDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </DataProvider>
    </AuthProvider>
  )
}

export default App