
const Legend = () => {
    return (
        <div id='legend' className="rounded-md ml-2 mb-2 z-[1000] absolute left-0 bottom-0 bg-gray-50 p-4">
            <div className='flex align-middle'><div className='mr-1 w-4 h-4 bg-orange-900'></div> + 700.001 </div>
            <div className='flex align-middle'><div className='mr-1 w-4 h-4 bg-orange-800'></div> 500.001 - 700.000</div>
            <div className='flex align-middle'><div className='mr-1 w-4 h-4 bg-orange-700'></div> 300.001 - 500.000</div>
            <div className='flex align-middle'><div className='mr-1 w-4 h-4 bg-orange-600'></div> 100.001 - 300.000</div>
            <div className='flex align-middle'><div className='mr-1 w-4 h-4 bg-orange-500'></div> 70.001 - 100.000</div>
            <div className='flex align-middle'><div className='mr-1 w-4 h-4 bg-orange-400'></div> 50.001 - 70.000</div>
            <div className='flex align-middle'><div className='mr-1 w-4 h-4 bg-orange-300'></div> 30.001 - 50.000</div>
            <div className='flex align-middle'><div className='mr-1 w-4 h-4 bg-orange-200'></div> 10.001 - 30.000</div>
            <div className='flex align-middle'><div className='mr-1 w-4 h-4 bg-orange-100'></div> 0 - 10.000</div>
        </div>
    );
}
export default Legend;