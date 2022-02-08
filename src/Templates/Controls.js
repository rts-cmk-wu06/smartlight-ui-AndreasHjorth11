import bedroom from '../bed.png';
import room from '../room.png';
import kitchen from '../kitchen.png';
import bathroom from '../bathtube.png';
import outdoor from '../house.png';
import balcony from '../balcony.png';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const Controls = () => {
    return ( 
        <motion.div animate={{ y: 0 }} transition={{ease: "easeOut", duration: 0.5}} className="bg-light-white h-height-656 w-full rounded-t-3xl mt-0 z-0">
            <h1 className='text-2xl font-bold ml-6 relative top-8'>All Rooms</h1>
            <div className='grid grid-cols-2 gap-3 content-center w-full h-height-640'>
                <Link to="/bedroom" className="bg-white h-40 w-40 rounded-3xl ml-5 shadow-lg shadow-gray-200 flex flex-col gap-2 justify-around">
                    
                    <img src={bedroom} alt='logo' className='w-14 mt-5 ml-6' />
                    <div>
                        <h2 className='font-bold text-xl ml-6'>Bed room</h2>
                        <h2 className='font-bold text-amber-400 ml-6'>4 Lights</h2>
                    </div>
                </Link>

                <div className="bg-white h-40 w-40 rounded-3xl ml-1 shadow-lg shadow-gray-200 flex flex-col gap-2 justify-around">
                <img src={room} alt='logo' className='w-14 mt-5 ml-6' />
                    <div>
                        <h2 className='font-bold text-xl ml-6'>Living room</h2>
                        <h2 className='font-bold text-amber-400 ml-6'>2 Lights</h2>
                    </div>
                </div>

                <div className="bg-white h-40 w-40 rounded-3xl ml-5 shadow-lg shadow-gray-200 flex flex-col gap-2 justify-around">
                <img src={kitchen} alt='logo' className='w-14 mt-5 ml-6' />
                    <div>
                        <h2 className='font-bold text-xl ml-6'>Kitchen</h2>
                        <h2 className='font-bold text-amber-400 ml-6'>5 Lights</h2>
                    </div>
                </div>

                <div className="bg-white h-40 w-40 rounded-3xl ml-1 shadow-lg shadow-gray-200 flex flex-col gap-2 justify-around">
                <img src={bathroom} alt='logo' className='w-14 mt-5 ml-6' />
                    <div>
                        <h2 className='font-bold text-xl ml-6'>Bathroom</h2>
                        <h2 className='font-bold text-amber-400 ml-6'>1 Light</h2>
                    </div>
                </div>

                <div className="bg-white h-40 w-40 rounded-3xl ml-5 shadow-lg shadow-gray-200 flex flex-col gap-2 justify-around">
                <img src={outdoor} alt='logo' className='w-14 mt-5 ml-6' />
                    <div>
                        <h2 className='font-bold text-xl ml-6'>Outdoor</h2>
                        <h2 className='font-bold text-amber-400 ml-6'>5 Lights</h2>
                    </div>
                </div>

                <div className="bg-white h-40 w-40 rounded-3xl ml-1 shadow-lg shadow-gray-200 flex flex-col gap-2 justify-around">
                <img src={balcony} alt='logo' className='w-14 mt-5 ml-6' />
                    <div>
                        <h2 className='font-bold text-xl ml-6'>Balcony</h2>
                        <h2 className='font-bold text-amber-400 ml-6'>2 Lights</h2>
                    </div>
                </div>
                
            </div>
        </motion.div>
     );
}
 
export default Controls;