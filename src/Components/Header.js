import logo from '../Ellipse 20.png';


const Header = () => {
    return ( 
        <div className="text-white text-4xl font-bold h-40 flex content-center justify-between">
            <h2 className="ml-6 mt-12">Control <br /> Panel</h2>
            <div className='self-center'>
                <div className='h-3 bg-red-400 rounded-full w-3 absolute mt-10 ml-14 z-10'></div>
                <img src={logo} className='scale-105 mt-6 mr-3 relative'></img>
            </div>
        </div>
     );
}
 
export default Header;