import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext'; // Adjust the import path as needed
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import MailForm from '../components/dashboard/MailForm';
import MailModal from '../components/dashboard/MailModal';
import AutoLogout from '../utils/AutoLogout';
import { useRouter } from 'next/router';

function Dashboard() {
  const { user, loading } = useContext(UserContext);
  const [website, setWebsite] = useState('');
  const [mailContent, setMailContent] = useState('');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      // Redirect to login if not authenticated
      router.push('/Login');
    }
  }, [user, loading, router]);

  const handleGenerateMail = () => {
    const generatedMail = `Generated mail for ${website}`;
    setMailContent(generatedMail);
    setShowModal(true);
  };

  if (loading) {
    return <div>Loading...</div>; // Or any loading spinner
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
        <AutoLogout user={user} timeoutDuration={1800000} />
      </div>
    </div>
  );
}

export default Dashboard;
