import { Leaf, Droplets, Shield } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Why Choose SJ EcoClean?</h2>
            <p className="mt-4 text-lg text-gray-600">
              We're committed to providing exceptional cleaning services while protecting our environment. 
              Our eco-friendly approach ensures a clean, healthy space without harmful chemicals.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Eco-Friendly Products</h3>
                  <p className="text-gray-600">All our cleaning products are biodegradable and environmentally certified</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Droplets className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Water Conservation</h3>
                  <p className="text-gray-600">Advanced cleaning methods that minimize water usage</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Safe & Effective</h3>
                  <p className="text-gray-600">Thorough cleaning that's safe for people, pets, and the planet</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800"
              alt="Eco-friendly cleaning products"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="font-bold text-3xl text-green-600">10+</div>
                <p className="text-gray-600">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
