// components/Footer.js
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#261e33] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/">
              <a className="text-2xl font-bold text-white hover:text-gray-400">QuickQuill®</a>
            </Link>
            <p className="mt-2 text-xs text-gray-400">Empowering Writers with AI</p>
            <p className="text-xs mt-4">Making email personalization seamless with the power of AI technology.</p>
          </div>

          <div>
            <h6 className="text-sm font-semibold text-gray-400 uppercase mb-2">Product</h6>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link href="/features">
                  <a className="text-xs hover:text-white">Features</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/pricing">
                  <a className="text-xs hover:text-white">Pricing</a>
                </Link>
              </li>
              {/* Add more product links here */}
            </ul>
          </div>

          <div>
            <h6 className="text-sm font-semibold text-gray-400 uppercase mb-2">Company</h6>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link href="/about">
                  <a className="text-xs hover:text-white">About Us</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact">
                  <a className="text-xs hover:text-white">Contact</a>
                </Link>
              </li>
              {/* Add more company links here */}
            </ul>
          </div>

          <div>
            <h6 className="text-sm font-semibold text-gray-400 uppercase mb-2">Legal</h6>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link href="/terms">
                  <a className="text-xs hover:text-white">Terms of Service</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy">
                  <a className="text-xs hover:text-white">Privacy Policy</a>
                </Link>
              </li>
              {/* Add more legal links here */}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end border-t border-gray-700 pt-8">
          <div className="mb-4 md:mb-0">
            <p className="text-xs text-gray-400">HQ Address: California, USA</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://instagram.com">
              <a className="text-gray-400 hover:text-white text-lg">
                <FaInstagram />
              </a>
            </Link>
            <Link href="https://twitter.com">
              <a className="text-gray-400 hover:text-white text-lg">
                <FaTwitter />
              </a>
            </Link>
            <Link href="https://facebook.com">
              <a className="text-gray-400 hover:text-white text-lg">
                <FaFacebookF />
              </a>
            </Link>
            <Link href="https://linkedin.com">
              <a className="text-gray-400 hover:text-white text-lg">
                <FaLinkedinIn />
              </a>
            </Link>
          </div>
        </div>

        <div className="text-center text-xs mt-8">
          <p>© {new Date().getFullYear()} QuickQuill®. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
