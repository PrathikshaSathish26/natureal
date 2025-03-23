import React, { useState } from 'react';
import { Leaf, Car, Lightbulb, Trash2, Moon, Sun } from 'lucide-react';

export function Recommendations() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState('');
  const [randomTip, setRandomTip] = useState('');

  const recommendations = [
    {
      category: 'Personal',
      icon: <Leaf className="h-6 w-6 text-green-500" />,
      tips: [
        'Switch to a plant-based diet for some meals',
        'Buy local and seasonal produce',
        'Reduce meat consumption, especially beef',
        'Use reusable shopping bags and containers'
      ]
    },
    {
      category: 'Travel',
      icon: <Car className="h-6 w-6 text-blue-500" />,
      tips: [
        'Use public transportation when possible',
        'Consider carpooling or bike-sharing',
        'Combine multiple errands into one trip',
        'Consider an electric or hybrid vehicle'
      ]
    },
    {
      category: 'Energy',
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      tips: [
        'Switch to LED light bulbs',
        'Install a programmable thermostat',
        'Use energy-efficient appliances',
        'Consider solar panel installation'
      ]
    },
    {
      category: 'Waste',
      icon: <Trash2 className="h-6 w-6 text-red-500" />,
      tips: [
        'Start composting food waste',
        'Recycle properly and consistently',
        'Reduce single-use plastics',
        'Donate or repair items instead of disposing'
      ]
    }
  ];

  const ecoFriendlyTips = [
    "Turn off lights when leaving a room.",
    "Use a reusable water bottle.",
    "Opt for paperless billing.",
    "Plant a tree in your community.",
    "Unplug devices when not in use.",
    "Take shorter showers to save water.",
    "Choose public transport over driving.",
    "Repurpose old clothes instead of discarding."
  ];

  const generateRandomTip = () => {
    const tip = ecoFriendlyTips[Math.floor(Math.random() * ecoFriendlyTips.length)];
    setRandomTip(tip);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-green-100 text-gray-900'} min-h-screen`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Recommendations</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-md flex items-center space-x-2 bg-gray-700 text-white"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>

        {/* Personalized Tips Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Get a Personalized Eco Tip 🌱</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Enter your Score"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border rounded-md w-64 text-black"
            />
            <button
              onClick={generateRandomTip}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Get Tip
            </button>
          </div>
          {randomTip && (
            <p className="mt-4 text-lg font-medium text-green-700">
              {name ? `Hey ${name}, ` : 'Hey, '} {randomTip}
            </p>
          )}
        </div>

        {/* Recommendation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((section) => (
            <div key={section.category} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-xl font-semibold ml-2">{section.category} Recommendations</h2>
              </div>
              <ul className="space-y-4">
                {section.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-500">
                      {index + 1}
                    </span>
                    <span className="ml-3">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="#"
              className="block p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">Carbon Offset Programs</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                Learn about programs that help neutralize your carbon footprint.
              </p>
            </a>
            <a
              href="#"
              className="block p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">Sustainable Living Guide</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                Comprehensive guide to reducing your environmental impact.
              </p>
            </a>
            <a
              href="#"
              className="block p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">Local Green Initiatives</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                Find environmental programs and initiatives in your area.
              </p>
            </a>
            <a
              href="#"
              className="block p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">Energy Saving Calculator</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                Calculate potential savings from energy-efficient upgrades.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
