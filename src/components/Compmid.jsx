import { useState,useEffect } from "react"
export default function Compmid()
{
    const [val,setVal]=useState(true);
    useEffect(()=>{
        setInterval(()=>{
                setVal((v)=>!v);
        },1000)
    },[]);
    return (
        <div className="bg-white  rounded-t-2xl w-[350px] px-6 py-6">
                <div className="text-[#7559ff] text-[90px] flex justify-start ">02</div>
                <div >
                    <p className="text-black text-[30px] text-left">Record or choose a</p>
                    <p className="text-black text-[30px] text-left ">voice</p>
                </div>
                <div >
                    <p className="text-left text-slate-500 ">Choose from a collection of high-quality</p>
                    <p className="text-left text-slate-500 pb-4">voices or record your own.</p>

                </div >
                <div className="flex justify-center w-[100%] h-[280px]" style={{ backgroundImage:val?"url('/src/assets/bg.png')":"url('/src/assets/bg2.png')" }}>
                    <div className="pt-[100px]"><img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560dea5caeea449781b1402_how-card-btn1.webp" loading="lazy" id="w-node-_69b350e4-6a61-659b-14a3-ed02adf03629-8c4e74c2" alt="" class="image-84 shadows_3"/></div>
                    <div className="pt-[100px]"><img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560dea5e4754f9e471d758f_how-card-btn2.webp" loading="lazy" id="w-node-c124413a-d710-820b-c454-3cfd1010d0c4-8c4e74c2" alt="" class="image-84 shadows_3"/></div>
                </div>
        </div>
    )
}