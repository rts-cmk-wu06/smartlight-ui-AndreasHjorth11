import bulbicon from '../bulb.png';
import iconhome from '../Icon feather-home.png';
import iconsettings from '../Icon feather-settings.png';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa'

const Footer = () => {
    return ( 
        <div className="bg-white border-solid shadow-gray-500 h-16 -mt-92 flex justify-evenly relative z-20 items-center">
            <img src={bulbicon} className='h-8 self-center'></img>
            <Link to="/"><FaHome className='text-3xl text-blue-500' /></Link>
            <img src={iconsettings} className='h-8 self-center '></img>
        </div>
     );
}
 
export default Footer;