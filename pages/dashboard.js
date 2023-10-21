import { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import MailForm from '../components/dashboard/MailForm';
import MailModal from '../components/dashboard/MailModal';
import UserProfile from '../components/dashboard/UserProfile';
import NotificationBell from '../components/dashboard/NotificationBell';

export default function Dashboard() {
    const [website, setWebsite] = useState('');
    const [mailContent, setMailContent] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [notificationsCount, setNotificationsCount] = useState(3);
    const [notifications] = useState(['Update 1: XYZ feature added!', 'Update 2: Performance improved.', 'Reminder: Check out new updates.']);  // Mock data

    const handleGenerateMail = () => {
        const generatedMail = `Generated mail for ${website}`;
        setMailContent(generatedMail);
        setShowModal(true);
    };

    return (
      <div className="flex bg-F3F6FC min-h-screen">
        <Sidebar />
        <div className="flex-1 p-10">
          <div className="mb-2 flex justify-end items-center space-x-4">
              <NotificationBell notificationsCount={notificationsCount} notifications={notifications} />
              <UserProfile />
          </div>
          <div className="mt-2 mb-6">
              <MailForm website={website} setWebsite={setWebsite} onGenerate={handleGenerateMail} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold">5,000</span>
              </div>
              <div className="text-gray-500">Total Email Sent</div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold">3,800</span>
              </div>
              <div className="text-gray-500">Total Email Open</div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold">950</span>
              </div>
              <div className="text-gray-500">Reply Received</div>
            </div>
          </div>
          {showModal && <MailModal mailContent={mailContent} setMailContent={setMailContent} onClose={() => setShowModal(false)} />}
        </div>
      </div>
    );
}
