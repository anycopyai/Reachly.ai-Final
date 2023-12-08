import React from 'react';
import { useSidebarContext } from '../../contexts/SidebarContext';
import { FaBolt, FaEnvelopeOpenText, FaStream, FaCheckCircle, FaLayerGroup, FaUserCog, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

function Sidebar() {
  const { isExpanded, toggleSidebar } = useSidebarContext();

  const NavLink = ({ href, icon, label }) => (
    <div className={`nav-item ${!isExpanded ? 'tooltip' : ''}`} data-tip={label}>
      <a href={href} className={`flex items-center p-3 ${isExpanded ? 'justify-start' : 'justify-center'} hover:bg-blue-500 transition-colors duration-200`}>
        {icon}
        {isExpanded && <span className="ml-4 text-white text-sm">{label}</span>} {/* Adjusted font size */}
      </a>
    </div>
  );

  return (
    <div className={`fixed inset-y-0 left-0 z-30 flex flex-col shadow-xl border-r border-gray-300 transform transition-transform duration-500 ease-in-out
    ${isExpanded ? 'w-64' : 'w-16'} bg-[#211D52]`}>
      {/* Logo/Brand */}
      <div className="flex items-center justify-center h-16 w-full px-4 text-white bg-[#211D52] border-b">
        {isExpanded ? 
          <span className="text-lg font-bold">Elixcent</span> : 
          <span className="text-lg font-bold">E</span>
        }
      </div>

      {/* Spacing between logo and nav items */}
      <div className={`${isExpanded ? 'mt-4' : 'mt-2'}`}></div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <NavLink href="#dashboard" icon={<FaBolt className="text-lg text-white" />} label="Dashboard" />
        <NavLink href="#personalize" icon={<FaEnvelopeOpenText className="text-lg text-white" />} label="Personalize" />
        <NavLink href="#sequence" icon={<FaStream className="text-lg text-white" />} label="Sequence" />
        <NavLink href="#email-verification" icon={<FaCheckCircle className="text-lg text-white" />} label="Email Verification" />
        <NavLink href="#templates" icon={<FaLayerGroup className="text-lg text-white" />} label="Templates" />
        {/* Additional links can be added here */}
      </nav>

      {/* Footer/Settings */}
      <NavLink href="#settings" icon={<FaUserCog className="text-lg text-white" />} label="Settings" />

      {/* Toggle Button at the bottom */}
      <div className="mt-auto mb-4">
        <button onClick={toggleSidebar} className="rounded-full bg-gray-300 p-2 mx-auto block hover:bg-blue-500 transition-colors duration-200">
          {isExpanded ? <FaArrowLeft className="text-lg text-gray-700" /> : <FaArrowRight className="text-lg text-gray-700" />}
        </button>
        {!isExpanded && (
          <div className="text-center text-xs text-white mt-2">
            Expand Sidebar
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
