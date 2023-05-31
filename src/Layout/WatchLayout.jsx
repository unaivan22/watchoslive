import React, { Children } from 'react'
import { useNavigate } from 'react-router-dom';

const WatchLayout = ({ className, children }) => {
  const navigate = useNavigate();
  return (
    <section className='grid h-screen place-items-center'>
      <div>
      

        <div className="relative mx-auto bg-gray-50 rounded-t-[2.5rem] h-[63px] max-w-[133px] shadow-sm"></div>
        <div className="relative mx-auto border-zinc-700 border-[10px] rounded-[2.5rem] h-[213px] w-[208px] shadow-md bg-white">
            <div onClick={() => navigate(-1)} className="h-[41px] w-[6px] bg-rose-500 absolute -right-[16px] top-[40px] rounded-r-lg pointer"></div>
            <div className="h-[32px] w-[6px] bg-rose-50 absolute -right-[16px] top-[88px] rounded-r-lg"></div>
            {/* <div className="rounded-[2rem] overflow-hidden h-[193px] w-[188px] bg-white">
                <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watchLayout-screen-image.png" className="dark:hidden h-[193px] w-[188px" alt="" />
                <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png" className="hidden dark:block h-[193px] w-[188px]" alt="" />
            </div> */}
            <div className={className}>{children}</div>
        </div>
        <div className="relative mx-auto bg-gray-50 rounded-b-[2.5rem] h-[63px] max-w-[133px] shadow-sm"></div>
    
      </div>
    </section>
  )
}

export default WatchLayout;