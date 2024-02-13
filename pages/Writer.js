// pages/writer.js
import React, { useEffect, useState } from 'react';
import QuillEditor from '../components/QuillEditor';
import Sidebar from '../components/sidebar'; // Adjust the path as necessary
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";

const Writer = () => {
  const [isgenerate, setGenerate] = useState(true);
  const [showresult, setshowresult] = useState(false);
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/Writerlanding');
  }
  return (
    <div className="flex flex-col lg:flex-row md:ml-20 h-screen">
      <Sidebar />
      <div className="flex-grow m-5">
        <div className='flex flex-grow items-center gap-5'>
          <FaBars className="text-sm md:text-2xl md:hidden" />
          <p className='text-sm md:text-2xl'>Writer</p>
          <div className='flex ml-auto'>
            <button className="text-sm text-black border-1 border-gray-300 bg-white-100 md:hidden p-2 flex items-center gap-2"><FiPlus /> <span> New Document </span></button>

          </div>
        </div>

        <div className='flex gap-5 border-b-2 w-full mt-10 md:hidden'>
          <a  href="javascript:void(0)" onClick={() => setshowresult(false)}><h1 className={`text-sm text-black font-medium p-2 ${!showresult ? `text-navblue border-b-2 border-navblue inline-block`:``}`}>Intro</h1></a>
          <a href="javascript:void(0)" onClick={() => setshowresult(true)}><h1 className={`text-sm text-black font-medium p-2 ${showresult ? `text-navblue border-b-2 border-navblue inline-block`:``}`}>Results</h1></a>
        </div>

        <div className="flex md:mt-10">
          <div className="grid grid-cols-12 min-w-full">
            <div className={` ${showresult ? `hidden col-span-12 md:col-span-5 md:block overflow-y-scroll scrollbar-thin` : `col-span-12 overflow-hidden md:col-span-5 md:overflow-y-scroll md:scrollbar-thin`}`} id="intro">
              <h1 className='hidden md:inline-block text-sm text-navblue font-medium border-b-2 border-navblue'>Intro</h1>
              <form method='POST' className="w-11/12 mt-10">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                    <select id="language" className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                      <option>English</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project</label>
                    {/* Dynamic the project form settings */}
                    <select id="project" className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Console</option>
                    </select>
                  </div>
                 
                  
                </div>
                <div className='flex flex-row justify-between gap-5 mt-2 mb-4'>
                    <p className="mb-2 text-sm font-medium text-gray-900">View and modify your projects here </p>
                    <p className="mb-2 text-sm font-medium text-blue-600">My Projects</p>

                  </div>
                <div className="relative">
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Type of Content</label>
                  <input type='text' className='block mb-2 text-sm text-slate-300 border border-gray-300 w-full h-12 placeholder:text-slate-300' placeholder='provide your content' /><span className='absolute top-12 right-0 p-2 text-sm text-slate-300'>0/50</span>
                  {/* <textarea id="content" rows="2" className="block mb-2 p-2.5 w-full text-sm text-slate-400	 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:text-sm dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="provide your content"></textarea><span className='absolute top-14 right-0 p-2 text-sm text-slate-300'>0/50</span> */}
                </div>

                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Topic</label>
                  <input
                    type="text"
                    className="block mb-2 text-sm text-slate-300 border border-gray-300 w-full h-12 placeholder-slate-300 placeholder-top"
                    placeholder="provide your audience"
                  />
                  <span className="absolute top-12 right-0 p-2 text-sm text-slate-300">0/50</span>
                </div>

                <div className="relative">
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Target Audience</label>
                  <input type='text' className='block mb-2 text-sm text-slate-300 border border-gray-300 w-full h-12 placeholder:text-slate-300' placeholder='provide your audience' /><span className='absolute top-12 right-0 p-2 text-sm text-slate-300'>0/50</span>
                </div>

                <div className='mb-2'>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Tone <IoIosInformationCircleOutline className='inline-block text-slate-400' /> </label>
                  <select id="tone" className="border border-gray-300 text-slate-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                <button className="text-gray bg-white-100 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2">Skip Intro</button>

                <button type="button" className="text-gray bg-gray-100 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2 float-right" onClick={() => setGenerate(true)}>Generate Intro</button>
              </form>
            </div>
            <div className={` ${!showresult ? `hidden col-span-12 md:col-span-7 md:block` : `col-span-12 md:col-span-7 md:block`}`}  id="results">
              <h1 className='hidden text-sm text-navblue font-medium border-b-2 border-navblue inline-block ml-4 md:inline-block'>Results</h1>

              {(!isgenerate) ? <div className='relative top-56 flex justify-center items-center'>
                <p className='text-sm text-center text-slate-400'>Generate your intro to see results here or Skip intro</p>
              </div> :
                <div className='result mt-10'>

                  {/* Content get from AI */}
                  <div className='info m-4'>
                    <p className='text-sm text-black-500 font-bold'>Choose an Intro</p><span className='text-xs text-slate-400'>Don't worry,you can change it later</span>
                  </div>

                  <div className='grid bg-white m-4'>
                    <p className='text-sm text-black-700 p-4 border-1 hover:border-blue-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, quas, deserunt consequatur pariatur tempora possimus atque laboriosam nisi, soluta repudiandae ut. Aspernatur at fugiat cum ut id et consequatur aperiam tempore. Iste consectetur odit temporibus nam omnis dolor tenetur sequi aut, quia ad nemo velit inventore esse dolores officiis mollitia dignissimos. Fugiat exercitationem praesentium eius, soluta provident ea possimus dignissimos impedit eaque illum nesciunt, vel, suscipit odio excepturi esse eligendi minus modi repudiandae magni officia ipsum blanditiis velit saepe. Quasi libero assumenda iusto alias similique minima officiis molestiae, aperiam id illum dignissimos excepturi magni enim perspiciatis delectus obcaecati fuga debitis.</p>
                  </div>

                  <div className='grid bg-white m-4'>
                    <p className='text-sm text-black-700 p-4 border-1 hover:border-blue-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, quas, deserunt consequatur pariatur tempora possimus atque laboriosam nisi, soluta repudiandae ut. Aspernatur at fugiat cum ut id et consequatur aperiam tempore. Iste consectetur odit temporibus nam omnis dolor tenetur sequi aut, quia ad nemo velit inventore esse dolores officiis mollitia dignissimos. Fugiat exercitationem praesentium eius, soluta provident ea possimus dignissimos impedit eaque illum nesciunt, vel, suscipit odio excepturi esse eligendi minus modi repudiandae magni officia ipsum blanditiis velit saepe. Quasi libero assumenda iusto alias similique minima officiis molestiae, aperiam id illum dignissimos excepturi magni enim perspiciatis delectus obcaecati fuga debitis.</p>
                  </div>

                  <div className='grid bg-white m-4'>
                    <p className='text-sm text-black-700 p-4 border-1 hover:border-blue-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, quas, deserunt consequatur pariatur tempora possimus atque laboriosam nisi, soluta repudiandae ut. Aspernatur at fugiat cum ut id et consequatur aperiam tempore. Iste consectetur odit temporibus nam omnis dolor tenetur sequi aut, quia ad nemo velit inventore esse dolores officiis mollitia dignissimos. Fugiat exercitationem praesentium eius, soluta provident ea possimus dignissimos impedit eaque illum nesciunt, vel, suscipit odio excepturi esse eligendi minus modi repudiandae magni officia ipsum blanditiis velit saepe. Quasi libero assumenda iusto alias similique minima officiis molestiae, aperiam id illum dignissimos excepturi magni enim perspiciatis delectus obcaecati fuga debitis.</p>
                  </div>

                  <div className='flex flex-row m-4 gap-5 justify-between md:float-right'>
                  <button className='text-black border-2 bg-white-100 hover:bg-gray-100 focus:outline-none font-medium text-sm px-5 py-2.5 text-center'>Rewrite Intro</button>
                  <button className='text-gray bg-gray-100 hover:bg-blue-700 hover:text-white focus:outline-none font-medium text-sm px-5 py-2.5 text-center' onClick={() => handleNavigation()}>Continue to writer</button>
                  </div>

                </div>}



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
