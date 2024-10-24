import { Building2, Dumbbell, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: 'School Cleaning',
    description: 'Comprehensive cleaning solutions for educational facilities, ensuring a safe and healthy learning environment.',
    features: ['Classroom sanitization', 'Cafeteria cleaning', 'Playground maintenance', 'Daily disinfection']
  },
  {
    icon: <Dumbbell className="h-8 w-8" />,
    title: 'Gym Cleaning',
    description: 'Specialized cleaning services for fitness centers, focusing on equipment hygiene and member safety.',
    features: ['Equipment sanitization', 'Locker room cleaning', 'Floor maintenance', 'Air purification']
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: 'Office Cleaning',
    description: 'Professional cleaning services for commercial offices, creating a productive work environment.',
    features: ['Workspace cleaning', 'Kitchen maintenance', 'Window cleaning', 'Carpet care']
  }
];

export default function Services() {
  return (
    <div id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional cleaning solutions for every commercial space
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 transition duration-300 hover:bg-green-50 hover:shadow-xl hover:scale-105"
            >
              <div className="text-green-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}