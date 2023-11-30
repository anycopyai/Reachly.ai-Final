import { useState } from 'react';

const DataSourceOption = ({ title, description }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => setIsChecked(!isChecked);

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer" onClick={toggleCheck}>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={toggleCheck} 
        className="hidden" // Hides the actual checkbox but retains its functionality
      />
      <div className="flex items-center space-x-3">
        <div className="form-checkbox h-5 w-5 rounded text-blue-600 border-gray-300 flex-shrink-0">
          {isChecked && <span className="inline-block w-5 h-5 flex items-center justify-center bg-blue-600 text-white rounded-full">✓</span>}
        </div>
        <div>
          <h2 className="text-lg text-gray-800 font-semibold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const DataScrapeComponent = ({ onContinue }) => {
  // Use the onContinue prop when the Continue button is clicked
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Start a Scrape</h1>
      <p className="text-center text-gray-600 mb-8">Choose the data sources you're interested in</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Map through an array of objects to render DataSourceOption components */}
        {['Case Studies', 'Personal Content', 'Recent News', 'Company Website', 'User Feedback', 'Market Analysis'].map((option, index) => (
          <DataSourceOption
            key={index}
            title={option}
            description={`Find ${option.toLowerCase()} featured on the prospects' website`}
          />
        ))}
      </div>
      <div className="text-center mt-10">
        <button 
          type="button" 
          className="px-10 py-4 bg-blue-600 text-white font-bold text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DataScrapeComponent;
