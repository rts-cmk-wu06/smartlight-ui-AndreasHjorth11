import Slider from 'react-input-slider';
import { motion } from "framer-motion"
import {FaRegLightbulb} from "react-icons/fa";
import {HiOutlineLightBulb} from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Controls = () => {
    const [state, setState] = useState({ x: 10 });
    return ( 
        <div className="relative">
            <motion.div animate={{ y: 80 }} transition={{ ease: "easeOut", duration: 0.5 }} className="bg-light-white h-height-656 w-full rounded-t-3xl -mt-40">
                <motion.div animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: 1}} className='text-2xl font-bold ml-6 relative top-8 opacity-0'>Intensity</motion.div>
                <div className='h-16 w-86 mt-10 flex justify-evenly items-center'>
                    <FaRegLightbulb className="text-gray-400 h-6"></FaRegLightbulb>
                    <div>
                        <Slider
                            axis="x"
                            x={state.x}
                            onChange={({ x }) => setState(state => ({ ...state, x }))}
                            styles={{
                                track: {
                                  backgroundColor: 'gray',
                                  height: 7
                                },
                                active: {
                                  backgroundColor: 'orange'
                                },
                                thumb: {
                                  width: 15,
                                  height: 15
                                },
                                disabled: {
                                  opacity: 0.5
                                }
                              }}
                            />
                    </div>
                    <FaRegLightbulb className="text-yellow-500 h-6"></FaRegLightbulb>
                </div>
                <div className='h-16 w-86 mt-4'>
                    <motion.div animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: 1}} className='text-2xl font-bold ml-6 relative opacity-0'>Colors</motion.div>
                    <div className='mt-8 flex ml-6'>
                        <motion.button animate={{ x: 10 }} transition={{ease: "easeOut", duration: 1}} className='h-6 w-6 bg-red-400 rounded-full z-10'></motion.button>
                        <motion.button animate={{ x: 40 }} transition={{ease: "easeOut", duration: 1}} className='h-6 w-6 bg-green-400 rounded-full z-20 -ml-2'></motion.button>
                        <motion.button animate={{ x: 70 }} transition={{ease: "easeOut", duration: 1}} className='h-6 w-6 bg-blue-400 rounded-full z-30 -ml-2'></motion.button>
                        <motion.button animate={{ x: 100 }} transition={{ease: "easeOut", duration: 1}} className='h-6 w-6 bg-purple-400 rounded-full z-40 -ml-2'></motion.button>
                        <motion.button animate={{ x: 130 }} transition={{ease: "easeOut", duration: 1}} className='h-6 w-6 bg-fuchsia-400 rounded-full z-50 -ml-2'></motion.button>
                        <motion.button animate={{ x: 160 }} transition={{ease: "easeOut", duration: 1}} className='h-6 w-6 bg-amber-400 rounded-full z-50 -ml-2'></motion.button>
                        <motion.button animate={{ x: 200 }} transition={{ease: "easeOut", duration: 1}} className='h-6 w-6 bg-gray-200 rounded-full text-center font-semibold z-50 -ml-2'>+</motion.button>
                    </div>
                </div>
                <div className='h-16 w-86 mt-16'>
                <motion.div animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: 1}} className='text-2xl font-bold ml-6 relative opacity-0'>Scenes</motion.div>
                <div className='h-36 ml-6 mt-8'>
                    <button className='bg-gradient-to-r from-rose-500 to-red-400 w-36 h-16 text-white rounded-2xl z-10 font-bold'><div className='flex gap-5 justify-start ml-4'><HiOutlineLightBulb className='text-2xl'/>Birthday</div></button>
                    <motion.button animate={{ x: 50 }} transition={{ease: "easeOut", duration: 1}} className='bg-gradient-to-r from-violet-500 to-pink-400 w-36 h-16 text-white rounded-2xl z-20 -ml-6 font-bold'><div className='flex gap-7 justify-start ml-4'><HiOutlineLightBulb className='text-2xl'/>Party</div></motion.button>
                    <button className='bg-gradient-to-r from-sky-500 to-cyan-400 w-36 h-16 text-white rounded-2xl z-10 mt-6 font-bold'><div className='flex gap-6 justify-start ml-4'><HiOutlineLightBulb className='text-2xl'/>Relax</div></button>
                    <motion.button animate={{ x: 50 }} transition={{ease: "easeOut", duration: 1}} className='bg-gradient-to-r from-lime-400 to-emerald-400 w-36 h-16 text-white rounded-2xl z-20 -ml-6 font-bold'><div className='flex gap-7 justify-start ml-4'><HiOutlineLightBulb className='text-2xl'/>Fun</div></motion.button>
                </div>
                </div>
            </motion.div>
        </div>
     );
}
 
export default Controls;