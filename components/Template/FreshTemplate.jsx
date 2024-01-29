import React from 'react'
import Card from '../common/Card'
import {FaSearchPlus,FaStar,FaFacebook} from "react-icons/fa"
const FreshTemplate = () => {
  return (
    <div className=' ml-28 mt-14  mx-auto w-11/12'>
        <h1 className=' text-xl translate-x-6 '>Fresh Template</h1>
        {/*card*/}
        <div className=' flex  flex-wrap gap-4 mt-4  w-11/13 mx-auto'>
            <Card  icon1={<FaSearchPlus />} icon2={<FaStar />} heading={"Inclusive Lens"} desc={"Obtain critique and suggested alternatives for user-written text, from an inclusive , anti-bias and anti-sterotype lens."}/>
            <Card  icon1={<FaSearchPlus />} icon2={<FaStar />} heading={"Paragraph Genrator"} desc={"With our paragraph genrator,you can easily create well-written and informative paragraphs,With just a few clicks, you can genrate a custom paragraph that cover all the key points you need to communicate."}/>
            <Card  icon1={<FaFacebook />} icon2={<FaStar />} heading={"Lead Nurture Email"}  desc={"Get the most out of your leads with our lead nurturning emails . Our emails are designed to keep your leads engaged and informed , so you can close more deals and boost your bottom line."}/>
            <Card  icon1={<FaSearchPlus />} icon2={<FaStar />} heading={"Social Media Post"} desc={"Need help coming up with a social media post that will grab attention and get engagement? look No Further!Write a thumb stopper in seconds."}/>
            <Card  icon1={<FaSearchPlus />} icon2={<FaStar />} heading={"Keywords Genrator"} desc={"Looking for keywords for your posts? we can find them for you we'll suggest related keywords so you can be optimizing in a fraction of the time."}/>
            <Card  icon1={<FaSearchPlus />} icon2={<FaStar />} heading={"Positive Feedback"} desc={"Recognizing employees means acknowledging and appreciating thier efforts in the workplace, both professionally and personally"}/>
        </div>
    </div>
  )
}

export default FreshTemplate