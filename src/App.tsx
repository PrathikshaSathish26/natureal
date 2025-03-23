import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Personal } from './pages/Personal';
import { Travel } from './pages/Travel';
import { Energy } from './pages/Energy';
import { Waste } from './pages/Waste';
import { Dashboard } from './pages/Dashboard';
import { Recommendations } from './pages/Recommendations';

import { Profile } from './pages/Profile';
import { SignIn } from './pages/SignIn';
import { Leaf } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Leaf className="h-8 w-8 text-green-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">NATUREAL</span>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
                <Link to="/personal" className="text-gray-700 hover:text-green-600">Personal</Link>
                <Link to="/travel" className="text-gray-700 hover:text-green-600">Travel</Link>
                <Link to="/energy" className="text-gray-700 hover:text-green-600">Energy</Link>
                <Link to="/waste" className="text-gray-700 hover:text-green-600">Waste</Link>
                <Link to="/dashboard" className="text-gray-700 hover:text-green-600">Dashboard</Link>
                <Link to="/recommendations" className="text-gray-700 hover:text-green-600">Recommendations</Link>
                
                <Link to="/profile" className="text-gray-700 hover:text-green-600">Profile</Link>
                <Link to="/signin" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/waste" element={<Waste />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;