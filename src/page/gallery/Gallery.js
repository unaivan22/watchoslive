import React from 'react'
import WatchLayout from '../../Layout/WatchLayout'
import ZoomIn from '../../Layout/ZoomIn'
import GalleryRender from '../render/GalleryRender'

export default function Gallery() {
  return (
    <WatchLayout>
        <ZoomIn>
            <section className="rounded-[2rem] overflow-x-hidden overflow-y-scroll h-[193px] w-[188px] bg-white">
                <GalleryRender />
            </section>
        </ZoomIn>
    </WatchLayout>
  )
}
