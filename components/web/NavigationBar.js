import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-semibold text-xl text-darkblue font-sans" style={{ fontFamily: 'Open Sans, sans-serif' }}>Elixcent</span>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {/* Desktop Menu Items */}
              {/* ... */}
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <a href="#" className="text-blue-600 hover:text-blue-700 px-5 py-2 border border-transparent rounded-md text-sm font-medium">Login</a>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button onClick={toggleMobileMenu} className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            {/* Mobile Menu Items */}
            {/* ... */}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <a href="/Login" className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-700">Login</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
