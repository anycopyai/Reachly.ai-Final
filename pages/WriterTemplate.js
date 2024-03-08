

import React, { useEffect, useState } from 'react';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Switch } from 'antd';


const WriterTemplate = () => {
    const [showtemp, settempresult] = useState(false);
    return (
        <div>
            {/* Template Section */}
            <div className={`flex flex-col m-5`}>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selected Template</label>
                <select id="tone" className="border border-gray-300 text-black-700 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Paragraph Generator</option>
                </select>
            </div>

            {/* Prompt Section */}
            <div className="flex flex-col text-sm font-medium text-center text-black-600 border-b border-gray-200">
                <ul className={`flex flex-row md:text-sm items-center gap-2 -mb-px`}>
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
                    <form method='POST' className={`basis-full m-4`}>
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
                            <div><Switch size="small"/></div>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <button type="button" className="basis-full text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2">Generate Template</button>

                        </div>

                    </form>
                </div>
            }
            {/* Results Section */}
            {(showtemp) &&
                <div className={`flex flex-col mt-5 mb-10`}>
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
    )
}

export default WriterTemplate;