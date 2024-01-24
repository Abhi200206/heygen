import { useState } from "react"
export default function Sample()
{
    const [val,setVal]=useState(false);
    return (
        <div>
                <div onMouseLeave={(v)=>{setVal(false)}} onMouseEnter={(v)=>{setVal(true)}} className='flex cursor-pointer bg-[#e6e0f4] py-3 w-32 px-4  hover:bg-[#fff] text-black hover:h-12 hover:text-[#7559ff] hover:bg-[#ddd] hover:rounded-full'>
                    Resouces{!val? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 pt-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 pt-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
}
                </div>
                {val && <div  onMouseLeave={(v)=>{setVal(false)}} onMouseEnter={(v)=>{setVal(true)}}  className="absolute bg-white rounded-xl p-2">
                        <div className=" p-4 ">
                            <p className=" hover:text-[#7559ff] p-2 cursor-pointer">Blog</p>
                            <p className=" hover:text-[#7559ff] p-2 cursor-pointer">Weekly Webinar</p>
                            <p className=" hover:text-[#7559ff] p-2 cursor-pointer">Case Study</p>
                            <p className=" hover:text-[#7559ff] p-2 cursor-pointer">Help Center</p>
                        </div>
                    </div>}
        </div>
    )
}