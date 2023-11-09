import Link from 'next/link';
import { FaRegThumbsUp } from 'react-icons/fa';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';

const Hero = () => {
  return (
    <section className="bg-[#1d0254] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero flex flex-wrap justify-between items-start py-24 md:py-32">
          <div className="md:w-1/2 mb-10 md:mb-0 space-y-4">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-none mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Personalized Email Outreach At Scale with AI
            </h1>
            <p className="text-sm md:text-base leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
              Elevate your email campaigns with AI-driven personalization. Secure more meetings, amplify replies, and boost revenue. Simple, effective, and scalable.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link href="/signup">
                <a className="inline-block bg-blue-600 text-base font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Try Free for 14 Days
                </a>
              </Link>
              <p className="text-xs font-light italic" style={{ fontFamily: "'Inter', sans-serif", alignSelf: 'center' }}>
                No Credit Card Required
              </p>
            </div>
            <div className="flex items-center mt-4">
              <IoShieldCheckmarkOutline className="text-blue-300 text-2xl mr-2" />
              <span className="text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>GDPR Compliant</span>
              <FaRegThumbsUp className="text-blue-300 text-2xl ml-6 mr-2" />
              <span className="text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>5 Star Rated on Trustpilot</span>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg mx-auto md:ml-auto"
              src="https://via.placeholder.com/400"
              alt="Illustration of engagement"
              style={{ maxWidth: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
