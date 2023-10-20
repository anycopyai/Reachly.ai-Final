import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function UserProfileDropdown() { // Name provided for the function
    return (
        <div className="group relative inline-block text-left">
            <div className="flex space-x-4 items-center">
                {/* User Profile Icon */}
                <div className="hover:bg-gray-100 rounded-full p-2 cursor-pointer">
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                </div>
            </div>

            {/* Dropdown Content */}
            <div className="group-hover:block hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Security</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</a>
                </div>
            </div>
        </div>
    );
}

export default UserProfileDropdown;
