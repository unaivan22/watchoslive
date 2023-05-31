import React from 'react'
import WatchLayout from '../../Layout/WatchLayout'
import ZoomIn from '../../Layout/ZoomIn'

export default function Alarm() {
  return (
    <WatchLayout>
        <ZoomIn>
            <div className='max-h-[190px] w-[208px] overflow-y-scroll pr-4 pt-4 rounded-t-[2.5rem] '>
                <section className='px-4 pt-4'>
                    <div className='flex items-center justify-between'>
                        <div>Alarm</div>
                        <div className='flex gap-x-2 items-center'>
                            <p className='text-zinc-400 font-light text-sm'>{(new Date().toLocaleTimeString())}</p>
                            <a className='text-yellow-500 text-md font-bold pointer'>+</a>
                        </div>
                    </div>
                </section>
                <section className='px-4 pt-4 space-y-3'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1>07:00</h1>
                            <p className='text-2xs text-zinc-400'>Daily</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1>08:00</h1>
                            <p className='text-2xs text-zinc-400'>Weekend</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1>05:00</h1>
                            <p className='text-2xs text-zinc-400'>Weekday</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1>22:00</h1>
                            <p className='text-2xs text-zinc-400'>Weekday</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    
                </section>
            </div>
        </ZoomIn>
    </WatchLayout>
  )
}
