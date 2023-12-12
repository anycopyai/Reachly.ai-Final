// pages/interview-question.js
import Head from 'next/head';
import Sidebar from '../../components/sidebar';


const InterviewQuestion = () => {
  return (
    <>
      <Head>
        <title>Recruitment Interview Questions</title>
        <meta name="description" content="Recruitment form for fullstack developer position" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col lg:flex-row h-screen bg-gray-50 overflow-hidden scrollbar-thin">
      <Sidebar />

        {/* Form Section */}
        <div className="w-full lg:w-1/4 bg-white p-8 lg:p-12 space-y-6 overflow-auto">
          <h2 className="text-2xl font-light text-gray-600">Recruitment Interview Questions</h2>
          <form className="space-y-4">
            {/* Language Field */}
            <div>
              <label htmlFor="language" className="text-sm font-semibold text-gray-700">Language</label>
              <select id="language" name="language" className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>English</option>
                {/* Additional language options can be added here */}
              </select>
            </div>
            
            {/* Writing For Field */}
            <div>
              <label htmlFor="writingFor" className="text-sm font-semibold text-gray-700">Writing for</label>
              <input id="writingFor" name="writingFor" type="text" required className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., website design" />
            </div>

            {/* Role Field */}
            <div>
              <label htmlFor="role" className="text-sm font-semibold text-gray-700">Role</label>
              <input id="role" name="role" type="text" required className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., Fullstack Developer" />
            </div>

            {/* Experience Field */}
            <div>
              <label htmlFor="experience" className="text-sm font-semibold text-gray-700">Experience</label>
              <input id="experience" name="experience" type="text" required className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., React, Laravel, AWS" />
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in duration-200">
                Write For Me
              </button>
            </div>
          </form>
        </div>

        {/* Result Section */}
        <div className="flex-grow p-8 lg:p-12 space-y-6 overflow-auto">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Generated Copy</h3>
            <div className="mt-4 text-gray-600">
              Copy generated will appear here...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewQuestion;
