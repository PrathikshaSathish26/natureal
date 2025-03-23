import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Energy() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const [formData, setFormData] = useState({
    energySource: "electricity",
    electricityUsage: "",
    gasUsage: "",
    renewableUsage: "no",
    energyEfficiency: "average",
  });

  useEffect(() => {
    const calculateFootprint = () => {
      const electricityImpact = (Number(formData.electricityUsage) || 0) * 0.4;
      const gasImpact = (Number(formData.gasUsage) || 0) * 2.3;
      const renewableImpact =
        formData.renewableUsage === "fully" ? -0.5 : formData.renewableUsage === "partially" ? -0.2 : 0;
      const efficiencyImpact =
        formData.energyEfficiency === "excellent" ? -0.3 :
        formData.energyEfficiency === "good" ? -0.2 :
        formData.energyEfficiency === "poor" ? 0.3 : 0;

      setCarbonFootprint((electricityImpact + gasImpact + renewableImpact + efficiencyImpact).toFixed(2));
    };

    calculateFootprint();
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-green-100 text-gray-900"} min-h-screen`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Energy Carbon Footprint</h1>
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 bg-gray-700 text-white rounded-md"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="energySource" className="block text-sm font-medium">
                Primary Energy Source
              </label>
              <select
                name="energySource"
                id="energySource"
                value={formData.energySource}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="electricity">Electricity</option>
                <option value="naturalGas">Natural Gas</option>
                <option value="coal">Coal</option>
                <option value="renewables">Renewable Energy</option>
              </select>
            </div>

            <div>
              <label htmlFor="electricityUsage" className="block text-sm font-medium">
                Monthly Electricity Usage (kWh)
              </label>
              <input
                type="number"
                name="electricityUsage"
                id="electricityUsage"
                value={formData.electricityUsage}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="gasUsage" className="block text-sm font-medium">
                Monthly Gas Usage (cubic meters)
              </label>
              <input
                type="number"
                name="gasUsage"
                id="gasUsage"
                value={formData.gasUsage}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="renewableUsage" className="block text-sm font-medium">
                Do you use renewable energy?
              </label>
              <select
                name="renewableUsage"
                id="renewableUsage"
                value={formData.renewableUsage}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="no">No</option>
                <option value="partially">Partially</option>
                <option value="fully">Yes, fully</option>
              </select>
            </div>

            <div>
              <label htmlFor="energyEfficiency" className="block text-sm font-medium">
                Home Energy Efficiency
              </label>
              <select
                name="energyEfficiency"
                id="energyEfficiency"
                value={formData.energyEfficiency}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="poor">Poor</option>
                <option value="average">Average</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => navigate("/waste")}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Go To Next Page
            </button>
          </form>

          {/* Carbon Footprint Display */}
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



