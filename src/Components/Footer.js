import bulbicon from '../bulb.png';
import iconhome from '../Icon feather-home.png';
import iconsettings from '../Icon feather-settings.png';

const Footer = () => {
    return ( 
        <div className="bg-white border-solid shadow-gray-500 h-16 -mt-92 flex justify-evenly relative z-10">
            <img src={bulbicon} className='h-8 self-center'></img>
            <img src={iconhome} className='h-8 self-center'></img>
            <img src={iconsettings} className='h-8 self-center'></img>
        </div>
     );
}
 
export default Footer;