import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Travel() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const [formData, setFormData] = useState({
    carType: 'gasoline',
    mileagePerYear: '',
    publicTransport: '',
    flightsPerYear: {
      short: '',
      medium: '',
      long: ''
    }
  });

  useEffect(() => {
    const calculateFootprint = () => {
      const carImpact =
        formData.carType === 'gasoline' ? 2 :
        formData.carType === 'diesel' ? 2.2 :
        formData.carType === 'hybrid' ? 1.2 :
        formData.carType === 'electric' ? 0.5 : 0;
      
      const mileageImpact = (Number(formData.mileagePerYear) || 0) * carImpact * 0.2;
      const publicTransportImpact = (Number(formData.publicTransport) || 0) * 0.3;
      const flightImpact =
        (Number(formData.flightsPerYear.short) || 0) * 0.5 +
        (Number(formData.flightsPerYear.medium) || 0) * 1.5 +
        (Number(formData.flightsPerYear.long) || 0) * 3;

      setCarbonFootprint((mileageImpact + publicTransportImpact + flightImpact).toFixed(2));
    };

    calculateFootprint();
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof formData],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-green-100 text-gray-900'} min-h-screen`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Travel Carbon Footprint</h1>
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 bg-gray-700 text-white rounded-md"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="carType" className="block text-sm font-medium">
                Type of vehicle <span title="Electric cars have the lowest footprint">🛈</span>
              </label>
              <select
                name="carType"
                id="carType"
                value={formData.carType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="gasoline">Gasoline Car</option>
                <option value="diesel">Diesel Car</option>
                <option value="hybrid">Hybrid Car</option>
                <option value="electric">Electric Car</option>
                <option value="none">No Car</option>
              </select>
            </div>

            <div>
              <label htmlFor="mileagePerYear" className="block text-sm font-medium">
                Annual mileage (miles per year) <span title="Higher mileage increases emissions">🛈</span>
              </label>
              <input
                type="number"
                name="mileagePerYear"
                id="mileagePerYear"
                value={formData.mileagePerYear}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="publicTransport" className="block text-sm font-medium">
                Public transport usage (hours per week) <span title="Public transport has a lower footprint than private cars">🛈</span>
              </label>
              <input
                type="number"
                name="publicTransport"
                id="publicTransport"
                value={formData.publicTransport}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Flights per year</h3>

              <div>
                <label htmlFor="flightsShort" className="block text-sm font-medium">
                  Short-haul flights (&lt;3 hours)
                </label>
                <input
                  type="number"
                  name="flightsPerYear.short"
                  id="flightsShort"
                  value={formData.flightsPerYear.short}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="flightsMedium" className="block text-sm font-medium">
                  Medium-haul flights (3-6 hours)
                </label>
                <input
                  type="number"
                  name="flightsPerYear.medium"
                  id="flightsMedium"
                  value={formData.flightsPerYear.medium}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="flightsLong" className="block text-sm font-medium">
                  Long-haul flights (&gt;6 hours)
                </label>
                <input
                  type="number"
                  name="flightsPerYear.long"
                  id="flightsLong"
                  value={formData.flightsPerYear.long}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('/energy')}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Go To Next Page
            </button>
          </form>

          <div className="mt-6">
            <p className="text-lg font-bold text-green-700">
              Estimated Carbon Footprint: {carbonFootprint} kg CO₂/month
            </p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-green-500 h-4 rounded-full" style={{ width: `${carbonFootprint * 5}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
