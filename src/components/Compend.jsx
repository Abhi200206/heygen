import Marquee from "react-fast-marquee";
export default function Compmid()
{
    return (
        <div className="bg-white  rounded-t-2xl w-[350px] px-6 py-6">
                <div className="text-[#7559ff] text-[90px] flex justify-start ">03</div>
                <div >
                    <p className="text-black text-[30px] text-left">Select a template or</p>
                    <p className="text-black text-[30px] text-left ">start from scratch</p>
                </div>
                <div >
                    <p className="text-left text-slate-500 ">Select from an extensive array of ready-</p>
                    <p className="text-left text-slate-500 pb-4">to-use templates for any scenario, or begin with a clean slate.</p>

                </div >
                <div>
                    <Marquee speed={5}>
                    <div><img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp" alt="" sizes="(max-width: 479px) 100vw, 535.5703125px" srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp 1064w" class="how_3_scrolling_img"/></div>
                    </Marquee>
                    <Marquee speed={5} direction="right">
                        <div ><img className="h-[85px]" src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a5b6b6fc76413d21c_feature_031.webp" alt="" class="how_3_scrolling_img"/></div>
                    </Marquee>
                    <Marquee speed={5}>
                        <div><img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032.webp" alt="" sizes="398.65625px" srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032.webp 792w" class="how_3_scrolling_img"/></div>
                    </Marquee>
                </div>
                
        </div>
    )
}