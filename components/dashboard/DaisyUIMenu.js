import React from 'react';
import { FaBell } from 'react-icons/fa';

function DaisyUIMenu() {
    return (
        <div className="relative w-full">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl"></a>                
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
                                <img src="/images/user.png" alt="User Profile" className="h-10 w-10 rounded-full" /> {/* Added img here */}
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a>Profile</a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DaisyUIMenu;
