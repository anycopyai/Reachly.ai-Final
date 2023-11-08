import Link from 'next/link';
import { FaRegThumbsUp } from 'react-icons/fa'; // Example for Trustpilot icon
import { IoShieldCheckmarkOutline } from 'react-icons/io5'; // Example for GDPR icon

const Hero = () => {
  // You might need to ensure "Messina Sans" is imported in your project
  return (
    <section className="bg-[#1d0254] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero flex flex-wrap justify-between items-center py-24 md:py-32">
          <div className="md:w-1/2 mb-10 md:mb-0 space-y-6">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight" style={{ fontFamily: "'Messina Sans', sans-serif" }}>
              Personalize Email At Scale with AI
            </h1>
            <p className="text-xl" style={{ fontFamily: "'Messina Sans', sans-serif" }}>
              Experience the ultimate platform for boosting your outreach.
            </p>
            <Link href="/signup">
              <a className="inline-block bg-blue-600 text-lg font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300" style={{ fontFamily: "'Messina Sans', sans-serif" }}>
                Try Free for 14 Days
              </a>
            </Link>
            <p className="text-sm font-light italic" style={{ fontFamily: "'Messina Sans', sans-serif" }}>
              No Credit Card Required
            </p>
            <div className="flex items-center mt-4">
              <IoShieldCheckmarkOutline className="text-blue-300 text-3xl mr-2" />
              <span className="text-sm" style={{ fontFamily: "'Messina Sans', sans-serif" }}>GDPR Compliant</span>
              <FaRegThumbsUp className="text-blue-300 text-3xl ml-6 mr-2" />
              <span className="text-sm" style={{ fontFamily: "'Messina Sans', sans-serif" }}>5 Star Rated on Trustpilot</span>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg mx-auto md:ml-auto"
              src="https://via.placeholder.com/400" // Replace with your image URL
              alt="Illustration of engagement"
              style={{ maxWidth: '500px', transition: 'transform 0.3s ease-in-out' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
