import React from 'react';
import { IoMdPerson, IoMdSettings, IoMdMail, IoMdLock, IoMdCloudUpload, IoMdKey, IoMdCard } from 'react-icons/io';

function ProfileSidebar() {
    return (
        <div className="w-64 h-screen sticky top-0 bg-white shadow-lg">
            {/* Logo Section */}
            <div className="p-6">
                <h1 className="text-blue-500 text-2xl font-bold">Reachly</h1>
            </div>

            {/* Navigation Links */}
            <ul className="menu p-4 space-y-2">
                <li>
                    <a className="text-gray-500 hover:bg-blue-50">
                        <IoMdPerson className="text-blue-500 h-5 w-5 inline-block mr-3" />
                        Profile
                    </a>
                </li>
                <li>
                    <a className="text-gray-500 hover:bg-blue-50">
                        <IoMdSettings className="text-blue-500 h-5 w-5 inline-block mr-3" />
                        Account
                    </a>
                </li>
                <li>
                    <a className="text-gray-500 hover:bg-blue-50">
                        <IoMdLock className="text-blue-500 h-5 w-5 inline-block mr-3" />
                        Security
                    </a>
                </li>
                <li>
                    <a className="text-gray-500 hover:bg-blue-50">
                        <IoMdMail className="text-blue-500 h-5 w-5 inline-block mr-3" />
                        Mailbox
                    </a>
                </li>
                <li>
                    <a className="text-gray-500 hover:bg-blue-50">
                        <IoMdCloudUpload className="text-blue-500 h-5 w-5 inline-block mr-3" />
                        Integration
                    </a>
                </li>
                <li>
                    <a className="text-gray-500 hover:bg-blue-50">
                        <IoMdKey className="text-blue-500 h-5 w-5 inline-block mr-3" />
                        API
                    </a>
                </li>
                <li>
                    <a className="text-gray-500 hover:bg-blue-50">
                        <IoMdCard className="text-blue-500 h-5 w-5 inline-block mr-3" />
                        Subscription
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ProfileSidebar;
