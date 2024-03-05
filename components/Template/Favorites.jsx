import React from 'react'
import Card from '../common/Card'
import {FaStar} from "react-icons/fa"
import Link from 'next/link';

const Favorites = ({search}) => {

  const Favourites = [
    {
      icon1: "/images/icon-google-ads.svg",
      icon2: <FaStar />,
      heading: `Google ads`,
      desc: `Create an effective Google Ads with a compelling and concise description that grabs the attention of your target audience`,
      url: 'google-ads',
      favorites: true,
      Extrafields:[{
        label: 'Topics',
        type: 'selectPicker',
        placeholder: '+ Add Topics',
        maxLength: 12,
        value:''
      }]
    },
    {
      icon1: "/images/icon-landing-page.svg",
      icon2: <FaStar />,
      heading: `Landing Page`,
      desc: `Create To convey a compelling message that captures the visitor's attention and encourages them to take a desired action.`,
      url: 'landing-page',
      favorites: true,
      Extrafields:[
        {
          label: 'Benefit',
          type:'textArea',
          placeholder: 'benefit you provide',
          maxLength: 75,
          value:''
        },
        {
          label: 'Feature',
          type:'textArea',
          placeholder: 'Feature you provide',
          maxLength: 75,
          value:''
        },
        {
          label: 'Topic',
          type:'textArea',
          placeholder: 'Topic you provide',
          maxLength: 75,
          value:''
        },
        {
          label: 'Add testimonials',
          type:'checkbox',
          placeholder: '',
          maxLength: '',
          value: false
        },
        {
          label: 'Add FAQs',
          type:'checkbox',
          placeholder: '',
          maxLength: '',
          value: false
        },
      ]
    },
    {
      icon1: "/images/icon-meta.svg",
      icon2: <FaStar />,
      heading: `Facebook Ads`,
      desc: `Short description about the title contents can be displayed here to give a glimpse for selection`,
      url:'facebook-ads',
      favorites: true,
      // Extrafields:[
      //   {
      //     label: 'Subject',
      //     type:'textArea',
      //     placeholder: 'subject you provide',
      //     maxLength: 75,
      //     value:''
      //   }
      // ] 
    },
    {
      icon1: "/images/icon-facebook.svg",
      icon2: <FaStar />,
      heading: `Social Media Post`,
      desc: `Unleash the power of connectivity with the Social media card designed for the tech-savvy and socially inclined`,
      url: 'social-media-post',
      favorites: true,
      // Extrafields:[
      //   {
      //     label: 'Social Post Topic',
      //     type:'textArea',
      //     placeholder: 'Post you provide',
      //     maxLength: 250,
      //     rows:4,
      //     value:''
      //   },
      //   {
      //     label: 'Tone',
      //     type:'select',
      //     placeholder: 'Tone',
      //     maxLength: 250,
      //     value:'',
      //     selectOptions:[
      //       {
      //         value: "adventure",
      //         label: "Adventure",
      //       },
      //       {
      //         value: "joy",
      //         label: "Joy",
      //       },
      //       {
      //         value: "bold",
      //         label: "Bold",
      //       }
      //     ]
      //   },
        
      // ] 
    },
    {
      icon1: "/images/icon-linkedin.svg",
      icon2: <FaStar />,
      heading: `LinkedIn Ads Copy`,
      desc: `Create catchy headlines for cards with a balance of creativity, clarity, and relevance to grab the reader's attention.`,
      url: 'linkedin-ads',
      favorites: true,
      Extrafields:[
        {
          label: 'Product',
          type:'textArea',
          placeholder: 'Product you provide',
          maxLength: 75,
          value:''
        }
      ] 
      
    },
    {
      icon1: "/images/icon-keyword.svg",
      icon2: <FaStar />,
      heading: `Keyword Generator`,
      desc: `Short description about the title contents can be displayed here to give a glimpse for selection`,
      url: 'keyword-generator',
      favorites: true,
      // Extrafields:[
      //   {
      //     label: 'My Text',
      //     type:'textArea',
      //     placeholder: 'Product you provide',
      //     maxLength: 250,
      //     value:''
      //   }
      // ] 
    },
    {
      icon1: "/images/icon-social-media.svg",
      icon2: <FaStar />,
      heading: `Product Description`,
      desc: `Unleash the power of connectivity with the Product Description card designed for the tech-savvy and socially inclined`,
      url:'product-description',
      favorites: true,
      // Extrafields:[
      //   {
      //     label: 'Topic',
      //     type:'textArea',
      //     placeholder: 'Topic you provide',
      //     maxLength: 75,
      //     value:''
      //   }
      // ] 
    },
    {
      icon1: "/images/icon-social-media.svg",
      icon2: <FaStar />,
      heading: `Meta Description`,
      desc: `Unleash the power of connectivity with the Meta Description card designed for the tech-savvy and socially inclined`,
      url:'meta-description',
      favorites: true,
      // Extrafields:[
      //   {
      //     label: 'Page Topic',
      //     type:'textArea',
      //     placeholder: 'Topic you provide',
      //     maxLength: 75,
      //     value:''
      //   }
      // ] 
    },
    
  ];
  return (
    <div className='mt-5 p-0 md:p-8'>
       {Favourites?.filter((el)=>el.heading.toLowerCase().includes(search.toLowerCase())).length > 0 && <h1 className='section-title font-bold text-[#262626]'>Favorites</h1>}
        {/*card*/}
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 md:mt-10 w-11/13 mx-auto'>
        {Favourites?.filter((el)=>el.heading.toLowerCase().includes(search.toLowerCase())).map((data, index) => (
            <div key={index}>
              <Card
                icon1={data?.icon1}
                icon2={data?.icon2}
                heading={data?.heading}
                desc={data?.desc}
                url={data?.url}
                data={data}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Favorites