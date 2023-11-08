// components/Hero.js
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero bg-white flex flex-col md:flex-row items-center py-24 md:py-32">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Engage Better, <br className="hidden lg:inline" />Achieve More
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience the ultimate platform for boosting your outreach.
            </p>
            <Link href="/get-started">
              <a className="inline-block bg-blue-600 text-white text-lg px-6 py-3 rounded-md shadow hover:bg-blue-700 transition duration-300">
                Get Started
              </a>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              className="w-full max-w-lg mx-auto md:ml-auto"
              src="https://assets-global.website-files.com/60db260c5412535a6e45aa17/64419f0fb3c8591ee107c114_what-insights-to-use-to-personalize-cold-outreach.png"
              alt="Illustration of engagement"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
