import React, { FC } from 'react'
import { HeaderList } from './HeaderList'
import { HeaderDrawer } from './HeaderDrawer'

export const Header:FC = () => {
  return (
    <div className="flex justify-center sticky top-0 bg-blue-900 h-12 z-10 flex items-center">
        {/* <div className='ml-3 text-white'>大丸白衣</div> */}
        <div className="hidden lg:flex gap-3 justify-end mx-3"><HeaderList/></div>
        <div className=''><HeaderDrawer/></div>
    </div>
  )
}
