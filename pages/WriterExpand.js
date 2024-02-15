

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

const WriterExpand = () => {
    const [showresult, setshowresult] = useState(false);
    const [showtemp, settempresult] = useState(false);

    return (
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
    )
}

export default WriterExpand;