import React from 'react'
import { appIcon } from '../data/Home';
import {Link} from "react-router-dom";

export default function HomeRender() {
    const appIcons = appIcon.filter(getAppIcons =>
        getAppIcons.type === 'icon'
      );
      const listItems = appIcons.map(getAppIcons =>
        <Link to={getAppIcons.link} key={getAppIcons.id}>
            <img className='w-full h-fit aspect-square object-contain rounded-full bg-white p-2' src={getAppIcons.image} />
        </Link>
      );
      return <div className='grid grid-cols-3 px-2 gap-x-2 gap-y-4 mt-4'>{listItems}</div>;
}