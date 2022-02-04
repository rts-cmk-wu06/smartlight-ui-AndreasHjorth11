import logo from '../Ellipse 20.png';


const Header = () => {
    return ( 
        <div className="text-white text-4xl font-bold h-40 flex content-center justify-between">
            <h2 className="ml-6 mt-12">Control <br /> Panel</h2>
            <img src={logo} className='scale-105 self-center mt-6 mr-3'></img>
        </div>
     );
}
 
export default Header;