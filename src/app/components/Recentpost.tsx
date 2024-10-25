import React from 'react'
import PostBox from './PostBox'

function RecentPost() {
  return (
    <>
    <div className="bg-[#f2e0e0] w-auto md:w-full lg:w-full h-[full] lg:h-[502px] md:top-[745px] p-10 m-0">

    <div className="flex  justify-between md:mx-36 lg:mx-36 mb-2">
    <h1 className="text-[#000000] text-[22px] -ml-4">
        Recent Post
    </h1>
    <h1 className=" text-[#F98585] text-[16px] -mr-4 md:text-[22px] lg:text-[22px] ">
        View All
    </h1>
    </div>
  <div className="flex flex-col gap-8 md:justify-center md:gap-8 lg:flex-row lg:justify-center lg:gap-12 ">
   
   
    < PostBox />
   
    
    
    < PostBox />

   
   
  </div>



    </div>
    </>
    
  )
}

export default RecentPost