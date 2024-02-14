

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar'; // Adjust the path as necessary
import { IoIosSearch } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdGrading } from "react-icons/md";
import { MdOutlineSpellcheck } from "react-icons/md";
import QuillEditor from '../components/QuillEditor';
import { FaBars } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { MdShowChart } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiPencilFill } from "react-icons/ri";
import { MdOutlineFullscreen } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Expand from '../pages/WriterExpand'; // Adjust the path as necessary

const WriterTemplate = () => {
    const [showresult, setshowresult] = useState(false);
    const [showtemp, settempresult] = useState(false);
    const [showExpand,setExpand] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row md:ml-20 h-screen">
            <Sidebar />
            <div className="flex-grow m-5">
                <div className='flex flex-grow items-center gap-5'>
                    <FaBars className="text-sm md:text-2xl md:hidden" />
                    <p className='text-sm md:text-2xl'>Writer</p>
                    <div className='flex flex-row ml-auto gap-2'>
                        <button className="hidden text-sm text-black border-1 border-gray-300 bg-white-100 p-2 flex items-center gap-2 md:flex"><MdShowChart /> <span>5 Credits Limit </span></button>
                        <button className="text-sm text-black border-1 border-gray-300 bg-white-100 p-2 md:border-blue-300  md:bg-blue-700 md:text-white flex items-center gap-2"><FiPlus /> <span> New Document </span></button>

                    </div>

                </div>
                {/* <p className='text-sm md:text-2xl'>Writer</p> */}
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row mt-10 items-center gap-2'>
                        <p className='text-sm md:text-xl text-justify'>Project name - 01/02/2024 - 10.00 am</p>
                        <span className='text-sm md:text-sm text-justify text-slate-300'><RiPencilFill className='text-xl' /></span>
                        <div className='flex flex-row items-center gap-3'>
                            <AiOutlineCheck className='text-xl text-blue-600' />
                            <AiOutlineClose className='text-xl text-blue-600' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <p className='text-sm text-slate-500'>Changes Saved</p>
                    </div>

                </div>

                <div className="flex md:mt-10">
                    <div className="grid grid-cols-12 min-w-full">
                        <div className="col-span-12 overflow-hidden md:col-span-5 lg:col-span-5 md:overflow-y-scroll md:scrollbar-thin">
                            <div className='w-11/12'>
                                <div className="text-sm font-medium text-center text-black-600 border-b border-gray-200">
                                    <ul className="flex flex-row md:text-sm items-center gap-2 -mb-px">
                                        <li className="me-2">
                                            <a href="javascript:void(0)" onClick={() => setshowresult(false)} class={`flex flex-row items-center gap-2 p-4 ${!showresult && `text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`} `}><IoIosArrowRoundBack className='text-2xl' /> Template</a>
                                        </li>

                                        <li className="me-2 md:hidden">
                                            <a href="javascript:void(0)" onClick={() => setshowresult(true)} className={`inline-block p-4 ${showresult && `text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`}`}>Results</a>
                                        </li>

                                        <li className="hidden me-2 md:block">
                                            <a href="javascript:void(0)" onClick={() => setExpand(true)} className="inline-block p-4 text-black-600">Expand</a>
                                        </li>
                                        <li className="hidden me-2 md:block">
                                            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Remix</a>
                                        </li>
                                        <li className="hidden me-2 md:block">
                                            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"> Next sentence</a>
                                        </li>

                                    </ul>
                                </div>
                                {/* Template Section */}
                                <div className={`${!showresult ? `flex flex-col m-5` : `hidden`}`}>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selected Template</label>
                                    <select id="tone" className="border border-gray-300 text-black-700 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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

                                {/* import Expand Section */} 
                                {(showExpand) && <div>
                                <Expand/>
                                </div>}

                                 {/* import Remix Section */} 


                                  {/* import Nextsentence Section */} 

                                {/* Prompt Section */}
                                <div className="flex flex-col text-sm font-medium text-center text-black-600 border-b border-gray-200">
                                    <ul className={`${!showresult ? `flex flex-row md:text-sm items-center gap-2 -mb-px` : `hidden`}`}>
                                        <li className="me-2">
                                            <a href="javascript:void(0)" onClick={() => settempresult(false)} class={`flex flex-row items-center gap-2 p-4 ${!showtemp && `text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`} `}>Prompt</a>
                                        </li>

                                        <li className="me-2">
                                            <a href="javascript:void(0)" onClick={() => settempresult(true)} className={`inline-block p-4 ${showtemp && `text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`}`}>Results</a>
                                        </li>

                                    </ul>
                                </div>

                                {(!showtemp) &&
                                    <div className='flex' id="prompt">
                                        <form method='POST' className={` ${showresult ? `hidden md:block m-4 ` : `basis-full m-4`}`}>
                                            {/* Form Start */}
                                            <div className="flex flex-row justify gap-2 mt-5">
                                                <div className='basis-1/2 flex flex-col'>
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                                                    <select id="language" className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        <option>English</option>
                                                    </select>
                                                </div>
                                                <div className='basis-1/2 flex flex-col'>
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project</label>
                                                    {/* Dynamic the project form settings */}
                                                    <select id="project" className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        <option>Console</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="relative mt-5">
                                                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Topic</label>
                                                <input type='text' className='block mb-2 text-sm text-slate-300 border border-gray-300 w-full h-12 placeholder:text-slate-300' placeholder='provide your audience' /><span className='absolute top-12 right-0 p-2 text-sm text-slate-300'>0/50</span>
                                                {/* <textarea id="content" rows="2" className="block mb-2 p-2.5 w-full text-sm text-slate-400	 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:text-sm dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="provide your content"></textarea><span className='absolute top-14 right-0 p-2 text-sm text-slate-300'>0/50</span> */}
                                            </div>

                                            <div className='flex flex-row justify-between mt-5'>
                                                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Safety Guideliness <IoIosInformationCircleOutline className='inline-block text-xl text-slate-400' /> </label>

                                            </div>
                                            <div className='flex justify-center mt-5'>
                                                <button type="button" className="basis-full text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2">Generate Template</button>

                                            </div>

                                        </form>
                                    </div>
                                }
                                {/* Results Section */}
                                {(showtemp) &&
                                    <div className={`${!showresult ? `flex flex-col mt-5 mb-10` : `hidden`}`}>
                                        <p className='text-sm text-slate-400 ml-4'>Select any of the below results to apply on your writer content</p>
                                        <div className='bg-white m-4'>
                                            <p className='text-sm text-black-600 p-4 border-1 border-white shadow hover:border-blue-500 text-wrap'>fitness journey, FitLife, all-in-one fitness companion, beginner, seasoned pro, app, guide, personalized workout plans, track progress, motivated community</p>
                                        </div>
                                        <div className='bg-white m-4'>
                                            <p className='text-sm text-black-600 p-4 border-1 border-white shadow hover:border-blue-500 text-wrap'>fitness journey, FitLife, all-in-one fitness companion, beginner, seasoned pro, app, guide, personalized workout plans, track progress, motivated community</p>
                                        </div>
                                        <div className='bg-white m-4'>
                                            <p className='text-sm text-black-600 p-4 border-1 border-white shadow hover:border-blue-500 text-wrap'>fitness journey, FitLife, all-in-one fitness companion, beginner, seasoned pro, app, guide, personalized workout plans, track progress, motivated community</p>
                                        </div>
                                        <div className='bg-white m-4'>
                                            <p className='text-sm text-black-600 p-4 border-1 hover:border-blue-500 text-wrap'>fitness journey, FitLife, all-in-one fitness companion, beginner, seasoned pro, app, guide, personalized workout plans, track progress, motivated community</p>
                                        </div>

                                    </div>
                                }
                            </div>
                        </div>
                        <div class="grid col-span-12 md:col-span-7 md:block">
                            <div className='hidden flex flex-row justify-between md:flex'>
                                <div>
                                    <p className='text-sm text-blue-700 border-b-2 border-blue-700 inline ml-4'>Results</p>
                                </div>
                                <div className='flex flex-row'>
                                    <button className='text-black border-2 bg-white-100 text-sm text-center p-2 flex flex-row items-center gap-2 m-2'> <MdOutlineFullscreen /> <span>Full Screen</span></button>
                                </div>
                            </div>
                            <div className={`${!showresult ? `hidden md:block` : ''}`}>
                                <QuillEditor />
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </div>)
}

export default WriterTemplate;