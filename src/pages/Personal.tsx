import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Personal() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    householdSize: '',
    homeType: 'apartment',
    homeSize: '',
    dietType: 'omnivore',
    shoppingHabits: 'moderate',
  });

  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const calculateFootprint = () => {
      const householdImpact = Number(formData.householdSize) * 1.5;
      const homeImpact =
        formData.homeType === 'house' ? 2 : formData.homeType === 'apartment' ? 1 : 1.5;
      const homeSizeImpact = Number(formData.homeSize) / 1000;
      const dietImpact =
        formData.dietType === 'omnivore' ? 2 : formData.dietType === 'vegetarian' ? 1.5 : 1;
      const shoppingImpact =
        formData.shoppingHabits === 'frequent' ? 2 : formData.shoppingHabits === 'moderate' ? 1.5 : 1;

      const totalFootprint = householdImpact + homeImpact + homeSizeImpact + dietImpact + shoppingImpact;
      setCarbonFootprint(totalFootprint.toFixed(2));
    };

    calculateFootprint();
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextPage = () => {
    navigate('/travel');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const suggestions = carbonFootprint > 10
    ? 'Consider using energy-efficient appliances and reducing shopping frequency.'
    : 'Great job! Keep maintaining sustainable habits.';

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-green-100 text-gray-900'} min-h-screen`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Personal Carbon Footprint</h1>
            <button onClick={toggleDarkMode} className="px-4 py-2 bg-gray-700 text-white rounded-md">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="householdSize" className="block text-sm font-medium">
                Number of people in your household <span title="More people usually reduce per-person footprint">🛈</span>
              </label>
              <input
                type="number"
                name="householdSize"
                id="householdSize"
                value={formData.householdSize}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="homeType" className="block text-sm font-medium">
                Type of home <span title="Houses usually have a higher footprint than apartments">🛈</span>
              </label>
              <select
                name="homeType"
                id="homeType"
                value={formData.homeType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>

            <div>
              <label htmlFor="homeSize" className="block text-sm font-medium">
                Home size (square feet) <span title="Larger homes typically consume more energy">🛈</span>
              </label>
              <input
                type="number"
                name="homeSize"
                id="homeSize"
                value={formData.homeSize}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="dietType" className="block text-sm font-medium">
                Diet type <span title="Vegan diets have a lower footprint than omnivorous diets">🛈</span>
              </label>
              <select
                name="dietType"
                id="dietType"
                value={formData.dietType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="omnivore">Omnivore</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
              </select>
            </div>

            <div>
              <label htmlFor="shoppingHabits" className="block text-sm font-medium">
                Shopping habits <span title="Frequent shopping leads to more emissions">🛈</span>
              </label>
              <select
                name="shoppingHabits"
                id="shoppingHabits"
                value={formData.shoppingHabits}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="minimal">Minimal</option>
                <option value="moderate">Moderate</option>
                <option value="frequent">Frequent</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleNextPage}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Go To Next Page
            </button>
          </form>

          <div className="mt-6">
            <p className="text-lg font-bold text-green-700">Estimated Carbon Footprint: {carbonFootprint} kg CO₂/month</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-green-500 h-4 rounded-full" style={{ width: `${carbonFootprint * 10}%` }}></div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-600">{suggestions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

