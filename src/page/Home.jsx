import React from 'react'
import Watch from '../Layout/WatchLayout'
import HomeRender from './render/HomeRender'
import ZoomIn from '../Layout/ZoomIn'


export default function Home() {
  return (
    <Watch>
      <ZoomIn>
        <section className="rounded-[2rem] overflow-x-hidden overflow-y-scroll h-[193px] w-[188px] bg-zinc-100">
          <HomeRender />
        </section>    
      </ZoomIn>
    </Watch>
  )
}
