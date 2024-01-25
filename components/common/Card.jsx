import React from 'react'

const Card = ({icon1,icon2,heading,desc}) => {
   
  return (
    <div className=' border  w-[25rem]  h-[16em]'>
        {/*icon*/}
        <div className=' flex  justify-between  w-10/12 mx-auto mt-6'>
             {/* Icon 1 */}
            <div className=' text-green-700'>{icon1 }</div>

            {/* Icon 2 */}
            <div className=' text-yellow-600'>{icon2}</div>
        </div>
        <h1 className=' mt-8 translate-x-6 text-xl '>{heading}</h1>
        <p className=' mt-4 translate-x-6 text-slate-900 max-w-[80%]'>{desc}</p>
    </div>
  )
}

export default Card