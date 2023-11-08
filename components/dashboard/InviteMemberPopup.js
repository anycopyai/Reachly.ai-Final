// Import required hooks and icons
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function InviteMemberPopup({ onClose }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('Member');
    const [invitationSent, setInvitationSent] = useState(false);

    const handleInviteClick = () => {
        if (name && email && role) {
            // Send the invitation to the backend
            fetch('https://api.elixcent.com/invite_member', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, role }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setInvitationSent(true);
                } else {
                    alert('Failed to send invitation.');
                }
            })
            .catch(error => {
                alert('An error occurred. Please try again.');
                console.error('Error:', error);
            });
        } else {
            alert('Please fill in all fields.');
        }
    };

    if (invitationSent) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                {/* Background overlay */}
                <div className="fixed inset-0 bg-black opacity-50"></div>

                {/* Success Message Content */}
                <div className="relative bg-white p-8 rounded-lg shadow-lg w-96">
                    <FaCheckCircle size={50} color="green" className="mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-center mb-4">Invitation Sent!</h2>
                    <p className="text-center mb-4">The invitation has been successfully sent to the new member.</p>
                    <button className="btn btn-primary w-full" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        );
    }

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

          {/* Name input */}
          <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold">Name</label>
              <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={name}
                  onChange={e => setName(e.target.value)}
              />
          </div>

          {/* Email input */}
          <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold">Email</label>
              <input
                  type="email"
                  className="w-full p-2 border rounded"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
              />
          </div>

          {/* Role selection */}
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

          {/* Invite button */}
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
