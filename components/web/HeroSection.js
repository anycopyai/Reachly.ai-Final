// components/HeroSection.js
const HeroSection = () => {
    return (
      <div className="bg-lightgray"> {/* Same background as PricingPlan */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-semibold mb-6 text-gray-800">
              "Elixcent pays for itself 10x over"
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Reach millions of decision makers and their teams with Personalized Outreach
            </p>
            <div className="flex justify-center space-x-3 items-center mb-8">
              <span className="text-xs font-medium py-2 px-4 bg-white rounded-full shadow-md">GDPR Compliant</span>
              <span className="text-xs font-medium py-2 px-4 bg-white rounded-full shadow-md">CCPA Compliant</span>
              <span className="text-xs font-medium py-2 px-4 bg-white rounded-full shadow-md">SOC2 Compliant</span>
            </div>
          
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  