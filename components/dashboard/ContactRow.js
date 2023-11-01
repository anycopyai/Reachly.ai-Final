import React from 'react';

function ContactRow({ contact, onView }) {
  return (
    <tr className="hover:bg-gray-100 px-4 py-2">
      <th className="px-4">
        <label className="flex justify-center">
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
      </th>
      <td className="px-4">
        <div className="font-bold">{contact.name}</div>
        <div className="text-sm text-gray-600">{contact.company}</div>
      </td>
      <td className="text-gray-800 px-4">{contact.email}</td>
      <td className="text-gray-800 px-4">{contact.phone}</td>
      <td className="text-gray-800 px-4">{contact.website}</td>
      <td className="text-gray-800 px-4">{contact.job}</td>
      <td className="text-gray-800 px-4">{contact.favoriteColor}</td>
      <th className="px-4">
        <button className="btn btn-circle btn-outline" onClick={() => onView(contact)}>
          <i className="fas fa-eye"></i> {/* Assuming you use Font Awesome or similar for icons */}
        </button>
      </th>
    </tr>
  );
}

export default ContactRow;
