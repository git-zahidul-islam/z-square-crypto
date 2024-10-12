import BigBanner from '@/components/ads/BigBanner'
import SmallBanner from '@/components/ads/SmallBanner'
import NewsList from '@/components/news/NewsList'

import React from 'react'

const Newspage = () => {
  return (
    <div className='py-12'>
       <h2 className='text-2xl font-bold mb-8'>Latest News</h2>

       {/* this component open before deploy */}
        
      {/* <div className='h-24 w-full mb-5'>
        <div className='md:hidden'>
        <SmallBanner/>
        </div>
        
        <div className='md:block hidden'>
          <BigBanner/>
        </div>
      </div> */}


       <NewsList/>
    </div>
  )
}

export default Newspage