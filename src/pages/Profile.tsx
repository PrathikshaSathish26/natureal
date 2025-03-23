import React, { useState } from "react";
import { User, Settings, BarChart3, Award, Leaf, TrendingDown } from "lucide-react";

export function Profile() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [user] = useState({
    name: "Prathiksha Sathish",
    email: "Prathi@google.com",
    joinDate: "January 2024",
    carbonScore: 85,
    badges: ["Eco Warrior", "Carbon Conscious", "Sustainable Hero"],
    monthlyProgress: [
      { month: "Jan", score: 12.5 },
      { month: "Feb", score: 10.8 },
      { month: "Mar", score: 9.2 },
    ],
  });

  return (
    <div className={`${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} min-h-screen py-12`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`shadow rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
          {/* Header */}
          <div className="bg-green-600 px-6 py-8 flex items-center">
            <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
              <User className="h-12 w-12 text-green-600" />
            </div>
            <div className="ml-6">
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-green-200">Member since {user.joinDate}</p>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            {/* User Info */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Leaf className="h-5 w-5 text-green-500 mr-2" />
                Sustainability Score
              </h2>
              <div className="bg-green-100 dark:bg-green-700 p-4 rounded-lg flex items-center">
                <span className="text-2xl font-bold text-green-600 dark:text-green-300">{user.carbonScore}</span>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-300">/ 100</span>
              </div>
            </div>

            {/* Badges */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="h-5 w-5 text-yellow-500 mr-2" />
                Achievements
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {user.badges.map((badge, index) => (
                  <div key={index} className="bg-yellow-100 dark:bg-yellow-700 p-3 rounded-lg flex items-center">
                    <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-300" />
                    <span className="ml-2 text-sm font-medium text-yellow-800 dark:text-yellow-200">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Carbon Footprint Progress */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingDown className="h-5 w-5 text-red-500 mr-2" />
                Carbon Footprint Progress
              </h2>
              <div className={`p-4 rounded-lg border ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
                <div className="space-y-4">
                  {user.monthlyProgress.map((progress, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm">
                        <span>{progress.month}</span>
                        <span>{progress.score} tons CO₂</span>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${(progress.score / 15) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Settings className="h-5 w-5 text-blue-500 mr-2" />
                Account Settings
              </h2>
              <div className="space-y-4">
                <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Settings className="h-5 w-5 mr-2" />
                  <span>Manage Profile</span>
                </button>
                <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  <span>Emission Reports</span>
                </button>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
