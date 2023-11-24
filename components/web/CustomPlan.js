// components/CustomPlan.js
const CustomPlan = () => {
    return (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Custom Plan</h3>
            <p className="text-xl text-gray-600 mb-6">Tailored solutions for your business</p>
            <p className="text-4xl font-extrabold text-gray-800 mb-4">Up to 1,000,000 Credits</p>
            <p className="text-md text-gray-600 mb-6">Custom pricing based on your needs</p>
            
            <button className="w-full bg-green-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition duration-300 ease-in-out">
              Contact Us for a Quote
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CustomPlan;
  