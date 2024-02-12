// pages/writer.js
import React,{useEffect,useState} from 'react';
import QuillEditor from '../components/QuillEditor';
import Sidebar from '../components/sidebar'; // Adjust the path as necessary
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useRouter } from "next/router";

const Writer = () => {
  const [isgenerate,setGenerate] = useState(true);
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/writernext');
  }
  return (
    <div className="flex flex-col lg:flex-row ml-20 h-screen" style={{ display: 'flex' }}>
      <Sidebar />
      <div className="flex-grow m-5">
        <p>Writer</p>
        <div className="flex mt-10">
          <div className="grid grid-cols-12 min-w-full">
            <div className="col-span-5 overflow-y-scroll scrollbar-thin">
              <h1 className='text-sm text-blue-600 border-b-2 border-blue-700	inline-block'>Intro</h1>
              <form method='POST' className="max-w-[550px] mt-10">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Language</label>
                    <select id="language" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                      <option>English</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Project</label>
                    {/* Dynamic the project form settings */}
                    <select id="project" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Console</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">View and modify your projects here </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-xs font-medium float-right text-blue-600">My Projects</label>
                  </div>
                </div>
                <div className="relative">
                  <label className='block mb-2 text-xs font-medium text-gray-900 dark:text-white'>Type of Content</label>
                  <textarea id="content" rows="2" class="block mb-2 p-2.5 w-full text-xs text-slate-400	bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Provide your content"></textarea><span className='absolute top-10 right-0 p-2 text-xs text-slate-400'>0/50</span>
                </div>

                <div className="relative">
                  <label className='block mb-2 text-xs font-medium text-gray-900 dark:text-white'>Topic</label>
                  <textarea id="topic" rows="2" class="block mb-2 p-2.5 w-full text-xs text-slate-400	bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Provide your audience"></textarea><span className='absolute top-10 right-0 p-2 text-xs text-slate-400'>0/50</span>
                </div>

                <div className="relative">
                  <label className='block mb-2 text-xs font-medium text-gray-900 dark:text-white'>Target Audience</label>
                  <textarea id="audience" rows="2" class="block mb-2 p-2.5 w-full text-xs text-slate-400 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Provide your audience"></textarea><span className='absolute top-10 right-0 p-2 text-xs text-slate-400'>0/50</span>
                </div>

                <div className='mb-2'>
                  <label className='block mb-2 text-xs font-medium text-gray-900 dark:text-white'>Tone <IoIosInformationCircleOutline className='inline-block'/> </label>
                  <select id="tone" className="bg-gray-50 border border-gray-300 text-slate-400	text-xs focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                <button className="text-gray bg-white-100 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-xs w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2">Skip Intro</button>

                <button type="button" className="text-gray bg-gray-100 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-xs w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2 float-right" onClick={() => setGenerate(true)}>Generate Intro</button>
              </form>
            </div>
            <div class="col-span-7">
              <h1 className='text-sm text-blue-700 border-b-2 border-blue-700	inline-block ml-4'>Results</h1>

              {(!isgenerate) ? <div className='relative top-56 flex justify-center items-center'>
                <p className='text-xs text-center text-slate-400'>Generate your intro to see results here or Skip intro</p>
              </div> :
               <div className='result mt-10'>

                {/* Content get from AI */}
                <div className='info m-4'>
                  <p className='text-xs text-black-500 font-bold'>Choose an Intro</p><span className='text-xs text-slate-400'>Don't worry,you can change it later</span>
                </div>

                <div className='grid bg-white m-4'>
                  <p className='text-xs text-black-700 p-4 border-2 hover:border-blue-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, quas, deserunt consequatur pariatur tempora possimus atque laboriosam nisi, soluta repudiandae ut. Aspernatur at fugiat cum ut id et consequatur aperiam tempore. Iste consectetur odit temporibus nam omnis dolor tenetur sequi aut, quia ad nemo velit inventore esse dolores officiis mollitia dignissimos. Fugiat exercitationem praesentium eius, soluta provident ea possimus dignissimos impedit eaque illum nesciunt, vel, suscipit odio excepturi esse eligendi minus modi repudiandae magni officia ipsum blanditiis velit saepe. Quasi libero assumenda iusto alias similique minima officiis molestiae, aperiam id illum dignissimos excepturi magni enim perspiciatis delectus obcaecati fuga debitis.</p>
                </div>

                <div className='grid bg-white m-4'>
                  <p className='text-xs text-black-700 p-4 border-2 hover:border-blue-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, quas, deserunt consequatur pariatur tempora possimus atque laboriosam nisi, soluta repudiandae ut. Aspernatur at fugiat cum ut id et consequatur aperiam tempore. Iste consectetur odit temporibus nam omnis dolor tenetur sequi aut, quia ad nemo velit inventore esse dolores officiis mollitia dignissimos. Fugiat exercitationem praesentium eius, soluta provident ea possimus dignissimos impedit eaque illum nesciunt, vel, suscipit odio excepturi esse eligendi minus modi repudiandae magni officia ipsum blanditiis velit saepe. Quasi libero assumenda iusto alias similique minima officiis molestiae, aperiam id illum dignissimos excepturi magni enim perspiciatis delectus obcaecati fuga debitis.</p>
                </div>

                <div className='grid bg-white m-4'>
                  <p className='text-xs text-black-700 p-4 border-2 hover:border-blue-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, quas, deserunt consequatur pariatur tempora possimus atque laboriosam nisi, soluta repudiandae ut. Aspernatur at fugiat cum ut id et consequatur aperiam tempore. Iste consectetur odit temporibus nam omnis dolor tenetur sequi aut, quia ad nemo velit inventore esse dolores officiis mollitia dignissimos. Fugiat exercitationem praesentium eius, soluta provident ea possimus dignissimos impedit eaque illum nesciunt, vel, suscipit odio excepturi esse eligendi minus modi repudiandae magni officia ipsum blanditiis velit saepe. Quasi libero assumenda iusto alias similique minima officiis molestiae, aperiam id illum dignissimos excepturi magni enim perspiciatis delectus obcaecati fuga debitis.</p>
                </div>

                <div className='btnSection m-4 float-right'>
                  <button className='text-black border-2 bg-white-100 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-xs w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2'>Rewrite Intro</button>
                  <button className='text-gray bg-gray-100 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-xs w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2' onClick={() =>handleNavigation()}>Continue to writer</button>
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
