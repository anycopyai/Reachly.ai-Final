import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import MailForm from '../components/dashboard/MailForm';
import MailModal from '../components/dashboard/MailModal';
import { useUser } from '../contexts/UserContext';
import AutoLogout from '../utils/AutoLogout';
import Link from 'next/link';


function Dashboard() {
  const { user, loadingAuthState } = useUser();
  const router = useRouter();

  // If not loading and no user, redirect to login
  if (!loadingAuthState && !user) {
    router.push('/SignIn');
    return null;  // Return null to stop rendering
  }

  // If still loading, show loading skeleton
  if (loadingAuthState) {
    return (
      <div className="skeleton-wrapper flex min-h-screen">
        <div className="skeleton-sidebar"></div>
        <div className="skeleton-content flex flex-col justify-center items-center">
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
        </div>
      </div>
    );
  }

  const [website, setWebsite] = useState('');
  const [mailContent, setMailContent] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
        <div className="flex-1 p-10 grid grid-cols-12 gap-4">
          <div className="col-start-1 col-span-12 bg-white rounded p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4">Personalization System</h1>
            <MailForm website={website} setWebsite={setWebsite} onGenerate={handleGenerateMail} />
          </div>
        </div>
        {showModal && <MailModal mailContent={mailContent} setMailContent={setMailContent} onClose={() => setShowModal(false)} />}
        <AutoLogout user={user} timeoutDuration={1800000} />
      </div>
    </div>
  );
}

export default Dashboard;
