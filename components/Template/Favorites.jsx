import React from 'react'
import Card from '../common/Card'
import {FaSearchPlus,FaStar,FaFacebook} from "react-icons/fa"

const Favorites = () => {
  return (
    <div className='  mt-14  mx-auto w-11/12'>
        <h1 className=' text-xl '>Favorites</h1>
        {/*card*/}
        <div className=' flex  flex-wrap  gap-4 mt-4 w-11/13 mx-auto'>
            <Card  icon1={<FaSearchPlus />} icon2={<FaStar />} heading={"Inclusive Lens"} desc={"Obtain critique and suggested alternatives for user-written text, from an inclusive , anti-bias and anti-sterotype lens."}/>
            <Card  icon1={<FaSearchPlus />} icon2={<FaStar />} heading={"Social Media Post"} desc={"Need help coming up with a social media post that will grab attention and get engagement? look No Further!Write a thumb stopper in seconds."}/>
            <Card  icon1={<FaFacebook />} icon2={<FaStar />} heading={"Facebook Ads"} desc={"A limitless supply of original Facebook Ad copy."}/>
            <Card  icon1={<FaFacebook />} icon2={<FaStar />} heading={"Product Description"} desc={"Launching a new product?Let's couple it with a catchy product Description."}/>
        </div>
    </div>
  )
}

export default Favorites