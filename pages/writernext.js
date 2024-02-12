

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar'; // Adjust the path as necessary

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
                                <a className='mr-2 p-2 text-sm text-blue-600 border-b-2 border-blue-700	inline-block'>
                                    Templates
                                </a>
                                <a className='mr-2 p-2 text-sm text-gray-500'>
                                    Expand
                                </a>
                                <a className='mr-2 p-2 text-sm text-gray-500'>
                                    Remix
                                </a>
                                <a className='p-2 text-sm text-gray-500'>
                                    Next Sentence
                                </a>
                            </div>
                            <hr className='border-b-2' />
                            </div>
                        </div>
                        <div class="col-span-7">

                        </div>
                    </div>


                </div>

            </div>

        </div>)
}

export default WriterNext;