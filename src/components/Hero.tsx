import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="pt-16 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Eco-Friendly Commercial Cleaning Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Professional cleaning services using 100% environmentally friendly products. 
              We care for your space and our planet.
            </p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800"
              alt="Eco-friendly cleaning"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">100% Eco-Friendly</p>
                  <p className="text-sm text-gray-500">Safe for environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}