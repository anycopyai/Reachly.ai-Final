import { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import MailForm from '../components/dashboard/MailForm';
import MailModal from '../components/dashboard/MailModal';

export default function Dashboard() {
    const [website, setWebsite] = useState('');
    const [mailContent, setMailContent] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleGenerateMail = () => {
        const generatedMail = `Generated mail for ${website}`;
        setMailContent(generatedMail);
        setShowModal(true);
    };

    return (
        <div className="flex min-h-screen bg-reachly-bg">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <DaisyUIMenu />
                <div className="flex-1 p-10 grid grid-cols-12 gap-4"> {/* Using grid here */}
                    <div className="col-start-1 col-span-12 bg-white rounded p-4 shadow-md">  {/* Adjust column start and span */}
                        <h1 className="text-2xl font-bold mb-4">Personalization System</h1>
                        <MailForm website={website} setWebsite={setWebsite} onGenerate={handleGenerateMail} />
                    </div>
                </div>
                {showModal && <MailModal mailContent={mailContent} setMailContent={setMailContent} onClose={() => setShowModal(false)} />}
            </div>
        </div>
    );
}
