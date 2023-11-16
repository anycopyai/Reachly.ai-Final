import Link from 'next/link';
import { FaRegThumbsUp } from 'react-icons/fa';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';

const Hero = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-blue-600">Elevate</span> Your <br />
              <span className="text-blue-600">Email Outreach</span> with AI
            </h1>
            <p className="text-lg mb-10 font-light leading-relaxed">
              Transform your email campaigns with AI-driven personalization. Achieve higher engagement, increase replies, and amplify your revenue. Start a new journey in email marketing.
            </p>
            <div className="flex items-center gap-6 mb-8">
              <Link href="/SignUp">
                <a className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md text-lg px-8 py-4">
                  Start Your Free Trial
                </a>
              </Link>
              <span className="text-sm italic">
                No Credit Card Needed
              </span>
            </div>
            <div className="flex items-center text-sm">
              <IoShieldCheckmarkOutline className="text-blue-500 text-3xl mr-4" />
              <span className="mr-8">GDPR Compliant</span>
              <FaRegThumbsUp className="text-blue-500 text-3xl mr-4" />
              <span>Highly Rated on Trustpilot</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img
              className="w-full max-w-lg"
              src="https://via.placeholder.com/400"
              alt="Illustration of engagement"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
