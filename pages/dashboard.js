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
        <div className="flex bg-[#F3F6FC] min-h-screen">
            <Sidebar />
            <div className="flex-1 p-10">
                <div className="mb-2 flex justify-end items-center space-x-4">
                    <NotificationBell notificationsCount={notificationsCount} notifications={notifications} />
                    <UserProfile />
                </div>
                <div className="mt-2">
                    <MailForm website={website} setWebsite={setWebsite} onGenerate={handleGenerateMail} />
                </div>
                {showModal && <MailModal mailContent={mailContent} setMailContent={setMailContent} onClose={() => setShowModal(false)} />}
            </div>
        </div>
    );
}
