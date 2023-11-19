// ContactTable.js
import React from 'react';

const ContactTable = () => {
    return (
        <div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg bg-gray-100" style={{ backgroundColor: '#f2f2f2' }}>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Company</th>
                            <th className="py-3 px-6">Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-gray-100">
                            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">John Doe</td>
                            <td className="py-4 px-6">johndoe@example.com</td>
                            <td className="py-4 px-6">Example Inc.</td>
                            <td className="py-4 px-6">Manager</td>
                        </tr>
                        {/* Additional rows here */}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center py-4 bg-gray-200" style={{ backgroundColor: '#f2f2f2' }}>
                <span className="text-sm text-gray-700">
                    Showing <span className="font-semibold">1-10</span> of <span className="font-semibold">100</span>
                </span>
                <div className="inline-flex">
                    {/* Pagination links */}
                    <a href="#" className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">Previous</a>
                    <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                    <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">Next</a>
                </div>
            </div>
        </div>
    );
}

export default ContactTable;
