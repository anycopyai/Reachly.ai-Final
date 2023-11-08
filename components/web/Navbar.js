// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const premiumButtonClasses = "text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a className="font-bold text-xl text-gray-800">QuickQuill®</a>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="ml-4 flex items-center md:ml-6">
              <Link href="/login">
                <a className={`${premiumButtonClasses} hidden md:block`}>Login</a>
              </Link>
              <Link href="/signup">
                <a className={`${premiumButtonClasses} ml-4`}>Sign Up</a>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/login">
            <a className={`${premiumButtonClasses} block md:hidden`}>Login</a>
          </Link>
          <Link href="/signup">
            <a className={`${premiumButtonClasses} block mt-1 md:hidden`}>Sign Up</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
