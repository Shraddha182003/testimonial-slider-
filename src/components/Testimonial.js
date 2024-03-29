import React, { useState } from 'react'
import Card from "./Card"
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

const Testimonial = (props) => {
    let reviews=props.reviews;
    const[index,setIndex]=useState(0);
    function leftshiftHandlar()
    {
      if(index-1<0)
      {
        setIndex(reviews.length-1)
      }
    else{
      setIndex(index-1)
    }
    }
    function rightshiftHandlar()
    {
         if(index + 1>=reviews.length)
         {
            setIndex(0);
         }
         else{
          setIndex(index+1)
         }
    }
    function suprisemeHadler()
    {
        let randomIndex=Math.floor( Math.random()*reviews.length) ;
        setIndex(randomIndex); 
    }
  return (
    <div className='w-[150vw] md:w-[750px] bg-white mt-9 flex flex-col justify-center items-center mt-50 transition-all duration-800 hover:shadow-xl'>
        
            <Card review={reviews[index]}></Card>
            <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center'>
   <button onClick={leftshiftHandlar}
   className='cursor-pointer hover:text-violet-500'>
             <FiChevronLeft/>
         </button>

         <button  onClick={rightshiftHandlar} className='cursor-pointer hover:text-violet-500 '>
                   <FiChevronRight />
         </button>

</div>
        <div className ="mt-7 pd-5"onClick={suprisemeHadler}>
            <button className='bg-violet-400 hover:bg-violet-500 transition  all duration-200 cursor-pointer
            px-10 py-2 rounded-md font-bold text-white text-lg '>
              Surprise me
            </button>
        </div>
        
        
    </div>
  )
}

export default Testimonial