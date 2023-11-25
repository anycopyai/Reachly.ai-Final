import React from 'react';

// Named export for IcebreakerCard
export const IcebreakerCard = ({ title, text }) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    // Implement state or a message to show that the text has been copied, if needed
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow transition-shadow hover:shadow-md">
      <div className="p-5">
        <h3 className="text-xl font-medium text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{text}</p>
      </div>
      <div className="px-5 py-3 flex justify-between items-center bg-gray-50">
        <span className="text-gray-500 text-sm">Click to copy this icebreaker</span>
        <button 
          onClick={handleCopyClick} 
          className="bg-transparent hover:bg-gray-200 text-gray-600 font-semibold py-2 px-4 border border-gray-300 rounded transition-colors"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

// Default export for IcebreakerGenerator
const IcebreakerGenerator = ({ icebreakers }) => {
  const generateNewIcebreakers = () => {
    // Logic to call an API or service to get new icebreakers
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">Personalised Icebreaker Generator</h2>
      
      <div className="space-y-6">
        {icebreakers.map((icebreaker, index) => (
          <IcebreakerCard key={index} title={`Personalised Icebreaker ${index + 1}`} text={icebreaker} />
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button 
          onClick={generateNewIcebreakers} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
        >
          Generate New Icebreakers
        </button>
      </div>
    </div>
  );
};

export default IcebreakerGenerator;
