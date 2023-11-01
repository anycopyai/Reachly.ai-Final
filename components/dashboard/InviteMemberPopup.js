import React, { useState } from 'react';

function InviteMemberPopup({ onClose, onMemberInvited }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('Member');

    const handleInviteClick = () => {
        // Handle invite logic here
        onMemberInvited({ name, email, role });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Background overlay */}
            <div 
                className="fixed inset-0 bg-black opacity-50" 
                onClick={onClose}
            ></div>

            {/* Popup content */}
            <div 
                className="relative bg-white p-8 rounded-lg shadow-lg w-96"
                onClick={e => e.stopPropagation()}  // This will prevent clicks within the popup from propagating
            >
                <button onClick={onClose} className="absolute top-4 right-4">
                    Close
                </button>
                <h2 className="text-2xl font-bold mb-4">Invite New Member</h2>

                {/* ... rest of the modal content ... */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold">Name</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold">Email</label>
                    <input
                        type="email"
                        className="w-full p-2 border rounded"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold">Role</label>
                    <select
                        className="w-full p-2 border rounded"
                        value={role}
                        onChange={e => setRole(e.target.value)}
                    >
                        <option value="Member">Member</option>
                        <option value="Admin">Admin</option>
                        <option value="Owner">Owner</option>
                    </select>
                </div>

                <button
                    className="btn btn-primary w-full"
                    onClick={handleInviteClick}
                >
                    Invite
                </button>
            </div>
        </div>
    );
}

export default InviteMemberPopup;
