import logo from '../Ellipse 20.png';


const Header = () => {
    return ( 
        <div className="text-white text-4xl font-bold h-40 flex content-center justify-between overflow-hidden relative">
            <h2 className="ml-6 mt-12">Control <br /> Panel</h2>
            <div className='h-40 bg-white/5 rounded-full w-40 absolute -mt-20 -ml-10 z-0 overflow-hidden'></div>
            <div className='h-40 bg-white/5 rounded-full w-40 absolute mt-36 ml-8 z-0 overflow-hidden'></div>
            <div className=''>
                <div className='h-40 bg-white/5 rounded-full w-40 absolute mt-12 ml-16 z-0'></div>
            </div>
            <div className='self-center'>
                <div className='h-3 bg-red-400 rounded-full w-3 absolute mt-10 ml-14 z-10'></div>
                <img src={logo} className='scale-105 mt-6 mr-3'></img>
            </div>
        </div>
     );
}
 
export default Header;