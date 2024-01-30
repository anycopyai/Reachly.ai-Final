import React from 'react'

const Card = ({icon1,icon2,heading,desc}) => {
   
  return (
    <div className=' border  max-w-[25rem]  h-[16em] hover:border-10 hover:border-solid hover:border-[#466ab1]' style={{borderRadius:"10px"}}>
        {/*icon*/}
        <div className=' flex  justify-between  w-10/12 mx-auto mt-6'>
             {/* Icon 1 */}
            <div className=' text-green-700' >{icon1 }</div>

            {/* Icon 2 */}
            <div className=' text-yellow-600'>{icon2}</div>
        </div>
        <h1 className=' mt-8 translate-x-6 text-xl ' style={{fontSize:'1.25rem',lineHeight:1.25, fontFamily:'Barlow Semi Condensed,sans-serif'}}>{heading}</h1>
        <p className=' mt-4 translate-x-6 text-gray-500 max-w-[80%]' style={{fontWeight:100,textAlign:'left', fontFamily:'Source Sans Pro,sans-serif'}}>{desc}</p>
    </div>
  )
}

export default Card