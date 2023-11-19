import React from 'react';

const ContactTable = () => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-gray-600">
          <thead className="text-xs uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6 rounded-tl-lg">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Company
              </th>
              <th scope="col" className="py-3 px-6 rounded-tr-lg">
                Position
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                John Doe
              </th>
              <td className="py-4 px-6">
                johndoe@example.com
              </td>
              <td className="py-4 px-6">
                Example Inc.
              </td>
              <td className="py-4 px-6">
                Manager
              </td>
            </tr>
            {/* Additional rows here */}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between py-3">
        <span className="text-sm text-gray-600">
          Showing <span className="font-semibold">1-10</span> of <span className="font-semibold">100</span>
        </span>
        <div className="inline-flex">
          <button className="py-2 px-3 rounded-l-lg text-sm font-medium text-gray-600 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
            Previous
          </button>
          {/* Add active and hover styles for the page numbers as needed */}
          <button className="py-2 px-3 text-sm font-medium text-gray-600 bg-white border-t border-b border-gray-200 hover:shadow-md transition-shadow duration-200 ease-in-out">
            1
          </button>
          <button className="py-2 px-3 rounded-r-lg text-sm font-medium text-gray-600 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactTable;
