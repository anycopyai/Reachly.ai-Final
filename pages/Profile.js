import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../components/dashboard/ProfileSidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import { useUser } from '../contexts/UserContext';
import AutoLogout from '../utils/AutoLogout';

// Import Firestore modules
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';  // Make sure the path is correct

function Profile() {
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
        {/* ... (your loading skeleton here) */}
      </div>
    );
  }

  // States for profile fields
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [website, setWebsite] = useState('');

  useEffect(() => {
    if (user) {
      const docRef = doc(db, 'users', user.uid);  // Replace 'users' with your collection name

      const fetchData = async () => {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setName(data.name);
          setBio(data.bio);
          setProfilePic(data.profilePic);
          setWebsite(data.website);
        }
      };

      fetchData().catch((error) => {
        console.log("Error getting document:", error);
      });
    }
  }, [user]);

  const handleUpdateProfile = async () => {
    if (user) {
      const docRef = doc(db, 'users', user.uid);  // Replace 'users' with your collection name

      try {
        await updateDoc(docRef, {
          name: name,
          bio: bio,
          profilePic: profilePic,
          website: website
        });
        console.log("Document successfully updated!");
      } catch (error) {
        console.log("Error updating document: ", error);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-reachly-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DaisyUIMenu />
        <div className="flex-1 p-10 grid grid-cols-12 gap-4">
          <div className="col-start-1 col-span-12 bg-white rounded p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full p-2 rounded-md border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Bio</label>
              <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="mt-2 w-full p-2 h-32 rounded-md border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Profile Picture URL</label>
              <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} className="mt-2 w-full p-2 rounded-md border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Website</label>
              <input value={website} onChange={(e) => setWebsite(e.target.value)} className="mt-2 w-full p-2 rounded-md border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <button onClick={handleUpdateProfile} className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md transition duration-300 ease-in-out">Update Profile</button>
          </div>
        </div>
      </div>
      <AutoLogout user={user} timeoutDuration={1800000} />
    </div>
  );


export default Profile;
