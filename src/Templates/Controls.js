import bedroom from '../bed.png';
import room from '../room.png';


const Controls = () => {
    return ( 
        <div className="bg-light-white h-height-656 w-full rounded-t-3xl mt-20">
            <h1 className='text-2xl font-bold ml-6 relative top-8'>All Rooms</h1>
            <div className='grid grid-cols-2 gap-3 content-center w-full h-height-640'>
                <div className="bg-white h-40 w-40 rounded-3xl ml-5 shadow-lg shadow-gray-200 flex flex-col gap-2 justify-around">
                    <img src={bedroom} alt='logo' className='w-16 h-42 mt-5 ml-4' />
                    <div>
                        <h2 className='font-bold text-xl ml-4'>Bed room</h2>
                        <h2 className='font-bold text-amber-400 ml-4'>4 Lights</h2>
                    </div>
                </div>

                <div className="bg-white h-40 w-40 rounded-3xl ml-1 shadow-lg shadow-gray-200 flex flex-col gap-2 justify-around">
                <img src={room} alt='logo' className='w-16 h-42 mt-5 ml-4' />
                    <div>
                        <h2 className='font-bold text-xl ml-4'>Living room</h2>
                        <h2 className='font-bold text-amber-400 ml-4'>2 Lights</h2>
                    </div>
                </div>
                <div className="bg-white h-40 w-40 rounded-3xl ml-5 shadow-lg shadow-gray-200">3</div>
                <div className="bg-white h-40 w-40 rounded-3xl ml-1 shadow-lg shadow-gray-200">4</div>
                <div className="bg-white h-40 w-40 rounded-3xl ml-5 shadow-lg shadow-gray-200">5</div>
                <div className="bg-white h-40 w-40 rounded-3xl ml-1 shadow-lg shadow-gray-200">6</div>
            </div>
        </div>
     );
}
 
export default Controls;