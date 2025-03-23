import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Waste() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [wasteFootprint, setWasteFootprint] = useState(0);

  const [formData, setFormData] = useState({
    recycling: 'sometimes',
    compost: 'no',
    wasteProduction: '',
    plasticConsumption: 'moderate',
    foodWaste: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
    calculateFootprint(newFormData);
  };

  const calculateFootprint = (data = formData) => {
    const recyclingImpact = data.recycling === 'always' ? -5 : data.recycling === 'sometimes' ? -2 : 0;
    const compostImpact = data.compost === 'yes' ? -4 : data.compost === 'sometimes' ? -2 : 0;
    
    const wasteProductionImpact = (Number(data.wasteProduction) || 0) * 2;
    const plasticImpact = data.plasticConsumption === 'high' ? 10 : data.plasticConsumption === 'moderate' ? 5 : 2;
    const foodWasteImpact = (Number(data.foodWaste) || 0) * 3;

    const totalImpact = wasteProductionImpact + plasticImpact + foodWasteImpact + recyclingImpact + compostImpact;
    setWasteFootprint(Math.max(totalImpact, 0).toFixed(2));
  };

  const handleSubmit = () => {
    setTimeout(() => navigate('/dashboard'), 1000); // Navigate after a short delay
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-green-100 text-gray-900'} min-h-screen`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Waste Carbon Footprint</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 bg-gray-700 text-white rounded-md"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="recycling" className="block text-sm font-medium">
                How often do you recycle? ♻️
              </label>
              <select
                name="recycling"
                id="recycling"
                value={formData.recycling}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="never">Never</option>
                <option value="sometimes">Sometimes</option>
                <option value="always">Always</option>
              </select>
            </div>

            <div>
              <label htmlFor="compost" className="block text-sm font-medium">
                Do you compost? 🌱
              </label>
              <select
                name="compost"
                id="compost"
                value={formData.compost}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="no">No</option>
                <option value="sometimes">Sometimes</option>
                <option value="yes">Yes, regularly</option>
              </select>
            </div>

            <div>
              <label htmlFor="wasteProduction" className="block text-sm font-medium">
                Weekly household waste (gallons) 🗑️
              </label>
              <input
                type="number"
                name="wasteProduction"
                id="wasteProduction"
                value={formData.wasteProduction}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="plasticConsumption" className="block text-sm font-medium">
                Single-use plastic consumption 🛍️
              </label>
              <select
                name="plasticConsumption"
                id="plasticConsumption"
                value={formData.plasticConsumption}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="minimal">Minimal</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>

            <div>
              <label htmlFor="foodWaste" className="block text-sm font-medium">
                Weekly food waste (pounds) 🍲
              </label>
              <input
                type="number"
                name="foodWaste"
                id="foodWaste"
                value={formData.foodWaste}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Calculate Total Footprint
            </button>
          </form>

          <div className="mt-6">
            <p className="text-lg font-bold text-green-700">
              Estimated Waste Carbon Footprint: {wasteFootprint} kg CO₂/month
            </p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div
                className="bg-green-500 h-4 rounded-full transition-all"
                style={{ width: `${Math.min(wasteFootprint * 5, 100)}%` }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


