import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';

export default function AutomatedEmail() {
  return (
    <div className="flex min-h-screen bg-reachly-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DaisyUIMenu />

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
            {/* More of your email crafting content here */}
          </div>

        </div>
        {/* End of Automated Email Section */}

      </div>
    </div>
  );
}
