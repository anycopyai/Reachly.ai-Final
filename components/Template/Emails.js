import React from 'react'
import Card from '../common/Card'
import {FaStar} from "react-icons/fa"
import { IoMailSharp } from "react-icons/io5";
import {MdAttachEmail} from "react-icons/md"


const Emails = () => {
  return (
    <div className=' ml-28 mt-14  mx-auto w-11/12'>
        <h1 className=' text-xl translate-x-6 '>Emails</h1>
        {/*card*/}
        <div className=' flex  flex-wrap gap-4 mt-4  w-11/13 mx-auto'>
            <Card  icon1={<MdAttachEmail />} icon2={<FaStar />} heading={"Lead Nurture Email"}  desc={"Get the most out of your leads with our lead nurturning emails . Our emails are designed to keep your leads engaged and informed , so you can close more deals and boost your bottom line."}/>
            <Card  icon1={<IoMailSharp />} icon2={<FaStar />} heading={"Email Subject Lines"} desc={"Boost those open rates with a fresh set of new emails."}/>
            <Card  icon1={<IoMailSharp /> } icon2={<FaStar />} heading={"Sales Outreach"} desc={"Build new connections and land clients with a compelling bespoke emails."}/>
            
        </div>
    </div>
  )
}

export default Emails