import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import EmailTemplate from '../components/dashboard/EmailTemplate'; // Assume this is a new component to encapsulate email templates

export default function Personalization() {
  return (
    <div className="flex min-h-screen bg-reachly-bg">
      <aside className="fixed top-0 left-0 h-full bg-reachly-bg z-20">
        <Sidebar />
      </aside>
      <main className="flex-1 flex flex-col ml-64"> 
        <DaisyUIMenu />

        <section className="flex-1 p-10 grid grid-cols-12 gap-4">
          <div className="col-start-1 col-span-12 bg-white p-12 shadow-md rounded-md">
            <header className="flex items-center justify-between mb-6">
              <h2 className="text-blue-500 font-semibold text-sm tracking-wide uppercase">
                Automated Email Crafting
              </h2>
              <button className="text-white bg-blue-500 border rounded px-3 py-1 hover:bg-blue-600 transition duration-300">
                View All Templates
              </button>
            </header>

            <article className="mb-8">
              <h1 className="text-2xl font-bold mb-4 leading-snug">
                Elevate Your Email Game with AI-Powered Copywriting
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Craft compelling emails tailored for any situation. Welcome, follow-ups, and more - all automated and personalized.
              </p>
            </article>

            {/* Assuming EmailTemplate is a new component designed to encapsulate the email template UI */}
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

            <footer className="flex items-center justify-between border-t pt-6 mt-6">
              <div className="text-gray-600 text-sm">Crafted by <span className="font-semibold">QuickQuill®</span></div>
              <a href="https://openai.com" className="text-blue-500 hover:underline">https://elixcent.com</a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
