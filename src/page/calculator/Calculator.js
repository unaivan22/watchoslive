import React from 'react'
import WatchLayout from '../../Layout/WatchLayout'
import ZoomIn from '../../Layout/ZoomIn'


export default function Calculator() {
  return (
    <WatchLayout>
        <ZoomIn>
            <section className='max-h-[190px] h-[190px] max-w-[208px] overflow-x-hidden overflow-y-hidden pt-4 rounded-t-[2.5rem] text-center mx-4'>
                <div className='grid grid-cols-1'>
                    <div className='grid grid-col-1 text-right mx-4'>
                       <h2 className='font-bold text-xl'> 12+1 = 13</h2>
                    </div>
                    <div className='h-[160px]'>
                        <div className='grid grid-cols-4 h-[32px]'>
                            <button className="btn btn-ghost">1</button>
                            <button className="btn btn-ghost">2</button>
                            <button className="btn btn-ghost">3</button>
                            <button className="btn btn-ghost">&#43;</button>
                        </div>
                        <div className='grid grid-cols-4 h-[32px]'>
                            <button className="btn btn-ghost">4</button>
                            <button className="btn btn-ghost">5</button>
                            <button className="btn btn-ghost">6</button>
                            <button className="btn btn-ghost">-</button>
                        </div>
                        <div className='grid grid-cols-4 h-[32px]'>
                            <button className="btn btn-ghost">7</button>
                            <button className="btn btn-ghost">8</button>
                            <button className="btn btn-ghost">9</button>
                            <button className="btn btn-ghost">&#10799;</button>
                        </div>
                        <div className='grid grid-cols-4 h-[32px]'>
                            <button className="btn btn-ghost">0</button>
                            <button className="btn btn-ghost">.</button>
                            <button className="btn btn-ghost">&#247;</button>
                            <button className="btn btn-ghost">=</button>
                        </div>
                    </div>
                </div>
            </section>
        </ZoomIn>
    </WatchLayout>
  )
}
