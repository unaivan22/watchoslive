import React from 'react'
import { Link } from 'react-router-dom'
import HomeRender from './render/HomeRender'
import ZoomIn from '../Layout/ZoomIn'

const Home = ({ className, children }) => {
  // const navigate = useNavigate();
  return (
    <section className='grid h-screen place-items-center'>
      <div>
      

        <div className="relative mx-auto bg-gray-50 rounded-t-[2.5rem] h-[63px] max-w-[133px] shadow-sm"></div>
        <div className="relative mx-auto border-zinc-50 border-[10px] rounded-[2.5rem] h-[213px] w-[208px] shadow-md bg-white">
            <Link to="/Watch" className="h-[41px] w-[6px] bg-rose-500 absolute -right-[16px] top-[40px] rounded-r-lg pointer"></Link>
            <div className="h-[32px] w-[6px] bg-rose-50 absolute -right-[16px] top-[88px] rounded-r-lg"></div>
            <div className={className}>{children}</div>
            <ZoomIn>
              <section className="rounded-[2rem] overflow-x-hidden overflow-y-scroll h-[193px] w-[188px] bg-black homeBgImage">
                <HomeRender />
              </section>  
            </ZoomIn>
        </div>
        <div className="relative mx-auto bg-gray-50 rounded-b-[2.5rem] h-[63px] max-w-[133px] shadow-sm"></div>
    
      </div>
    </section>
  )
}

export default Home;