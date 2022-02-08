import lamp from '../light bulb.png';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { BsArrowLeftShort } from "react-icons/bs"
import {HiOutlineLightBulb} from "react-icons/hi";


const Header = () => {
    return ( 
        <div className="text-white text-4xl font-bold h-80 flex content-center justify-between overflow-hidden relative z-10">
            <div className="text-3xl ml-2 mt-16 flex">
                <div className='flex'>
                   <BsArrowLeftShort/>
                    <h2 className='text-center -ml-4'>Bed<br/>Room
                    <motion.div animate={{ y: 50, opacity: 1 }} transition={{ ease: "easeOut", duration: 1.5 }} className='text-amber-400 text-lg -mt-10 opacity-0'>4 Lights</motion.div></h2>
                </div>
            </div>
            
            <motion.div animate={{ y: 100 }} transition={{ ease: "easeOut", duration: 0.5 }} className='h-40 bg-white/5 rounded-full w-40 absolute -mt-20 -ml-10 z-0'></motion.div>
            <motion.div animate={{ x: 70, y: 50 }} transition={{ ease: "easeOut", duration: 0.5 }} className='h-40 bg-white/5 rounded-full w-40 absolute mt-36 ml-8 z-0'></motion.div>
            
            <div className=''>
                <motion.div animate={{ y: -100 }} transition={{ ease: "easeOut", duration: 0.5 }} className='h-40 bg-white/5 rounded-full w-40 absolute mt-12 ml-32 z-0'></motion.div>
            </div>
           
            <motion.div animate={{ x: -480 }} transition={{ ease: "easeOut", duration: 1.5 }} className='flex gap-2 ml-96 mt-40 max-h-24 items-center'>
                    <button className='bg-white text-black text-center text-base h-11 w-36 rounded-xl'><div className='flex font-semibold justify-evenly'><HiOutlineLightBulb className='text-2xl'/>Main Light</div></button>
                    <button className='bg-blue-900 text-white text-center text-base h-11 w-36 rounded-xl'><div className='flex font-semibold justify-evenly'><HiOutlineLightBulb className='text-2xl'/>Desk Light</div></button>
                    <button className='bg-white text-black text-center text-base h-11 w-36 rounded-xl'><div className='flex font-semibold justify-evenly'><HiOutlineLightBulb className='text-2xl'/>Bed Light</div></button>
            </motion.div>
        

            <motion.div animate={{ y: 120}} transition={{ease: "easeOut", duration: 1.3}} className='ml-48 -mt-32 absolute'>
               <img src={lamp} />
            </motion.div>
        </div>
       
     );
}
 
export default Header;