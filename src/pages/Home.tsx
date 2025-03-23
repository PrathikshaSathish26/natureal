import React from "react";
import { Link } from "react-router-dom";
import { Leaf, BarChart3, Car, Lightbulb, Trash2, Globe2, Target, Users, ShieldCheck } from "lucide-react";

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative px-6 pt-10 lg:px-8 bg-green-50">
        <div className="max-w-4xl mx-auto py-20 sm:py-28 text-center">
          <h1 className="text-5xl font-extrabold text-green-800 sm:text-6xl">
            Measure, Understand & Reduce Your Carbon Footprint
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Climate change is real, and every action counts. Our advanced Carbon Footprint Calculator helps you track your emissions and provides actionable insights to lower your environmental impact.
          </p>
          <div className="mt-8 flex justify-center gap-x-6">
            <Link to="/signin" className="bg-green-700 px-5 py-3 text-white font-semibold rounded shadow-lg hover:bg-green-600">
              Get Started
            </Link>
            <Link to="/personal" className="text-lg font-semibold text-green-800 hover:underline">
              Learn More →
            </Link>
          </div>
        </div>
      </div>

      {/* Mission, Vision, and Goals */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-900">Our Mission, Vision & Goals</h2>
          <p className="text-center text-gray-700 mt-4">
            At <b>Natureal</b>, we are committed to driving sustainable change by empowering individuals with tools to measure and reduce their carbon impact. 
            Our goal is to make carbon-conscious living accessible and actionable.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Leaf, title: "Our Mission", desc: "To provide a simple yet powerful tool that helps individuals and businesses track and minimize their carbon footprint, leading to a healthier planet." },
              { icon: Globe2, title: "Our Vision", desc: "To create a future where every person actively contributes to sustainability, making eco-friendly choices an effortless part of daily life." },
              { icon: Target, title: "Our Goals", desc: "To educate, track, and promote sustainable practices by providing accurate carbon analysis, personalized reduction strategies, and community engagement." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <item.icon className="h-12 w-12 text-green-700" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900">How It Works</h2>
        <p className="text-center text-gray-700 mt-4">
          Understanding your carbon footprint is the first step toward sustainability. Our tool provides a detailed breakdown of your emissions and suggests meaningful ways to reduce them.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: BarChart3, title: "Analyze", desc: "Enter details about your daily activities, such as travel, diet, and energy consumption, to calculate your carbon footprint." },
            { icon: Globe2, title: "Calculate", desc: "Our advanced algorithms assess your data and provide an accurate footprint score based on global environmental standards." },
            { icon: Leaf, title: "Take Action", desc: "Get personalized recommendations on how to lower your carbon impact, from sustainable travel tips to eco-friendly lifestyle changes." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <item.icon className="h-12 w-12 text-green-700" />
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-900">Key Features</h2>
          <p className="text-center text-gray-700 mt-4">
            Our Carbon Footprint Calculator offers a range of features designed to provide accurate insights and real-time tracking.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Car, title: "Transport Emissions", desc: "Monitor emissions from daily commutes, flights, and public transport usage." },
              { icon: Lightbulb, title: "Energy Consumption", desc: "Track your household energy use and discover ways to optimize electricity and gas consumption." },
              { icon: Trash2, title: "Waste Management", desc: "Learn about responsible waste disposal methods and how to minimize landfill contribution." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <item.icon className="h-12 w-12 text-green-700 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-700 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold">Join Us in Building a Sustainable Future</h2>
        <p className="mt-4 text-lg">Start your journey towards a greener lifestyle today. Every step you take matters!</p>
        <div className="mt-8">
        <Link to="/signin" className="bg-white text-green-700 px-6 py-3 font-semibold rounded shadow-lg hover:bg-gray-100">
  Sign Up Now
</Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto flex justify-between px-6 text-sm">
          <p>© {new Date().getFullYear()} Natureal. All rights reserved.</p>
          <div className="flex gap-x-4">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}



