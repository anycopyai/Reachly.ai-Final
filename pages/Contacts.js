// Contacts.js
import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import withAuth from '../hoc/withAuth';
import { Button } from '@nextui-org/react';
import { AiOutlineFileExcel } from 'react-icons/ai';
import Papa from 'papaparse';
import { useSidebarContext } from '../contexts/SidebarContext'; // Import useSidebarContext from its file



const ContactsList = ({ contacts, onEdit, onRemove, onAddToSequence, onVerify, onSelect }) => {
  const { isExpanded } = useSidebarContext(); // Use the isExpanded state from the context

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className={`flex flex-col flex-1 ${isExpanded ? 'ml-64' : 'ml-16'}`}>
        <header className="p-4 shadow bg-white">
          <h1 className="text-xl font-semibold">Contacts</h1>
        </header>

        <main className="flex-1 overflow-y-auto p-4">
          <div className="bg-white rounded-lg shadow overflow-hidden max-w-4xl mx-auto my-8">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Contacts</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-600">Contact Name</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-600">Email</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(contacts) && contacts.length > 0 ? (
                    contacts.map((contact, index) => (
                      <tr key={index} className="border-b last:border-none hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium">{contact.name}</td>
                        <td className="px-6 py-4">{contact.email}</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button onClick={() => onEdit(contact)} className="text-blue-500 hover:text-blue-700">Edit</button>
                            <button onClick={() => onRemove(contact)} className="text-red-500 hover:text-red-700">Remove</button>
                            <button onClick={() => onAddToSequence(contact)} className="text-green-500 hover:text-green-700">Add to Sequence</button>
                            <button onClick={() => onVerify(contact)} className="text-yellow-500 hover:text-yellow-700">Verify</button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center py-4 text-gray-500">No contacts available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContactsList;
