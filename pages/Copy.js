import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';

export default function AutomatedEmail() {
  return (
    <div className="flex flex-col min-h-screen bg-reachly-bg">
      <div className="fixed top-0 left-0 right-0 z-30">
        <DaisyUIMenu />
      </div>
      <div className="flex mt-16 min-h-screen">  {/* Adjust 16 to match the height of your nav bar */}
        <div className="fixed top-16 left-0 h-full bg-reachly-bg z-20 w-64"> {/* Adjust 16 to match the height of your nav bar and w-64 to match the width of your sidebar */}
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col ml-64">

        {/* Start of Automated Email Section */}
        <div className="flex-1 p-10 grid grid-cols-12 gap-4">
          <div className="col-start-1 col-span-12 bg-white p-12 shadow-md rounded-md">
            <div className="flex items-center justify-between mb-6">
              <div className="text-blue-500 font-semibold text-sm tracking-wide uppercase">
                Automated Email Crafting
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-gray-600 font-medium">En</div>
                <button className="text-white bg-blue-500 border rounded px-3 py-1 hover:bg-blue-600 transition duration-300">
                  View All Templates
                </button>
              </div>
            </div>

            {/* Main Email Content */}
            <div className="mb-8">
              <h1 className="text-2xl font-extrabold mb-4 leading-snug">Elevate Your Email Game with AI-Powered Copywriting</h1>
              <p className="text-lg text-gray-600 leading-relaxed">Craft compelling emails tailored for any situation. Welcome, follow-ups, and more - all automated and personalized.</p>
            </div>

            {/* Main Email Template */}
            <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-xs">
              <p className="text-gray-800 mb-4"><span className="font-semibold text-lg">Subject:</span> Welcome Aboard, </p>
              <p className="text-gray-600 leading-relaxed mb-6">Dear</p>
              <p className="text-gray-600 leading-relaxed mb-6">Thrilled to have you with us! Experience the power of a thriving community.</p>
              <p className="text-gray-600 leading-relaxed">With appreciation,<br />The Community Team</p>
            </div>

            {/* First Follow-Up */}
            <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-xs">
              <p className="text-gray-800 mb-4"><span className="font-semibold text-lg">Subject:</span> Discover Our Resources, </p>
              <p className="text-gray-600 leading-relaxed mb-6">Hello </p>
              <p className="text-gray-600 leading-relaxed mb-6">Dive deep into our resources. Curated especially for you!</p>
              <p className="text-gray-600 leading-relaxed">Best wishes,<br />The Resource Team</p>
            </div>

            {/* Second Follow-Up */}
            <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-xs">
              <p className="text-gray-800 mb-4"><span className="font-semibold text-lg">Subject:</span> We'd Love Your Feedback, </p>
              <p className="text-gray-600 leading-relaxed mb-6">Hi </p>
              <p className="text-gray-600 leading-relaxed mb-6">We cherish your thoughts. Let us know how we're doing and if there's anything we can help with.</p>
              <p className="text-gray-600 leading-relaxed">Best,<br />The Support Team</p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t pt-6 mt-6">
              <div className="flex items-center space-x-4">
                <div className="text-gray-600 text-sm">Crafted by</div>
                <div className="font-semibold text-lg">ChatGPT®</div>
              </div>
              <div>
                <a href="https://openai.com" className="text-blue-500 hover:underline">https://openai.com</a>
              </div>
            </div>

          </div>
        </div>
        {/* End of Automated Email Section */}
      </div>
    </div>
  );
}
