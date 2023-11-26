import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@nextui-org/react"; // Import the NextUI Button component

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    // Add other navigation links here
  ];

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="font-semibold text-xl text-darkblue">Elixcent</span>
          </div>
          <div className="hidden sm:flex sm:space-x-4">
            {/* Desktop Menu Items */}
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{link.name}</a>
              </Link>
            ))}
            {/* NextUI Button for Login */}
            <Link href="/Login" passHref>
              <Button color="primary" auto>
                Login
              </Button>
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button onClick={toggleMobileMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            {/* Mobile Menu Items */}
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100">{link.name}</a>
              </Link>
            ))}
            <Link href="/Login" passHref>
              <Button color="primary" auto className="block w-full mt-3">
                Login
              </Button>
            </Link>
            {/* Start For Free Button */}
            <Button color="secondary" auto className="block w-full mt-3" onClick={() => alert('Start your free trial!')}>
              Start For Free
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
