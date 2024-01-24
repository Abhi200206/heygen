import Marquee from "react-fast-marquee";
import { useState } from "react";
import Display from "./Display";
export default function Body()
{
    const [data,setData]=useState(1);
    return (
        <div className="text-center bg-[#e6e0f4] pt-20">
            <div className="font-semibold text-[65px]">
                <h1 className="text-[#7559ff]">AI-powered video</h1>
                <h1>creations at scale</h1>
            </div>
            <div className="font-normal text-[20px] pt-6">
                <h2>Effortlessly produce studio quality videos</h2>
                <h2>with AI-generated avatars and voices.</h2>
            </div>
            <div className=" flex justify-center rounded-md  pt-4 pb-2">
                <div className="flex text-white bg-[#5a3cee] cursor-pointer  hover:bg-[#8f78ff] px-2 rounded-xl py-2"><p>Get Started for free </p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 pl-1 py-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                </div>
            </div>
            <p className="text-[10px] text-slate-800 font-normal">No credit card needed</p>
            <div className="flex justify-center">
            <Marquee loop={0} speed={10} className="w-[710px]">
            <div className="flex gap-8">
            
            <img className="h-20 w-20" src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788726e54fd474715a07e_logo01.webp"/>
            <img className="h-20 w-20" src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp"></img>
            <img className="h-20 w-20" src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788732d026f4cc9df4da9_logo03.webp" ></img>
            <img className="h-20 w-20" src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp" ></img>
            <img className="h-20 w-20" src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp"></img>
            <img className="h-20 w-20" src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp"></img>
            <img className="h-20 w-20" src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877c7f2428b8355f0dc_logo10.webp"></img>
            
            </div>
            </Marquee>
            </div>
            <div className="flex justify-center relative">
                
                <div className=" bg-white w-[280px] r absolute h-[350px] top-[50px] left-20 bg-gradient-to-r from-white  rounded-xl ml-[90px] px-4 py-2 mt-12">
                <div className="flex">
                <div className=" mr-1 cursor-pointer ">  <img className="cursor-pointer w-12 h-12"  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf826fcbe9010b22000e_hero_avatar_1.webp" /></div>
                <div className=" mr-1 cursor-pointer ">  <img className="cursor-pointer w-12 h-12"  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf82026f22092b01126f_hero_avatar_2.webp" ></img></div>
                <div className=" mr-1 cursor-pointer ">  <img className="cursor-pointer w-12 h-12"  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf837db334699b6f542b_hero_avatar_3.webp"></img></div>
                </div>
                <p className="text-medium text-[#7559ff] flex justify-start pt-4">Script</p>
                <div className="pt-4">
                <Display/>
                </div>
                </div>
                    
                
            <div className="flex  justify-center pt-6  ">
            <video class="rounded-xl px-4 py-2 w-[900px] h-[350px]" src="https://resource.heygencdn.com/homepage/header_video_josh2.mp4" type="video/mp4" muted="" autoplay="" loop="">
            </video>
            </div>
            </div>
            <div className="bg-gradient-to-r from-[#e6e0f4] via-[#5a3cee] to-[#e6e0f4] h-20">
                    
            </div>
            <div className="bg-[#8f78ff] h-[600px] relative">
                <div className="text-left pl-6 pt-20 absolute left-[50px]"><p className="text-white text-black text-[90px]">Create Videos</p>
                <p className="text-white text-black text-[90px]">for every</p>
                <p className="text-white text-black text-[90px]">team</p>
                </div>
                <div className="test-left absolute top-[250px] right-[10px]">
                    <p className="text-white text-bold text-[25px]">Engage, explain, entertain. AI-powered video creation </p>
                    <p className="text-white text-bold text-[25px]">for any need</p>
                </div>
            </div>
            <div>
                <p>Created with ❤️ by <a href="https://twitter.com/Abhinav_1899">abhi</a></p>
            </div>
            
        </div>
    )
}