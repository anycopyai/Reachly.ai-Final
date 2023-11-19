import React from 'react';
import Link from 'next/link';
import { MdPerson, MdSecurity, MdSettings, MdSubscriptions, MdIntegrationInstructions, MdApi } from 'react-icons/md';

const AccountSidebar = () => {
    const menuItemClass = "flex items-center space-x-4 p-3 rounded-md transition duration-200 hover:bg-gray-200";

    return (
        <div className="account-sidebar w-64 h-full bg-[#f6f6f6] text-black flex flex-col">
            {/* Logo and Text */}
            <div className="p-5 flex justify-center border-b">
                <h1 className="text-2xl font-bold">Elixcent</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-2 py-4">
                <ul>
                    <li>
                        <Link href="/profile">
                            <a className={menuItemClass}>
                                <MdPerson size={24} />
                                <span>Profile</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/security">
                            <a className={menuItemClass}>
                                <MdSecurity size={24} />
                                <span>Security</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/preferences">
                            <a className={menuItemClass}>
                                <MdSettings size={24} />
                                <span>Preferences</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/subscription">
                            <a className={menuItemClass}>
                                <MdSubscriptions size={24} />
                                <span>Subscription</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/integration">
                            <a className={menuItemClass}>
                                <MdIntegrationInstructions size={24} />
                                <span>Integration</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/api">
                            <a className={menuItemClass}>
                                <MdApi size={24} />
                                <span>API</span>
                            </a>
                        </Link>
                    </li>
                    {/* Additional links as needed */}
                </ul>
            </nav>
        </div>
    );
};

export default AccountSidebar;
