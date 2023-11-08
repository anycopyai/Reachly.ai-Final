// components/FeatureTabs.js
import { useState } from 'react';

const featureData = [
  {
    name: 'Social Personalisation',
    image: 'https://assets-global.website-files.com/60db260c5412535a6e45aa17/64419f0fb3c8591ee107c114_what-insights-to-use-to-personalize-cold-outreach.png', // Replace with your image path
    description: 'Engage users by leveraging social signals and activity.',
  },
  {
    name: 'Personalised Icebreakers',
    image: '/images/personalised-icebreakers.jpg', // Replace with your image path
    description: 'Break the ice with context-aware messages that resonate.',
  },
  // ... add more features as needed
];

export default function FeatureTabs() {
  const [activeFeature, setActiveFeature] = useState(featureData[0]);

  return (
    <div className="bg-white">
      <div className="min-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">Here's What You Can Expect In Seconds. Using AI.</h2>
        <div className="rounded-lg">
          <div className="flex flex-col lg:flex-row">
            <nav className="flex-shrink-0 w-full lg:w-1/4">
              <ul className="flex flex-col">
                {featureData.map((feature, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setActiveFeature(feature)}
                      className={`text-left px-6 py-4 w-full focus:outline-none text-lg transition-colors duration-300 ${
                        activeFeature.name === feature.name
                          ? 'bg-gray-100 font-bold text-gray-800'
                          : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      {feature.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="w-full lg:w-3/4 p-8">
              <div className="rounded-lg bg-white">
                <img src={activeFeature.image} alt={activeFeature.name} className="w-full object-cover mb-6 rounded-t-lg" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{activeFeature.name}</h3>
                  <p className="text-lg text-gray-600">{activeFeature.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
