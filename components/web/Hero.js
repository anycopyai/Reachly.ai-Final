const HeroSection = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Text and Call-to-Action Column */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6">Get 10X Reply with AI</h1>
          <p className="text-xl text-gray-600 mb-8">Streamline your workflows with our cutting-edge web scraping technology.</p>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-12 rounded-md transition duration-300 ease-in-out">
              Start for Free
            </button>
            <p className="text-gray-500 text-sm mt-4">No credit card required</p>
          </div>
          <div className="flex justify-center md:justify-start items-center mt-8">
            <span className="text-yellow-400">
              {/* FontAwesome icons for stars */}
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
            <p className="text-gray-600 text-sm ml-2">Rated 5 stars on Trustpilot</p>
          </div>
        </div>
        
        {/* Image Column */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src="path-to-your-saas-preview-image.jpg" alt="SaaS Preview" className="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"/>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
