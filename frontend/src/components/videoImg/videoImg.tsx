import react from 'react'
import imac from '../../../public/media/imac.webp'
import { pageScroll } from '@/data/data'

const VideoImage = () => {


    return (

        <div className='relative w-screen
        h-screen mx-auto my-auto bg-white'>
 <img className='absolute h-full w-full object-contain'
 src={imac.src}/>
<video autoPlay loop  muted className='absolute h-[50%] w-[50%]
top-[18%] left-1/2 -translate-x-[50%] object-contain
z-[2]'>
    <source src={pageScroll}
    />
</video>



        </div>
       
    )
}

export default VideoImage