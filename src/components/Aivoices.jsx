import Aivoicescomp from "./Aivoicescomp";
export default function Aivoices()
{
    return (
        <div className="flex justify-between">
            <div>
                <div className="pl-[50px]">
                <p className=" text-left text-[#0c062c] text-[100px]">AI voices</p>
                <p className="text-[20px] text-left text-[#0c062c] ">Select a premium voice across any style or</p>
                <p className="text-[20px] text-left text-[#0c062c] ">language. Benefit from our AI-Driven text</p>
                <p className="text-[20px] text-left text-[#0c062c] ">reader, infusing human-like intonation and   </p>
                <p className="text-[20px] text-left text-[#0c062c] pb-6 ">inflections with exceptional accuracy.</p>
               
                <div className="flex rounded-xl text-white bg-[#5a3cee] cursor-pointer px-4 py-2 w-[320px]  hover:bg-[#8f78ff]">
                        <div><img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560d706514c51af627b9c97_how-btn-img.webp" loading="lazy" alt="" class="image-82 w-[100px] h-[40px]"/></div>
                        <div className=" flex justify-center rounded-md  pt-4 pb-2">
                            <div className=" flex pl-2 pb- "><p>Get Started for free </p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 pl-1 py-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div>
                <Aivoicescomp v={true} no={"300+"}  head={"voices"} d2={"Levi"} d3={"Friendly"} />
                <div className="pt-4">
                <Aivoicescomp n={true} no={"40+"} head={"languages"} />
                </div>
             </div>
        </div>
    )
}