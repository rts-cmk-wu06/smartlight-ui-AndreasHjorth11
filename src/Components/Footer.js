import bulbicon from '../bulb.png';
import iconhome from '../Icon feather-home.png';
import iconsettings from '../Icon feather-settings.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className="bg-white border-solid shadow-gray-500 h-16 -mt-92 flex justify-evenly relative z-20 items-center">
            <img src={bulbicon} className='h-8 self-center'></img>
            <Link to="/"><img src={iconhome} className='h-8'></img></Link>
            <img src={iconsettings} className='h-8 self-center'></img>
        </div>
     );
}
 
export default Footer;