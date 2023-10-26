import React from 'react';
import { auth } from '../../lib/firebase';  // Adjust the path accordingly
import { FaBell } from 'react-icons/fa';
import { useRouter } from 'next/router'; // <-- Import the useRouter hook
import Link from 'next/link';  // Importing Link from Next.js
import { useUser } from '../../contexts/UserContext';  // Update the path accordingly

function DaisyUIMenu() {
  const { user, loadingAuthState } = useUser();
  const router = useRouter();  // <-- Initialize the router here

    // Static values for demonstration, replace with actual values
    const userName = "John Doe";
    const userEmail = "john@example.com";

  const handleLogout = async () => {
      try {
        await auth.signOut();
        router.push('/SignIn'); // Redirect to login after successful logout
      } catch (error) {
        console.error("Error logging out:", error);
      }
  };


    return (
        <div className="relative w-full">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Hi, {userName} ({userEmail})</a>                
                </div>                

                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FaBell className="h-5 w-5 text-blue-500" />
                                <span className="badge badge-sm indicator-item">5</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">5 Notifications</span>
                                <ul>
                                    <li className="my-2">Notification 1</li>
                                    <li className="my-2">Notification 2</li>
                                    <li className="my-2">Notification 3</li>
                                </ul>
                                <div className="card-actions">
                                    <a className="btn btn-primary btn-block">
                                        View All
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center">
                                <img src="/images/user.png" alt="User Profile" className="h-10 w-10 rounded-full" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52">
                          {!loadingAuthState && user ? (
                              <div className="p-3">
                                  Hi, {user.displayName || 'User'} <br />
                                  {user.email}
                              </div>
                          ) : null}

                          
                            <li className="py-2">
                                <a>Profile</a>
                            </li>
                            <li className="py-2">
                                <a>Settings</a>
                            </li>
                            <li className="py-2">
                                <a onClick={handleLogout}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DaisyUIMenu;
