

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar'; // Adjust the path as necessary
import { IoIosSearch } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdGrading } from "react-icons/md";
import { MdOutlineSpellcheck } from "react-icons/md";
import QuillEditor from '../components/QuillEditor';


const WriterNext = () => {

    return (
        <div className="flex flex-col lg:flex-row ml-20 h-screen" style={{ display: 'flex' }}>
            <Sidebar />
            <div className="flex-grow m-5">
                <p className=''>Writer</p>
                <p className='text-sm text-justify mt-10'>Project name - 01/02/2024 - 10.00 am</p>

                <div className="flex mt-10">
                    <div className="grid grid-cols-12 min-w-full">


                        <div className="col-span-5 overflow-y-scroll scrollbar-thin">
                            <div className='max-w-[550px]'>
                                <div className='flex flex-row'>
                                    <a className='mr-2 p-2 text-xs text-blue-600 border-b-2 border-blue-700	font-light inline-block'>
                                        Templates
                                    </a>
                                    <a className='mr-2 p-2 text-xs text-black-600 font-light'>
                                        Expand
                                    </a>
                                    <a className='mr-2 p-2 text-xs text-black-600 font-light'>
                                        Remix
                                    </a>
                                    <a className='p-2 text-xs text-black-600 font-light'>
                                        Next Sentence
                                    </a>
                                </div>
                                <hr className='border-b-2' />
                                <form method='POST' className='m-2'>
                                    <div>
                                        <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Choose a template to continue writing</label>
                                        <div className='flex'>
                                            <input type="text" id="input-group-1" class="border border-gray-300 text-gray-900 text-xs w-full" placeholder="input search text" />
                                            <span className='inline-flex items-center px-3 text-xs text-gray-900 border-2 border-l-0'><IoIosSearch /></span>
                                        </div>

                                    </div>

                                    <div className='flex flex-col mt-10'>
                                        <h6 className='text-sm text-black-500 font-light mb-2'>Contents</h6>
                                        <div className='flex flex-row border-2 rounded-md p-2 mb-2'>
                                            <span className='text-xl text-white border-2 bg-blue-700 border-blue-700 rounded-md ml-4 mt-1'><TiSocialLinkedin/></span>
                                            <span className='text-xs text-black-700 ml-4 mt-1'>Linked in Ads Copy</span>
                                        </div>

                                        <div className='flex flex-row border-2 p-2 mb-2 rounded-md hover:bg-slate-100'>
                                            <span className='text-xl text-blue-700  ml-4 mt-1'><MdGrading/></span>
                                            <span className='text-xs text-black-700 ml-4 mt-1'>Paragraph Generator</span>
                                        </div>

                                        <div className='flex flex-row border-2 p-2 rounded-md'>
                                            <span className='text-xl text-blue-700 ml-4 mt-1'><MdOutlineSpellcheck/></span>
                                            <span className='text-xs text-black-700 ml-4 mt-1'>Keyword Generator</span>
                                        </div>

                                        
                                    </div>

                                    <div className='flex flex-col mt-10'>
                                        <h6 className='text-sm text-black-500 font-light mb-2'>Social</h6>
                                        <div className='flex flex-row border-2 rounded-md p-2 mb-2'>
                                            <span className='text-xl text-white border-2 bg-blue-700 border-blue-700 rounded-md ml-4 mt-1'><TiSocialLinkedin/></span>
                                            <span className='text-xs text-black-700 ml-4 mt-1'>Linked in Ads Copy</span>
                                        </div>

                                        <div className='flex flex-row border-2 p-2 mb-2 rounded-md hover:bg-slate-100'>
                                            <span className='text-xl text-blue-700  ml-4 mt-1'><MdGrading/></span>
                                            <span className='text-xs text-black-700 ml-4 mt-1'>Paragraph Generator</span>
                                        </div>

                                        <div className='flex flex-row border-2 p-2 rounded-md'>
                                            <span className='text-xl text-blue-700 ml-4 mt-1'><MdOutlineSpellcheck/></span>
                                            <span className='text-xs text-black-700 ml-4 mt-1'>Keyword Generator</span>
                                        </div>

                                        
                                    </div>


                                    <div className='flex flex-col mt-10 mb-20'>
                                        <h6 className='text-sm text-black-500 font-light mb-2'>Social</h6>
                                        <div className='flex flex-row border-2 rounded-md p-2 mb-2'>
                                            <span className='text-xl text-white border-2 bg-blue-700 border-blue-700 rounded-md ml-4 mt-1'><TiSocialLinkedin/></span>
                                            <span className='text-xs text-black-700 ml-4 mt-1'>Linked in Ads Copy</span>
                                        </div>

                                        <div className='flex flex-row border-2 p-2 mb-2 rounded-md hover:bg-slate-100'>
                                            <span className='text-xl text-blue-700  ml-4 mt-1'><MdGrading/></span>
                                            <span className='text-xs text-black-700 ml-4 mt-1'>Paragraph Generator</span>
                                        </div>

                                        <div className='flex flex-row border-2 p-2 rounded-md'>
                                            <span className='text-xl text-blue-700 ml-4 mt-1'><MdOutlineSpellcheck/></span>
                                            <span className='text-xs text-black-700 ml-4 mt-1'>Keyword Generator</span>
                                        </div>

                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-span-7">
                        <h1 className='text-sm text-blue-700 border-b-2 border-blue-700	inline-block ml-4 mt-4'>Results</h1>
                        <QuillEditor />
                        </div>      
                    </div>


                </div>

            </div>

        </div>)
}

export default WriterNext;