import React from 'react'
import WatchLayout from '../../Layout/WatchLayout'
import ZoomIn from '../../Layout/ZoomIn'
import { FaStopCircle } from 'react-icons/fa';
import { MdOutlineSkipPrevious } from 'react-icons/md';
import { MdOutlineSkipNext } from 'react-icons/md';

export default function Record() {
  return (
    <WatchLayout>
        <ZoomIn>
            <section className='max-h-[190px] max-w-[208px] overflow-y-scroll pt-4 rounded-t-[2.5rem] text-center mx-4'>
                <p className='text-2xs text-zinc-400 mt-6'>Hi bro,I was thinking to do something on Sunday</p>
                <div className='flex justify-center mb-2 mt-2'>
                    <img className='w-max object-cover rounded-xl' src='media/misc/waveform.svg'/>
                </div>                
                <div className='flex items-center justify-between mt-2'>
                    <MdOutlineSkipPrevious color="#fff" fontSize="1.5em" />
                    <FaStopCircle  color="#FF4110" fontSize="2em"  />
                    <MdOutlineSkipNext  color="#fff" fontSize="1.5em"  />

                </div>

            </section>
        </ZoomIn>
    </WatchLayout>
  )
}
