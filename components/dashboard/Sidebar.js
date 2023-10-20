import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faAngleRight, faUserCircle, faAddressBook, faEnvelope, faList, faCheckCircle, faFireAlt, faClipboardList } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <div className="w-1/5 h-screen bg-white p-5 space-y-5 border-r sticky top-0">
            {/* Logo Section */}
            <div className="flex items-center space-x-4 mb-6">
                <div className="p-2 rounded-full bg-blue-500">
                    <FontAwesomeIcon icon={faUserCircle} className="text-white" size="lg" />
                </div>
                <div>
                    <h1 className="text-gray-800 text-xl font-bold inline-block mr-2">Reachly</h1>
                    <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">Beta</span>
                </div>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-4">
                {[
                    { icon: faAddressBook, label: "Contacts", href: "#" },
                    { icon: faEnvelope, label: "Sequences", href: "#" },
                    { icon: faList, label: "Personalization", href: "#" },
                    { icon: faCheckCircle, label: "Email Verification", href: "#" },
                    { icon: faFireAlt, label: "Email Warmup", href: "#", comingSoon: true },
                    { icon: faClipboardList, label: "Templates", href: "#" },
                ].map(item => (
                    <li key={item.label} className="flex items-center space-x-4 p-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-100">
                        <FontAwesomeIcon icon={item.icon} className="text-blue-500" size="lg" />
                        <a href={item.href} className="text-gray-700 text-md hover:text-blue-500">{item.label}</a>
                        {item.comingSoon && <span className="ml-2 text-xs bg-yellow-200 text-yellow-700 px-2 py-1 rounded">Coming Soon</span>}
                    </li>
                ))}
            </ul>

            {/* Logout Section */}
            <div className="absolute bottom-6 left-5 flex items-center space-x-3 p-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-100">
                <FontAwesomeIcon icon={faPowerOff} className="text-red-500" size="lg" />
                <a href="#" className="text-gray-700 text-md hover:text-red-500">Logout</a>
            </div>
        </div>
    );
}

export default Sidebar;
