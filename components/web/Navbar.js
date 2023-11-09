// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#1d0254] shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a className="font-bold text-xl text-white">QuickQuill®</a>
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            {/* Login Link for Mobile */}
            <Link href="/login">
              <a className="mr-2 text-white hover:text-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Login</a>
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icons adjusted to show a white color */}
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-4">
            <Link href="/features">
              <a className="text-white hover:text-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Features</a>
            </Link>
            <Link href="/pricing">
              <a className="text-white hover:text-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
            </Link>
            <Link href="/resources">
              <a className="text-white hover:text-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Resources</a>
            </Link>
            <Link href="/SignIn">
              <a className="text-white hover:text-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Login</a>
            </Link>
            <Link href="/SignUp">
              <a className="ml-4 inline-flex items-center justify-center px-5 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                Sign Up
              </a>
            </Link>            {/* ... */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`} id="mobile-menu">
      <Link href="/features">
        <a className="text-white hover:text-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Features</a>
      </Link>
      <Link href="/pricing">
        <a className="text-white hover:text-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
      </Link>
      <Link href="/resources">
        <a className="text-white hover:text-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Resources</a>
      </Link>
      <Link href="/SignIn">
        <a className="text-white hover:text-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Login</a>
      </Link>
      <Link href="/SignUp">
        <a className="block w-full mt-1 px-4 py-2 text-center font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          Sign Up
        </a>
      </Link>      </div>
    </nav>
  );
};

export default Navbar;
