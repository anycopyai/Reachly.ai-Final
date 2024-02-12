// pages/writer.js
import React from 'react';
import QuillEditor from '../components/QuillEditor';
import Sidebar from '../components/sidebar'; // Adjust the path as necessary
import { useRouter } from "next/router";

const Writer = () => {
  return (
    <div className="flex flex-col lg:flex-row ml-20 h-screen" style={{ display: 'flex' }}>
      <Sidebar />
      <div className="flex-grow m-5">
        <p>Writer</p>
        <div className="flex mt-10">
          <div className="grid grid-cols-12 min-w-full">
            <div className="col-span-5 overflow-y-scroll scrollbar-thin">
              <h1 className='text-blue-600 border-b-2 border-blue-700	inline-block'>Intro</h1>
              <form className="max-w-[550px] mt-10">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label for="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                    <select id="language" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                      <option>English</option>
                    </select>
                  </div>
                  <div>
                    <label for="project" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project</label>
                    {/* Dynamic the project form settings */}
                    <select id="project" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Console</option>
                    </select>
                  </div>
                  <div>
                    <label for="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">View and modify your projects here </label>
                  </div>
                  <div>
                    <label for="projectsview" className="block mb-2 text-sm font-medium float-right text-blue-600">My Projects</label>
                  </div>
                </div>
                <div className="relative">
                  <label for="content" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Type of Content</label>
                  <textarea id="content" rows="2" class="block mb-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Provide your content"></textarea><span className='absolute top-14 right-0 p-2 text-sm text-gray-500'>0/50</span>
                </div>

                <div className="relative">
                  <label for="topic" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Topic</label>
                  <textarea id="topic" rows="2" class="block mb-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Provide your audience"></textarea><span className='absolute top-14 right-0 p-2 text-sm text-gray-500'>0/50</span>
                </div>

                <div className="relative">
                  <label for="audience" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Target Audience</label>
                  <textarea id="audience" rows="2" class="block mb-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Provide your audience"></textarea><span className='absolute top-14 right-0 p-2 text-sm text-gray-500'>0/50</span>
                </div>

                <div className='mb-2'>
                  <label for="tone" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Tone</label>
                  <select id="tone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Adventurous</option>
                      <option>Analytical</option>
                      <option>Appreciative</option>
                      <option>Assertive</option>
                      <option>Awestruck</option>
                      <option>Bold</option>
                      <option>Candid</option>
                      <option>Casual</option>
                      <option>Cautionary</option>
                      <option>Compassionate</option>
                      <option>Confident</option>
                      <option>Conversational</option>
                      <option>Convincing</option>
                      <option>Cooperative</option>
                      <option>Critical</option>
                      <option>Curious</option>
                      <option>Dramatic</option>
                      <option>Empatic</option>
                      <option>Encouraging</option>
                      <option>Enthusiastic</option>
                      <option>Excited</option>
                      <option>Earnest</option>
                      <option>Formal</option>
                      <option>Friendly</option>
                      <option>Funny</option>
                      <option>Grumpy</option>
                      <option>Humble</option>
                      <option>Humorous</option>
                      <option>Informal</option>
                      <option>Informative</option>
                      <option>Inspirational</option>
                      <option>Joyful</option>
                      <option>Luxurious</option>
                      <option>Motivating</option>
                      <option>Neutral</option>
                      <option>Optimistic</option>
                      <option>Passionate</option>
                      <option>Professional</option>``
                      <option>Relaxed</option>
                      <option>Sarcastic</option>
                      <option>Secretive</option>
                      <option>Surprised</option>
                      <option>Thoughtful</option>
                      <option>Urgent</option>
                      <option>Witty</option>
                      <option>Worried</option>
                    </select>

                </div>
                <button type="submit" className="text-gray bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2">Skip Intro</button>

                <button type="submit" className="text-gray bg-gray-100 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2 float-right">Generate Intro</button>
              </form>
            </div>
            <div class="col-span-7">
              <h1 className='text-blue-700 border-b-2 border-blue-700	inline-block ml-4'>Results</h1>

            </div>
          </div>
        </div>
      </div>



      {/* <div style={{ flex: 1, padding: '20px' }}>
        <QuillEditor />
      </div> */}
    </div>
  );
};

export default Writer;
