import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { BarChart3, Leaf, Car, Lightbulb, Trash2 } from 'lucide-react';

export function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  // Mock data - in a real app, this would come from your backend
  const carbonData = {
    personal: 2.5,
    travel: 4.2,
    energy: 3.1,
    waste: 1.8
  };

  const totalFootprint = Object.values(carbonData).reduce((a, b) => a + b, 0);

  // Graph Data
  const barChartData = Object.entries(carbonData).map(([key, value]) => ({
    category: key.charAt(0).toUpperCase() + key.slice(1),
    value
  }));

  const pieChartData = Object.entries(carbonData).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value
  }));

  const COLORS = ['#34D399', '#60A5FA', '#FBBF24', '#F87171'];

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-green-100 text-gray-900'} min-h-screen`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-700 text-white rounded-md"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Personal Footprint</p>
                <p className="text-2xl font-semibold">{carbonData.personal} tons CO2</p>
              </div>
              <Leaf className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Travel Footprint</p>
                <p className="text-2xl font-semibold">{carbonData.travel} tons CO2</p>
              </div>
              <Car className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Energy Footprint</p>
                <p className="text-2xl font-semibold">{carbonData.energy} tons CO2</p>
              </div>
              <Lightbulb className="h-8 w-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Waste Footprint</p>
                <p className="text-2xl font-semibold">{carbonData.waste} tons CO2</p>
              </div>
              <Trash2 className="h-8 w-8 text-red-500" />
            </div>
          </div>
        </div>

        {/* Total Carbon Footprint */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Total Carbon Footprint</h2>
          <div className="flex items-center">
            <BarChart3 className="h-8 w-8 text-gray-500 mr-4" />
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalFootprint.toFixed(1)} tons CO2</p>
              <p className="text-sm text-gray-500">Annual carbon emissions</p>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Carbon Footprint Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <XAxis dataKey="category" stroke={darkMode ? "#fff" : "#333"} />
              <YAxis stroke={darkMode ? "#fff" : "#333"} />
              <Tooltip />
              <Bar dataKey="value" fill="#34D399" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Carbon Footprint Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {pieChartData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
