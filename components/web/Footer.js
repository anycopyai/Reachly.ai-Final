// components/Footer.js
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light-blue-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div>
            <Link href="/">
              <a className="text-3xl font-bold text-dark-gray hover:text-light-blue-300">Elixcent</a>
            </Link>
            <p className="mt-3 text-sm text-dark-gray">Empowering Innovation with AI</p>
            <p className="text-sm mt-5">Enhancing digital experiences with cutting-edge AI technology.</p>
          </div>

          <div>
            <h6 className="text-base font-semibold text-dark-gray uppercase mb-3">Product</h6>
            <ul className="list-none">
              <li className="mb-3">
                <Link href="/features">
                  <a className="text-sm hover:text-light-blue-300">Features</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/pricing">
                  <a className="text-sm hover:text-light-blue-300">Pricing</a>
                </Link>
              </li>
              {/* Add more product links here */}
            </ul>
          </div>

          <div>
            <h6 className="text-base font-semibold text-dark-gray uppercase mb-3">Company</h6>
            <ul className="list-none">
              <li className="mb-3">
                <Link href="/about">
                  <a className="text-sm hover:text-light-blue-300">About Us</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/contact">
                  <a className="text-sm hover:text-light-blue-300">Contact</a>
                </Link>
              </li>
              {/* Add more company links here */}
            </ul>
          </div>

          <div>
            <h6 className="text-base font-semibold text-dark-gray uppercase mb-3">Legal</h6>
            <ul className="list-none">
              <li className="mb-3">
                <Link href="/terms">
                  <a className="text-sm hover:text-light-blue-300">Terms of Service</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/privacy">
                  <a className="text-sm hover:text-light-blue-300">Privacy Policy</a>
                </Link>
              </li>
              {/* Add more legal links here */}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end border-t border-gray-500 pt-10">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-dark-gray">HQ Address: California, USA</p>
          </div>
          <div className="flex space-x-5">
            <Link href="https://instagram.com">
              <a className="text-dark-gray hover:text-light-blue-300 text-lg">
                <FaInstagram />
              </a>
            </Link>
            <Link href="https://twitter.com">
              <a className="text-dark-gray hover:text-light-blue-300 text-lg">
                <FaTwitter />
              </a>
            </Link>
            <Link href="https://facebook.com">
              <a className="text-dark-gray hover:text-light-blue-300 text-lg">
                <FaFacebookF />
              </a>
            </Link>
            <Link href="https://linkedin.com">
              <a className="text-dark-gray hover:text-light-blue-300 text-lg">
                <FaLinkedinIn />
              </a>
            </Link>
          </div>
        </div>

        <div className="text-center text-sm mt-10">
          <p>© {new Date().getFullYear()} Elixcent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
