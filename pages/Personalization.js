import React, { useState, useEffect } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import EmailTemplate from '../components/dashboard/EmailTemplate';
import withAuth from '../hoc/withAuth'; // Adjust the import path as needed

function Personalization({ user }) { // user prop is now provided by the HOC
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth > 768;
      setIsDesktop(desktop);
      setSidebarCollapsed(!desktop);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isDesktop) {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  return (
    <div className="flex min-h-screen bg-reachly-bg">
      <aside className={`fixed top-0 left-0 h-full bg-white z-20 border-r transition-width duration-300 ease-in-out ${sidebarCollapsed ? 'w-16' : 'w-64'}`}>
        <Sidebar isCollapsed={sidebarCollapsed} />
      </aside>
      <main className={`flex-1 flex flex-col ${sidebarCollapsed ? 'md:ml-16' : 'md:ml-64'}`}>
        <div className="sticky top-0 bg-white z-30 shadow-md">
          <div className="flex items-center justify-between px-4 py-2">
            {isDesktop && (
              <button onClick={toggleSidebar} className="text-gray-600 hover:text-blue-600 focus:outline-none">
                {/* SVG Icons for collapse/expand */}
              </button>
            )}
            <DaisyUIMenu />
          </div>
        </div>
        <section className="flex-1 p-10 grid grid-cols-1 md:grid-cols-12 gap-6 pt-16">
          <div className="md:col-start-1 md:col-span-12 bg-white p-8 rounded-md shadow-md">
            <EmailTemplate />
          </div>
        </section>
      </main>
    </div>
  );
}

export default withAuth(Personalization); // Wrap Personalization with withAuth HOC
