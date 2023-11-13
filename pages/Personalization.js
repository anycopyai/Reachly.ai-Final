import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import EmailTemplate from '../components/dashboard/EmailTemplate';

export default function Personalization() {
  return (
    <div style={{ backgroundColor: '#f3f6fc', minHeight: '100vh' }} className="flex">
      <aside className="w-64 fixed top-0 left-0 h-full bg-white shadow-xl z-20">
        <Sidebar />
      </aside>
      <main className="flex-1 flex flex-col md:ml-64"> 
        <DaisyUIMenu />

        <section className="flex-1 p-10 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-start-1 md:col-span-12 bg-white p-8 shadow rounded-md">
            <header className="flex items-center justify-between mb-8">
              <h2 className="text-gray-800 font-bold text-lg">
                Automated Email Crafting
              </h2>
              <button className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded px-4 py-2 transition duration-300">
                View All Templates
              </button>
            </header>

            <article className="mb-10">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                Elevate Your Email Game with AI-Powered Copywriting
              </h1>
              <p className="text-md text-gray-600">
                Craft compelling emails tailored for any situation. Welcome, follow-ups, and more - all automated and personalized.
              </p>
            </article>

            {/* EmailTemplate component instances */}
            <EmailTemplate
              subject="Welcome Aboard,"
              body="Thrilled to have you with us! Experience the power of a thriving community."
              closing="With appreciation,"
              team="The Community Team"
            />

            <EmailTemplate
              subject="Discover Our Resources,"
              body="Dive deep into our resources. Curated especially for you!"
              closing="Best wishes,"
              team="The Resource Team"
            />

            <EmailTemplate
              subject="We'd Love Your Feedback,"
              body="We cherish your thoughts. Let us know how we're doing and if there's anything we can help with."
              closing="Best,"
              team="The Support Team"
            />

            <footer className="flex items-center justify-between border-t pt-6 mt-6 text-gray-600 text-sm">
              <div>Crafted by <span className="font-semibold">QuickQuill®</span></div>
              <a href="https://elixcent.com" className="text-blue-600 hover:underline">https://elixcent.com</a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
