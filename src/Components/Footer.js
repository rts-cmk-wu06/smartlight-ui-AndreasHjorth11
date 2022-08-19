import bulbicon from '../bulb.png';
import iconhome from '../Icon feather-home.png';
import iconsettings from '../Icon feather-settings.png';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa'
import {FaLightbulb} from 'react-icons/fa'
import {IoSettingsSharp} from 'react-icons/io5'

const Footer = () => {
    return ( 
        <div className="bg-white border-solid shadow-gray-500 h-16 top-0 bottom-0 flex justify-evenly z-20 items-center sticky">
            <FaLightbulb className='text-3xl text-blue-500' />
            <Link to="/"><FaHome className='text-3xl text-blue-500' /></Link>
            <IoSettingsSharp className='text-3xl text-blue-500'/>
        </div>
     );
}
 
export default Footer;