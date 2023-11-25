import React, { useState } from 'react';

function AddContactModal({ isOpen, onClose, onAddContact }) {
    const [newContact, setNewContact] = useState({ name: '', email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddContact(newContact);
        setNewContact({ name: '', email: '' });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="input input-bordered w-full mb-2"
                        value={newContact.name}
                        onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="input input-bordered w-full mb-2"
                        value={newContact.email}
                        onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                    />
                    <div className="modal-action">
                        <button type="submit" className="btn btn-primary">Add</button>
                        <button type="button" className="btn" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddContactModal;
