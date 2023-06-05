import React from 'react'
import WatchLayout from '../../Layout/WatchLayout'
import ZoomIn from '../../Layout/ZoomIn'
import { MdBattery80 } from 'react-icons/md';

export default function Battery() {
  return (
    <WatchLayout>
        <ZoomIn>
            <section className='grid place-items-center max-h-[190px] h-[190px] max-w-[208px] overflow-x-hidden overflow-y-scroll pt-4 rounded-t-[2.5rem] text-center mx-4'>
                <div>
                    <div className="radial-progress text-primary mb-4" style={{"--value":82}}><MdBattery80 fontSize="2em" /></div>
                    <h1 className='text-lg font-bold text-zinc-700'>82%</h1>
                    <p className='text-2xs text-zinc-400'>49 Hours estimate</p>
                </div>
            </section>
        </ZoomIn>
    </WatchLayout>
  )
}
