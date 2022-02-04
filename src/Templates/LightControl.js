import bedroom from '../bed.png';
import room from '../room.png';
import kitchen from '../kitchen.png';
import bathroom from '../bathtube.png';
import outdoor from '../house.png';
import balcony from '../balcony.png';
import { motion } from "framer-motion"

import { Link } from 'react-router-dom';

const Controls = () => {
    return ( 
        <motion.div animate={{ y: 100 }} transition={{ ease: "easeOut", duration: 1 }} className="bg-light-white h-height-656 w-full rounded-t-3xl -mt-20">
            
        </motion.div>
     );
}
 
export default Controls;