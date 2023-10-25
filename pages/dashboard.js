import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import MailForm from '../components/dashboard/MailForm';
import MailModal from '../components/dashboard/MailModal';
import { useUser } from '../contexts/UserContext';
import AutoLogout from '../utils/AutoLogout'; // Adjust path according to your directory structure


function Dashboard() {
  const { user, loadingAuthState } = useUser(); // Destructure both user and loadingAuthState
  const router = useRouter();

  useEffect(() => {
    // If not loading and no user, redirect to login
    if (!loadingAuthState && !user) {
      router.push('/SignIn');
    }
  }, [user, loadingAuthState]); // Add loadingAuthState as a dependency

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

  if (loading) {
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
        <AutoLogout user={user} timeoutDuration={1800000} /> {/* Here, 1800000 milliseconds is for 30 minutes */}

      </div>
    </div>
  );
}



export default Dashboard;
