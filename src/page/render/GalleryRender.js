import React from 'react'
import { galleryImg } from '../data/Gallery';
import {Link} from "react-router-dom";

export default function GalleryRender() {
    const galleryImgs = galleryImg.filter(getGalleryRender =>
        getGalleryRender.type === 'gallery'
      );
      const listItems = galleryImgs.map(getGalleryRender =>
        <Link to={getGalleryRender.link} key={getGalleryRender.id}>
            <img className='w-full h-fit aspect-square object-cover rounded-xl bg-white' src={getGalleryRender.image} />
        </Link>
      );
      return <div className='grid grid-cols-2 px-2 gap-x-1 gap-y-1 mt-4'>{listItems}</div>;
}