

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
import { RiPencilFill } from "react-icons/ri";
import { MdOutlineFullscreen } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Template from '../pages/WriterTemplate';
import Expand from '../pages/WriterExpand';
import Remix from '../pages/WriterRemix';
import Next from '../pages/WriterNext';


const Writerlanding = () => {
    const [showresult, setshowresult] = useState(false);
    const [showtemp, setshowtemp] = useState(false)
    const [showintial, setIntialcontent] = useState(true)
    const [showexpand, setExpand] = useState(false)
    const [showremix, setRemix] = useState(false)
    const [shownext, setNext] = useState(false)
    const [fulleditor, setFullEditor] = useState(false)
    const [showedit, setEdit] = useState(false)


    const processDiv = (content) => {

        if (content == "initial") {
            setIntialcontent(true)
            setExpand(false)
            setshowtemp(false)
            setRemix(false)
            setNext(false)

        }

        if (content == "template") {
            setshowtemp(true)
            setIntialcontent(false)
            setExpand(false)
            setRemix(false)
            setNext(false)
        }


        if (content == "expand") {
            setExpand(true)
            setshowtemp(false)
            setIntialcontent(false)
            setNext(false)
            setRemix(false)
        }

        if (content == "remix") {
            setRemix(true)
            setExpand(false)
            setshowtemp(false)
            setIntialcontent(false)
            setNext(false)
        }

        if (content == "next") {
            setNext(true)
            setRemix(false)
            setExpand(false)
            setshowtemp(false)
            setIntialcontent(false)
        }
    }


    return (
        <div className="flex flex-col lg:flex-row md:ml-20 h-screen">
            <Sidebar />
            <div className="flex-grow m-5">
                <div className='flex flex-grow items-center gap-5'>
                    <FaBars className="text-sm md:text-2xl md:hidden" />
                    <p className='text-sm md:text-2xl'>Writer</p>
                    <div className='flex flex-row items-center ml-auto gap-2'>
                        <button className="hidden text-sm text-black border-1 border-gray-300 bg-white-100 p-3 flex flex-row items-center gap-2 md:flex"><MdShowChart /> <span>5 Credits Limit </span></button>
                        <button className="text-sm text-black border-1 border-gray-300 bg-white-100 p-3 md:border-blue-700 md:bg-blue-700 md:text-white flex flex-row items-center gap-2"><FiPlus className='text-center' /> <span className='text-center'> New Document </span></button>

                    </div>

                </div>
                {/* <p className='text-sm md:text-2xl'>Writer</p> */}
                <div className='hidden flex flex-row justify-between items-center md:flex'>
                    <div className='flex items-center mt-10 w-10/12 gap-2'>
                    {(!showedit) && <div className='flex flex-row gap-2 items-center w-5/12'>
                       <p className='text-sm md:text-xl text-justify'>Project name - 01/02/2024 - 10.00 am</p>
                       <span className='text-sm md:text-xl text-justify text-slate-300'><RiPencilFill className='text-xl' onClick={() => setEdit(true)} /></span>
                       </div>}
                       {(showedit) &&<div className='w-5/12 p-2'>
                        <input type='textbox' className='w-full h-10 p-2 text-sm border-2 border-slate-100 focus:border-blue-500' placeholder='Project name - 01/02/2024 - 10.00 am' />
                       </div>}
                      
                       {(showedit) && <div className='flex flex-row gap-2 p-2 border-2 border-slate-100'>
                            <AiOutlineCheck className='text-xl text-blue-600' />
                        </div>}
                        {(showedit) && <div className='flex flex-row gap-2 p-2 border-2 border-slate-100'>
                            <AiOutlineClose className='text-xl text-blue-600' onClick={() => setEdit(false)} />
                       </div>}
                    </div>
                    <div className='flex mt-10'>
                        <p className='text-sm text-slate-500'>Changes Saved</p>
                    </div>

                </div>


                <div className="flex md:mt-10">
                    <div className="grid grid-cols-12 min-w-full">
                        <div className={`col-span-12 overflow-hidden md:col-span-5 lg:col-span-5 md:overflow-y-scroll md:scrollbar-thin ${fulleditor && `hidden`}`}>
                            <div className='w-11/12'>
                                <div className="text-sm font-medium text-center text-black-600 border-b border-gray-200">
                                    <ul className="flex flex-row md:text-sm items-center gap-2 -mb-px">
                                        <li className="hidden me-2 md:block">
                                            <a href="javascript:void(0)" onClick={() => processDiv("initial")} className={`hidden flex flex-row items-center gap-2 p-4 md:flex ${showintial || showtemp ? `text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500` : ``}`}><IoIosArrowRoundBack className='text-2xl' onClick={() => processDiv("intial")} /> Template</a>
                                        </li>

                                        <li className="me-2 md:hidden">
                                            <a href="javascript:void(0)" onClick={() => setshowresult(false)} className={`flex flex-row items-center gap-2 p-4 ${!showresult && `text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`} `}><IoIosArrowRoundBack className='text-2xl' /> Template</a>
                                        </li>

                                        <li className="me-2 md:hidden">
                                            <a href="javascript:void(0)" onClick={() => setshowresult(true)} className={`inline-block p-4 ${showresult && `text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`}`}>Results</a>
                                        </li>

                                        <li className="hidden me-2 md:block">
                                            <a href="javascript:void(0)" onClick={() => processDiv("expand")} className={`inline-block p-4 text-black-600 ${showexpand && `text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`}`}>Expand</a>
                                        </li>
                                        <li className="hidden me-2 md:block">
                                            <a href="javascript:void(0)" onClick={() => processDiv("remix")} className={`inline-block p-4 text-black-600 ${showremix && `text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`}`}>Remix</a>
                                        </li>
                                        <li className="hidden me-2 md:block">
                                            <a href="javascript:void(0)" onClick={() => processDiv("next")} className={`inline-block p-4 text-black-600 ${shownext && `text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`}`}> Next sentence</a>
                                        </li>

                                    </ul>
                                </div>

                            </div>

                            {(showintial) && <div className='w-11/12'>
                                <form method='POST' className={` ${showresult ? `hidden md:block m-4 ` : `m-4`}`}>
                                    <div className='mt-10'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose a template to continue writing</label>
                                        <div className='flex'>
                                            <input type="text" id="input-group-1" className="border border-gray-300 text-gray-900 text-sm w-full" placeholder="input search text" />
                                            <span className='inline-flex items-center px-3 text-sm text-gray-900 border-2 border-l-0'><IoIosSearch /></span>
                                        </div>

                                    </div>

                                    <div className='flex flex-col mt-10'>
                                        <h6 className='text-sm text-black-500 font-light mb-2'>Contents</h6>
                                        <div className='flex flex-row border-2 rounded-md p-2 mb-2'>
                                            <span className='text-xl text-white border-2 bg-blue-700 border-blue-700 rounded-md ml-4 mt-1'><TiSocialLinkedin /></span>
                                            <span className='text-sm text-black-700 ml-4 mt-1'>Linked in Ads Copy</span>
                                        </div>

                                        <div className='flex flex-row border-2 p-2 mb-2 rounded-md hover:bg-slate-100' onClick={() => processDiv("template")}>
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
                            </div>}

                            {/* Template Import Next */}
                            {(showtemp && !showresult) && <div>
                                <Template />
                            </div>}

                            {/* import Expand Section */}

                            {(showexpand) && <div>
                                <Expand />
                            </div>}

                            {/* import Remix Section */}

                            {(showremix) && <div>
                                <Remix />
                            </div>}


                            {/* import Nextsentence Section */}

                            {(shownext) && <div>
                                <Next />
                            </div>}

                        </div>

                        <div class={`grid col-span-12 ${!fulleditor ? `md:col-span-7` : `md:col-span-12`} md:block`}>
                            <div className='hidden flex flex-row items-center justify-between md:flex'>
                                <div>
                                    <p className='text-sm text-blue-700 border-b-2 border-blue-700 inline ml-4'>Results</p>
                                </div>
                                <div className='flex flex-row'>
                                    <button className='text-black border-2 bg-white-100 text-sm text-center p-2 flex flex-row items-center gap-2 m-2' onClick={() => setFullEditor(!fulleditor)}> <MdOutlineFullscreen /> <span>{(fulleditor) ? "Exist Full Screen" : "Full Screen"}</span></button>
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

export default Writerlanding;