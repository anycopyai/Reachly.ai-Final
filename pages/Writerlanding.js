

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


const Writerlanding = () => {

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
                <p className='text-sm md:text-xl text-justify mt-10'>Project name - 01/02/2024 - 10.00 am</p>

                <div className="flex md:mt-10">
                    <div className="grid grid-cols-12 min-w-full">
                        <div className="col-span-12 overflow-hidden md:col-span-5 lg:col-span-5 md:overflow-y-scroll md:scrollbar-thin">
                            <div className='w-11/12'>
                                <div className="text-sm font-medium text-center text-black-600 border-b border-gray-200">
                                    <ul className="flex flex-row md:text-sm items-center gap-2 -mb-px">
                                        <li className="me-2">
                                        <a href="#" class="flex flex-row items-center gap-2 p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page"><IoIosArrowRoundBack className='text-2xl'/> Template</a>
                                        </li>

                                        <li className="me-2 md:hidden">
                                            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Results</a>
                                        </li>

                                        <li className="hidden me-2 md:block">
                                            <a href="#" className="inline-block p-4 text-black-600">Expand</a>
                                        </li>
                                        <li className="hidden me-2 md:block">
                                            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Remix</a>
                                        </li>
                                        <li className="hidden me-2 md:block">
                                            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"> Next Sentence</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <form method='POST' className='m-4'>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose a template to continue writing</label>
                                        <div className='flex'>
                                            <input type="text" id="input-group-1" class="border border-gray-300 text-gray-900 text-sm w-full" placeholder="input search text" />
                                            <span className='inline-flex items-center px-3 text-sm text-gray-900 border-2 border-l-0'><IoIosSearch /></span>
                                        </div>

                                    </div>

                                    <div className='flex flex-col mt-10'>
                                        <h6 className='text-sm text-black-500 font-light mb-2'>Contents</h6>
                                        <div className='flex flex-row border-2 rounded-md p-2 mb-2'>
                                            <span className='text-xl text-white border-2 bg-blue-700 border-blue-700 rounded-md ml-4 mt-1'><TiSocialLinkedin /></span>
                                            <span className='text-sm text-black-700 ml-4 mt-1'>Linked in Ads Copy</span>
                                        </div>

                                        <div className='flex flex-row border-2 p-2 mb-2 rounded-md hover:bg-slate-100'>
                                            <span className='text-xl text-blue-700  ml-4 mt-1'><MdGrading /></span>
                                            <span className='text-sm text-black-700 ml-4 mt-1'>Paragraph Generator</span>
                                        </div>

                                        <div className='flex flex-row border-2 p-2 rounded-md'>
                                            <span className='text-xl text-blue-700 ml-4 mt-1'><MdOutlineSpellcheck /></span>
                                            <span className='text-sm text-black-700 ml-4 mt-1'>Keyword Generator</span>
                                        </div>


                                    </div>

                                    <div className='flex flex-col mt-10'>
                                        <h6 className='text-sm text-black-500 font-light mb-2'>Social</h6>
                                        <div className='flex flex-row border-2 rounded-md p-2 mb-2'>
                                            <span className='text-xl text-white border-2 bg-blue-700 border-blue-700 rounded-md ml-4 mt-1'><TiSocialLinkedin /></span>
                                            <span className='text-sm text-black-700 ml-4 mt-1'>Linked in Ads Copy</span>
                                        </div>

                                        <div className='flex flex-row border-2 p-2 mb-2 rounded-md hover:bg-slate-100'>
                                            <span className='text-xl text-blue-700  ml-4 mt-1'><MdGrading /></span>
                                            <span className='text-sm text-black-700 ml-4 mt-1'>Paragraph Generator</span>
                                        </div>

                                        <div className='flex flex-row border-2 p-2 rounded-md'>
                                            <span className='text-xl text-blue-700 ml-4 mt-1'><MdOutlineSpellcheck /></span>
                                            <span className='text-sm text-black-700 ml-4 mt-1'>Keyword Generator</span>
                                        </div>
                                    </div>


                                    <div className='flex flex-col mt-10 mb-20'>
                                        <h6 className='text-sm text-black-500 font-light mb-2'>Social</h6>
                                        <div className='flex flex-row border-2 rounded-md p-2 mb-2'>
                                            <span className='text-xl text-white border-2 bg-blue-700 border-blue-700 rounded-md ml-4 mt-1'><TiSocialLinkedin /></span>
                                            <span className='text-sm text-black-700 ml-4 mt-1'>Linked in Ads Copy</span>
                                        </div>

                                        <div className='flex flex-row border-2 p-2 mb-2 rounded-md hover:bg-slate-100'>
                                            <span className='text-xl text-blue-700  ml-4 mt-1'><MdGrading /></span>
                                            <span className='text-sm text-black-700 ml-4 mt-1'>Paragraph Generator</span>
                                        </div>

                                        <div className='flex flex-row border-2 p-2 rounded-md'>
                                            <span className='text-xl text-blue-700 ml-4 mt-1'><MdOutlineSpellcheck /></span>
                                            <span className='text-sm text-black-700 ml-4 mt-1'>Keyword Generator</span>
                                        </div>


                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="grid hidden md:col-span-7 md:block">
                            <h1 className='text-sm text-blue-700 border-b-2 border-blue-700 inline-block ml-4'>Results</h1>
                            <QuillEditor />
                        </div>
                    </div>


                </div>

            </div>

        </div>)
}

export default Writerlanding;