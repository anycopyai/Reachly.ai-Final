import React, { useState } from 'react';
import { MdPowerSettingsNew, MdPerson, MdContacts, MdMail, MdList, MdCheckCircle, MdWhatshot, MdPlaylistAddCheck } from 'react-icons/md';

function Sidebar() {
  const [trialDays, setTrialDays] = useState(7);

  return (
    <div className="w-1/5 h-screen p-5 border-r sticky top-0 relative bg-base-200">
      {/* Logo Section */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-2 rounded-full bg-blue-500">
          <MdPerson className="text-white" size={28} />
        </div>
        <div>
          <h1 className="text-gray-800 text-xl font-bold inline-block mr-2">Reachly</h1>
          <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">Beta</span>
        </div>
      </div>

      {/* Trial Info */}
      <div className="text-gray-400 text-xs mb-4">
        Trial ends in {trialDays} Days
      </div>

      {/* Navigation Links */}
      <ul className="menu bg-base-200 w-56">
        {[
          { icon: <MdContacts />, label: 'Contacts', href: '#' },
          { icon: <MdMail />, label: 'Sequences', href: '#' },
          { icon: <MdList />, label: 'Personalization', href: '#' },
          { icon: <MdCheckCircle />, label: 'Email Verification', href: '#' },
          { icon: <MdWhatshot />, label: 'Email Warmup', href: '#', comingSoon: true },
          { icon: <MdPlaylistAddCheck />, label: 'Templates', href: '#' },
        ].map((item, index) => (
          <li key={item.label}>
            <a href={item.href} className={`${index === 1 ? 'active' : ''} flex items-center space-x-4 p-2`}>
              <div className="text-blue-500">
                {React.cloneElement(item.icon, { size: 28 })}
              </div>
              {item.label}
              {item.comingSoon && (
                <div className="badge badge-primary text-xs whitespace-nowrap">
                  Coming Soon
                </div>
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* Upgrade Section */}
      <div className="absolute bottom-16 left-5 flex flex-col items-start space-y-2">
        <button className="btn btn-outline btn-primary">
          Upgrade
        </button>
        <span className="text-gray-400 text-xs">
          {trialDays > 0 ? `Trial ends in ${trialDays} Days` : 'Trial ended'}
        </span>
      </div>

      {/* Logout Section */}
      <div className="absolute bottom-6 left-5 flex items-center space-x-3 p-2 rounded-md">
        <MdPowerSettingsNew className="text-red-500" size={28} />
        <a href="#" className="text-gray-700 text-md">
          Logout
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
