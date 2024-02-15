import React from "react";
import Link from "next/link";
import { FiFileText } from "react-icons/fi";

const WriterComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {/* Example card */}
      <div className="bg-white p-6 rounded-lg shadow-sm h-40 flex flex-col justify-between border-2 border-transparent hover:border-blue-600">
        <Link href="/writer" passHref>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
              <FiFileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Writer</h3>
              <p className="text-sm text-gray-600 mt-1">
                Compose blog posts, emails, and poems effortlessly.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm h-40 flex flex-col justify-between border-2 border-transparent hover:border-blue-600">
        <Link href="/writer" passHref>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
              <FiFileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Writer</h3>
              <p className="text-sm text-gray-600 mt-1">
                Compose blog posts, emails, and poems effortlessly.
              </p>
            </div>
          </div>
        </Link>
      </div>{" "}
      <div className="bg-white p-6 rounded-lg shadow-sm h-40 flex flex-col justify-between border-2 border-transparent hover:border-blue-600">
        <Link href="/writer" passHref>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
              <FiFileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Writer</h3>
              <p className="text-sm text-gray-600 mt-1">
                Compose blog posts, emails, and poems effortlessly.
              </p>
            </div>
          </div>
        </Link>
      </div>
      {/* Add more cards as needed */}
    </div>
  );
};

export default WriterComponent;
