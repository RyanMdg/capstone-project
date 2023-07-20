import BarChart from "./BarChart";
import CostumersInput from "./CostumersInput";

const dash = () => {
    return ( 
    <div className="">
        <div className='flex justify-between px-5 pt-5'>
        <h1 className="text-2xl font-bold">DASHBOARD</h1>
        <input type="date"/>
        
        </div>
        <div className='grid lg:grid-cols-3 gap-9 p-4'>
            <div className='lg:cl-span-5 col-span-1 bg-white flex justify-between w-full border p-6 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <h4 className="text-gray-600">Total sells</h4>
                    <h1 className="text-2xl font-bold text-center">Php 3799.00</h1>
                    <span className="text-green-500 text-center font-bold">+34.7%</span>
                    <p className="text-gray-600 text-center">Compared to April 2023</p>

                </div>
            </div>
            <div className='lg:cl-span-5 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                    <h4 className="text-gray-600">Average Order Value</h4>
                    <h1 className="text-2xl font-bold text-center">Php 272.98</h1>
                    <span className="text-red-500 text-center font-bold">-12.7%</span>
                    <p className="text-gray-600 text-center">Compared to April 2023</p>

                </div>
            </div>
            <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                    <h4 className="text-gray-600">Total Orders</h4>
                    <h1 className="text-2xl font-bold text-center">455 items</h1>
                    <span className="text-green-500 text-center font-bold">+54.7%</span>
                    <p className="text-gray-600 text-center">Compared to April 2023</p>
                

                </div>
            </div>
            
           
        </div>
        <div className='p-4 grid lg:grid-cols-3 md:w-[100%] flex-shrink grid-cols-1 gap-4 mb-10  '>
                <BarChart />
                <CostumersInput />
        </div>
              
    </div> 
    
    );
}
 
export default dash;