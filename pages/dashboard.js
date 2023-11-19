import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import AutoLogout from '../utils/AutoLogout';
import withAuth from '../hoc/withAuth'; // Adjust the import path as needed

function Dashboard({ user }) {
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
        <div className="flex-1 p-10 grid grid-cols-12 gap-4">
         
        </div>
      
        <AutoLogout user={user} timeoutDuration={1800000} />
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
