import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase'; // Import your Firestore configuration
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import Papa from 'papaparse';

const ContactPage = () => {
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' });
    const [isLoading, setIsLoading] = useState(true); // State to track loading status

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        setIsLoading(true); // Start loading
        try {
            const querySnapshot = await getDocs(collection(db, "contacts"));
            setContacts(querySnapshot.docs.map(doc => doc.data()));
        } catch (error) {
            console.error("Error fetching documents: ", error);
        }
        setIsLoading(false); // Finish loading
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "contacts"), newContact);
            setNewContact({ name: '', email: '', phone: '' });
            fetchContacts();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const handleCsvUpload = (e) => {
        Papa.parse(e.target.files[0], {
            complete: async (result) => {
                for (let row of result.data) {
                    // Assuming CSV columns are name, email, phone
                    await addDoc(collection(db, "contacts"), {
                        name: row[0],
                        email: row[1],
                        phone: row[2]
                    });
                }
                fetchContacts();
            },
            header: true
        });
    };

    return (
        <div className="p-6">
            <div className="container mx-auto">
                <h1 className="text-xl font-semibold text-gray-700 mb-6">Contact Page</h1>
                
                {/* Add Contact Form */}
                <div className="mb-6">
                    <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
                        <input type="text" value={newContact.name} onChange={(e) => setNewContact({...newContact, name: e.target.value})} placeholder="Name" className="p-2 border border-gray-300 rounded-md" />
                        <input type="email" value={newContact.email} onChange={(e) => setNewContact({...newContact, email: e.target.value})} placeholder="Email" className="p-2 border border-gray-300 rounded-md" />
                        <input type="tel" value={newContact.phone} onChange={(e) => setNewContact({...newContact, phone: e.target.value})} placeholder="Phone" className="p-2 border border-gray-300 rounded-md" />
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Add Contact</button>
                    </form>
                </div>

                {/* CSV Upload */}
                <div className="mb-6">
                    <label htmlFor="csvInput" className="block text-gray-700 mb-2">Upload Contacts via CSV:</label>
                    <input type="file" id="csvInput" accept=".csv" onChange={handleCsvUpload} className="block w-full text-sm text-gray-700 p-2 border border-gray-300 rounded-md" />
                </div>

                {/* Display Contacts */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Contacts List</h2>
                    {isLoading ? (
                        <div>Loading contacts...</div> // Customize this loading indicator as needed
                    ) : (
                        <ul className="list-disc pl-5">
                            {contacts.map((contact, index) => (
                                <li key={index} className="mb-2">{contact.name} - {contact.email} - {contact.phone}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;