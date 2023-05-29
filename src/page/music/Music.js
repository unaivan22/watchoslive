import React from 'react'
import WatchLayout from '../../Layout/WatchLayout'
import ZoomIn from '../../Layout/ZoomIn'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { MdOutlineSkipPrevious } from 'react-icons/md';
import { MdOutlineSkipNext } from 'react-icons/md';

export default function Music() {
  return (
    <WatchLayout>
        <ZoomIn>
            <section className='max-h-[190px] max-w-[208px] overflow-y-scroll pt-4 rounded-t-[2.5rem] text-center mx-4'>
                <div className='flex justify-center mb-2'>
                    <img className='w-20 aspect-square object-cover rounded-xl' src='https://i.scdn.co/image/ab67616d00001e02661d019f34569f79eae9e985'/>
                </div>
                <h1 className='text-base text-zinc-900 font-normal'>Rhinestone Eyes</h1>
                <p className='text-xs text-zinc-400'>Gorillaz</p>
                
                <div className='flex items-center justify-between mt-2'>
                    <MdOutlineSkipPrevious color="#333333" fontSize="1.5em" />
                    <BsFillPlayCircleFill  color="#FF4110" fontSize="2em"  />
                    <MdOutlineSkipNext  color="#333333" fontSize="1.5em"  />

                </div>

            </section>
        </ZoomIn>
    </WatchLayout>
  )
}
