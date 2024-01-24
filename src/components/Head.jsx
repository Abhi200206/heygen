import heygen from './heygen.svg';
import Usecase from './Usecase';
import Feature from './Feature';
import Resource from './Resource'
export default function Head()
{
    return (
        <div className='sticky  top-0 bg-[#e6e0f4]' >
        <div className='flex justify-around '>
            <img src={heygen} loading="lazy" width="83" alt="logo-horizonal-light" class="cursor-pointer"/>
            <div className='flex '>
                <Usecase/>
                <Feature/>  
                <Resource/>
                <div className='flex cursor-pointer bg-[#e6e0f4] py-3 w-32 px-4  hover:bg-[#fff] text-black hover:h-12 hover:text-[#7559ff] hover:bg-[#ddd] hover:rounded-full'><p>Pricing</p>
                </div>
                <div class="ml-2 cursor-pointer  w-28 px-4 mx-2 hover:text-[#7559ff] py-3"><p className='m-0'>ContactSales</p></div>
                <div  class="ml-8 cursor-pointer  w-28 px-4 mx-2 bg-[#5a3cee] text-white hover:bg-[#8f78ff] rounded-md py-3">Get Started</div>
            </div>  
        </div>
        </div>
    )
}