export default function Videobtn({s1,s2,s3,s4})
{ 
    return (
        <div className="flex py-4 bg-black rounded-b-xl">
                <div className="text-left pl-2">
                <div className="text-semibold text-white text-[25px]">{s1}</div>
                 <div className="text-normal text-[#8f78ff]  ">{s2}</div>
                <div className="text-white">{s3}</div>
                {s4 && <div className="text-white">{s4}</div>}
                </div>
                <div className="flex pt-4 ml-6  ">
                <div className="flex text-white bg-[#5a3cee] w-[130px] h-[50px] cursor-pointer  hover:bg-[#8f78ff] px-2 rounded-xl py-2"><p>Get Started</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 pl-1 py-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                </div>
                    <div className="w-12 h-12 rounded-xl cursor-pointer bg-[#7559ff4d] flex justify-center pt-3 ml-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="pb-2 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                    </div>
                </div>
            </div>
    )
}