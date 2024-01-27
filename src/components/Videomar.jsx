export default function Videomar({url})
{
    return(
        <div  className=" relative ">
               <div> <img className="rounded-2xl h-[250px]" src={url} alt="" /></div>
               <div className="absolute top-[180px] left-[10px]">
               <div className="flex  cursor-pointer bg-[#0c062c80] rounded-md pl-4 py-2  w-[150px]">
                 <div className="text-white pr-2 ">Customize</div>
                 <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6  h-6 pt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </div>
               </div>
               </div>

        </div>
    )
}