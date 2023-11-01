import React, { useState } from 'react';

function AddContactPopup({ onAdd, onClose }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = () => {
        const newContact = {
            id: Date.now(), // For the sake of this example. Ideally, this should be unique or fetched from the backend.
            name,
            email,
            phone
        };
        onAdd(newContact);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-black">
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <h2 className="mb-4">Add Contact</h2>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    className="input input-bordered mb-3 w-full"
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    className="input input-bordered mb-3 w-full"
                />
                <input 
                    type="text" 
                    placeholder="Phone" 
                    value={phone} 
                    onChange={e => setPhone(e.target.value)}
                    className="input input-bordered mb-3 w-full"
                />
                <div className="flex justify-end">
                    <button onClick={handleSubmit} className="btn btn-success mr-2">Add</button>
                    <button onClick={onClose} className="btn btn-error">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default AddContactPopup;
