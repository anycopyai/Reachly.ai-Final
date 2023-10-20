import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

export default function NotificationBell({ notificationsCount, notifications }) {
    return (
        <div className="group relative inline-block text-left">
            <div className="relative hover:bg-gray-100 rounded-full p-2 cursor-pointer">
                <FontAwesomeIcon icon={faBell} size="lg" className="text-blue-500" />
                {notificationsCount > 0 && 
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {notificationsCount}
                    </span>
                }
            </div>

            {/* Dropdown Content */}
            <div className="group-hover:block hidden origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {notifications.map((notification, index) => (
                        <a key={index} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            {notification}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
