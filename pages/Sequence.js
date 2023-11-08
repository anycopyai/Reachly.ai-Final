import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import { useRouter } from 'next/router';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import AlertBadge from '../components/dashboard/AlertBadge'; 
import CreateProjectPopup from '../components/dashboard/CreateProjectPopup';

function Sequence() {
    const [trialDays, setTrialDays] = useState(7);
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: 'Default Project',
            description: 'This is your default project.',
        },
    ]);
    const [showPopup, setShowPopup] = useState(false);
    const [sequenceActive, setSequenceActive] = useState(true);  // state for toggle button

    const router = useRouter();

    const navigateToProject = (projectId) => {
        router.push(`/projects/${projectId}`);
    };

    const handleProjectCreated = (newProject) => {
        setProjects([...projects, newProject]);
        setShowPopup(false);
    };

    return (
        <div className="flex h-screen bg-reachly-bg">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <DaisyUIMenu />
                <div className="p-5">  {/* Adding padding here */}
                    {/* Sequence Component Start */}
                    <div className="bg-white p-6 shadow-lg w-full rounded-md mb-5">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Multichannel Demo Request</h2>

                            <div className="form-control w-52">
                                <label className="cursor-pointer label">
                                    <span className="label-text">Active</span> 
                                    <input 
                                        type="checkbox" 
                                        className="toggle toggle-primary" 
                                        checked={sequenceActive} 
                                        onChange={() => setSequenceActive(!sequenceActive)}  // toggle state
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-gray-500">People: <span className="font-medium">0</span></div>
                            <div className="text-gray-500">Open rate: <span className="font-medium">0% (0)</span></div>
                            <div className="text-gray-500">Reply rate: <span className="font-medium">0% (0)</span></div>
                        </div>
                        <div className="mt-4 progress-bar bg-gray-200 rounded h-2">
                            <div className="h-full bg-blue-500" style={{width: '0%'}}></div>
                        </div>
                    </div>
                    {/* Sequence Component End */}
                </div>
            </div>
        </div>
    );
}

export default Sequence;
