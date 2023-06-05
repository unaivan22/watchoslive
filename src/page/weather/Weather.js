import React from 'react'
import WatchLayout from '../../Layout/WatchLayout'
import ZoomIn from '../../Layout/ZoomIn'
import { HiSelector } from 'react-icons/hi';
import ModalLayout from '../../Layout/ModalLayout';

export default function Weather() {
  return (
    <WatchLayout>
        <ZoomIn>
            <section className='grid place-items-center max-h-[190px] h-[190px] max-w-[208px] overflow-x-hidden overflow-y-scroll pt-4 rounded-t-[2.5rem] text-center mx-4'>
                <div>
                    {/* <div className="radial-progress text-primary mb-4" style={{"--value":82}}>82%</div> */}
                    <img className='w-24 h-24' src='media/misc/weather.svg' />
                    <h1 className='text-lg font-bold text-zinc-700'>Cloudy</h1>
                    <label className='flex justify-center mt-1' htmlFor="modalTemplate">
                      <p className='text-2xs text-zinc-400'>Surabaya</p>
                      <HiSelector color="gray" fontSize="1em" />
                    </label>
                    <div className='absolute top-4 right-4'>
                      <h1 className='font-bold text-xl text-zinc-700'>28℃</h1>
                    </div>
                </div>
            </section>

            <ModalLayout>
                <div className='flex justify-between flow-row bg-white pointer'>
                    <p className='absolute top-2 text-xs'>Select City</p>
                    <label htmlFor="modalTemplate" className="btn btn-xs btn-circle absolute right-4 top-2">✕</label>
                </div>
                <section className='max-h-[170px] overflow-y-scroll mt-5 space-y-1'>
                    <p className='text-xs text-zinc-600'>Surabaya</p>
                    <p className='text-xs text-zinc-600'>Sidoarjo</p>
                    <p className='text-xs text-zinc-600'>Mojokerto</p>
                    <p className='text-xs text-zinc-600'>Gresik</p>
                    <p className='text-xs text-zinc-600'>Jombang</p>
                    <p className='text-xs text-zinc-600'>Nganjuk</p>
                    <p className='text-xs text-zinc-600'>Madiun</p>
                    <p className='text-xs text-zinc-600'>Magetan</p>
                </section>
            </ModalLayout>


        </ZoomIn>
    </WatchLayout>
  )
}
