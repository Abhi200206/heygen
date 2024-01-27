export default function Aibtncomp({d1,d2,d3})
{
    return (
        <div className="flex bg-white rounded-2xl cursor-pointer border-[2px] p-2">
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg></div>
            <div>
                <div className="flex gap-2 "> 
                 <div></div>{d1 && d1 }
                 <div> {d2}</div> 
                 </div>
                  
                {d3 && <h2>{d3}</h2>}
            </div>

        </div>
    )
}