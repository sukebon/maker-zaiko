import { Box } from '@chakra-ui/react'
import React from 'react'
import { HeaderList } from './HeaderList'

export const Header = () => {
  return (
    <div className="flex justify-center sticky top-0 bg-blue-900 h-12 z-10 flex items-center">
        {/* <div className='ml-3 text-white'>大丸白衣</div> */}
        <div className="flex gap-3 justify-end mx-3"><HeaderList/></div>
    </div>
  )
}
