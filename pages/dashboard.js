import { useState, useEffect } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import MailForm from '../components/dashboard/MailForm';
import MailModal from '../components/dashboard/MailModal';

export default function Dashboard() {
    const [website, setWebsite] = useState('');
    const [mailContent, setMailContent] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleGenerateMail = () => {
        const generatedMail = `Generated mail for ${website}`;
        setMailContent(generatedMail);
        setShowModal(true);
    };

    if (loading) {
        return (
            <div className="skeleton-wrapper flex">
                <div className="skeleton-sidebar"></div>
                <div className="skeleton-content">
                    <div className="skeleton-box"></div>
                    <div className="skeleton-box"></div>
                    <div className="skeleton-box"></div>
                </div>
                <style jsx>{`
                    .skeleton-wrapper {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 1000;
                        background-color: #f0f0f0;
                    }

                    .skeleton-sidebar {
                        width: 240px;
                        height: 100vh;
                        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                        background-size: 200% 100%;
                        animation: shimmer 1.5s infinite;
                        margin-right: 20px;
                    }

                    .skeleton-content {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                    }

                    .skeleton-box {
                        height: 100px;
                        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                        background-size: 200% 100%;
                        animation: shimmer 1.5s infinite;
                    }

                    @keyframes shimmer {
                        0% {
                            background-position: -200% 0;
                        }
                        100% {
                            background-position: 200% 0;
                        }
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-reachly-bg">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <DaisyUIMenu />
                <div className="flex-1 p-10 grid grid-cols-12 gap-4">
                    <div className="col-start-1 col-span-12 bg-white rounded p-4 shadow-md">
                        <h1 className="text-2xl font-bold mb-4">Personalization System</h1>
                        <MailForm website={website} setWebsite={setWebsite} onGenerate={handleGenerateMail} />
                    </div>
                </div>
                {showModal && <MailModal mailContent={mailContent} setMailContent={setMailContent} onClose={() => setShowModal(false)} />}
            </div>
        </div>
    );
}
