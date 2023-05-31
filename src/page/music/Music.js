import React from 'react'
import WatchLayout from '../../Layout/WatchLayout'
import ZoomIn from '../../Layout/ZoomIn'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { MdOutlineSkipPrevious } from 'react-icons/md';
import { MdOutlineSkipNext } from 'react-icons/md';
import { MdPlaylistPlay } from 'react-icons/md';
import ModalLayout from '../../Layout/ModalLayout';


export default function Music() {
    let audio = new Audio("/media/mp3/RhinestoneEyes.mp3")
    const start = () => {
        audio.play()
      }
  return (
    <WatchLayout>
        <ZoomIn>
            <section className='max-h-[190px] max-w-[208px] overflow-x-hidden overflow-y-scroll pt-4 rounded-t-[2.5rem] text-center mx-4'>
                <div className='flex justify-center mb-2'>
                    <img className='w-20 aspect-square object-cover rounded-xl' src='https://i.scdn.co/image/ab67616d00001e02661d019f34569f79eae9e985'/>
                </div>
                <h1 className='text-base text-zinc-900 font-normal'>Rhinestone Eyes</h1>
                <p className='text-2xs text-zinc-400'>Gorillaz</p>
                
                <div className='flex items-center justify-between mt-2'>
                    <MdOutlineSkipPrevious color="#333333" fontSize="1.5em" />
                    <BsFillPlayCircleFill  color="#FF4110" fontSize="2em"  onClick={start} />
                    <MdOutlineSkipNext  color="#333333" fontSize="1.5em"  />

                </div>
                <label className='absolute top-6 right-3 pointer' htmlFor="modalTemplate">
                    <MdPlaylistPlay fontSize="1.6em"  />
                </label>
            </section>

            <ModalLayout>
                <div className='flex justify-between flow-row bg-white'>
                    <p className='absolute top-2 text-xs'>Playlist</p>
                    <label htmlFor="modalTemplate" className="btn btn-xs btn-circle absolute right-4 top-2">✕</label>
                </div>
                <section className='max-h-[170px] overflow-y-scroll mt-5'>
                    <p>asdasasdsdsa</p>
                </section>
            </ModalLayout>
            
        </ZoomIn>
    </WatchLayout>
  )
}
