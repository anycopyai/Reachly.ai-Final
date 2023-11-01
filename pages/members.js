import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import AlertBadge from '../components/dashboard/AlertBadge';
import InviteMemberPopup from '../components/dashboard/InviteMemberPopup';

function Members() {
    const [trialDays, setTrialDays] = useState(7);
    const [members, setMembers] = useState([
        {
            id: 1,
            name: 'ranjit Rajput',
            email: 'ranjit@rdm.in',
            role: 'Owner',
        },
    ]);
    const [showPopup, setShowPopup] = useState(false);

    const handleMemberInvited = (newMember) => {
        setMembers([...members, newMember]);
        setShowPopup(false);
    };

    const handleRemoveMember = (id) => {
        setMembers(members.filter(member => member.id !== id));
    };

    const handleEditMember = (id) => {
        // Placeholder for edit functionality
        console.log(`Editing member with ID: ${id}`);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <DaisyUIMenu />
                <AlertBadge trialDays={trialDays} />

                <div className="flex-1 p-10">
                    <div className="flex justify-between mb-5">
                        <h1 className="text-3xl font-bold text-gray-800">Team Members</h1>
                        <button
                            onClick={() => setShowPopup(true)}
                            className="btn btn-primary"
                        >
                            + Invite members
                        </button>
                    </div>

                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                            {members.map(member => (
                                <li key={member.id}>
                                    <div className="px-4 py-4 sm:px-6 flex justify-between items-center">
                                        <div>
                                            <h2 className="text-xl font-medium text-gray-900">{member.name}</h2>
                                            <p className="text-sm text-gray-500">{member.email}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 mr-2">
                                                {member.role}
                                            </span>
                                            <button onClick={() => handleEditMember(member.id)} className="btn btn-outline mr-2 text-blue-600">Edit</button>
                                            <button onClick={() => handleRemoveMember(member.id)} className="btn btn-error text-red-600">Remove</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {showPopup && <InviteMemberPopup onClose={() => setShowPopup(false)} onMemberInvited={handleMemberInvited} />}
        </div>
    );
}

export default Members;
