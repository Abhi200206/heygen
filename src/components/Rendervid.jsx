import { useState } from "react";
import Display from "./Display";
export default function Rendervid()
{
    let [val,setVal]=useState({
        first:true,
        second:false,
        third:false 
    });
    let vidlink="";
    if(val.first)
    {
        vidlink="https://resource.heygencdn.com/homepage/header_video_josh2.mp4";
    }
    else if(val.second)
    {
        vidlink="https://resource.heygencdn.com/homepage/header_video_studio_avatar2.mp4";
    }
    else
    {
        vidlink="https://resource.heygencdn.com/homepage/header_video_instant_avatar2.mp4";
    }

    return (
        <div className="flex justify-center relative h-[400px]">
                
                <div className=" bg-white w-[280px] z-10 absolute h-[350px] top-[60px] left-20 bg-[#e1e1e199]  rounded-xl ml-[90px] px-4 py-2 mt-12">
                <div className="flex">
                <div onClick={()=>{setVal({first:true,second:false,third:false})}} className={val.first ?" mr-1 cursor-pointer rounded-full bg-[#7559ff]  shadow-2xl ": "mr-1 cursor-pointer rounded-full bg-white  shadow-2xl"}>  <img className="w-12 h-12"  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf826fcbe9010b22000e_hero_avatar_1.webp" /></div>
                <div  onClick={()=>{setVal({first:false,second:true,third:false})}}className={val.second ?" mr-1 cursor-pointer rounded-full bg-[#7559ff]  shadow-2xl ": "mr-1 cursor-pointer rounded-full bg-white  shadow-2xl"}>  <img className="w-12 h-12"  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf82026f22092b01126f_hero_avatar_2.webp" ></img></div>
                <div onClick={()=>{setVal({first:false,second:false,third:true})}} className={val.third ?" mr-1 cursor-pointer rounded-full bg-[#7559ff]  shadow-2xl ": "mr-1 cursor-pointer rounded-full bg-white  shadow-2xl"}>  <img className="w-12 h-12"  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf837db334699b6f542b_hero_avatar_3.webp"></img></div>
                  </div>
                <p className="text-medium text-[#7559ff] flex justify-start pt-4">Script</p>
                <div className="pt-4">
                <Display/>
                </div>
                </div>
                    
                
            <div className="absolute top-[10px] right-[220px]  ">
            <video class="rounded-xl px-4 py-2 w-[700px] " src={vidlink} type="video/mp4" muted="true" autoplay="true" loop="true">
            </video>
            </div>
            <div className="absolute top-[40px] right-[790px] ">
                    <div className="flex cursor-pointer justify-center bg-[#00000080] hover:bg-[#5a3cee] pt-3 w-[100px] h-[50px] rounded-[12px]">
                    <svg className="pt-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z" fill="white"></path>
                    </svg>
                    <div className="text-white">Demo</div>
                    </div>
                    </div>
            </div>
    )
}