import React, { useState, useEffect, useRef } from 'react';
import { FaBell } from 'react-icons/fa';

export default function CustomNotificationBell({ notificationsCount, notifications }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            {/* Bell Icon */}
            <div onClick={toggleDropdown} className="relative hover:bg-gray-100 rounded-full p-2 cursor-pointer">
                <FaBell className="text-blue-500 text-lg"/>
                {notificationsCount > 0 && 
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {notificationsCount}
                    </span>
                }
            </div>

            {/* Custom Dropdown Content */}
            <div className={`${isOpen ? 'block' : 'hidden'} origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10`}>
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
