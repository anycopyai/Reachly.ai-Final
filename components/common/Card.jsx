import React from 'react'

const Card = ({icon1,icon2,heading,desc}) => {
   
  return (
    <div className=' border  w-3/12 h-[13em]'>
        {/*icon*/}
        <div className=' flex  justify-between  w-10/12 mx-auto mt-6'>
             {/* Icon 1 */}
            <div>{icon1 }</div>

            {/* Icon 2 */}
            <div>{icon2}</div>
        </div>
        <h1 className=' mt-6 translate-x-6 text-xl font-semibold'>{heading}</h1>
        <p className=' mt-3 translate-x-6 text-slate-600'>{desc}</p>
    </div>
  )
}

export default Card