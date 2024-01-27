import Marquee from "react-fast-marquee";
import { useState } from "react";
import Videocomponent from "./Videocomponent";
import Rendervid from './Rendervid';
import Videodemocmpnt from "./Videodemocmpnt";
import Cards from "./Cards";
import Compmid from "./Compmid";
import Compend from './Compend';
import Videomar from "./Videomar";
import Aivoices from "./Aivoices";
import Scroolscript from "./Scroolscript";
import Safe from "./Safe";
import Lastcomp from "./Lastcomp";
export default function Body()
{
let pic=<img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65673ea2d58453c68698c44f_img01.webp" loading="lazy" id="w-node-_6150de54-99dd-30b3-ed15-7add9384b288-8c4e74c2" sizes="(max-width: 479px) 236px, (max-width: 991px) 293px, (max-width: 1439px) 23vw, 294.6640625px" alt="" srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65673ea2d58453c68698c44f_img01-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65673ea2d58453c68698c44f_img01.webp 522w"></img>
let pic3=<img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a5b6b6fc76413d21c_feature_031.webp" alt="" class="how_3_scrolling_img"></img>
let pic2=<img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp" alt="" sizes="(max-width: 479px) 100vw, 535.5703125px" srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp 1064w" class="how_3_scrolling_img"></img>   

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
            <div className="realtive h-[100px]">
                <div className="w-[700px] absolute left-[300px]">
            <Marquee loop={0} speed={10} >
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
            </div>
            <Rendervid/>
            <div className="bg-gradient-to-b from-[#e6e0f4] to-[#5a3cee] h-[300px]">
                    
            </div>
            <Videocomponent/>
            <div className="bg-gradient-to-b from-[#5a3cee] to-[#0c062c] h-[600px]">
            </div>
            <div className=" bg-[#0c062c] h-[200px]" ></div>
            <div className="bg-gradient-to-br from-[#0c062c] from-15% to-[#e6e0f4] to-70% h-[400px]"></div>
            <Videodemocmpnt/>
            <div className="flex justify-around pb-12">
            <div className="flex rounded-xl text-white bg-[#5a3cee] cursor-pointer px-4 py-2 w-[320px]  hover:bg-[#8f78ff]">
            <div><img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560d706514c51af627b9c97_how-btn-img.webp" loading="lazy" alt="" class="image-82 w-[100px] h-[40px]"/></div>
            <div className=" flex justify-center rounded-md  pt-4 pb-2">
                <div className=" flex pl-2 pb- "><p>Get Started for free </p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 pl-1 py-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                </div>
            </div>
            </div>
            <div>
                <p className="text-semibold text-[25px]">Whether you're a professional or beginner, you can</p>
                <p className="text-semibold text-[25px]">create stunning videos in minutes instead of hours.</p>
            </div>
            </div>
            {/*new div dev start */}
            <div className="flex justify-around">
            <Cards no={"01"} descf={"avatar"} desc={"Create or choose an"}  desc1={"Choose from over 100+ AI avatars or"} desc2={"customize your own."} pic={pic}/>
            <Compmid/>
            <Compend/>
            </div>
            {/* #bbadff-p */}
            <div className=" bg-[#0c062c] ">
                <div className="text-center pt-[70px]">
                    <p className="text-white text-black text-[110px]">AI avatars</p>
                    <p className="text-[20px] text-[#bbadff] ">Choose your perfect avatar covering different</p>
                    <p className="text-[20px] text-[#bbadff] ">ethnicities, ages, poses and clothes.</p>
                    <div className="flex justify-center pt-[40px]">
                        <div className="flex rounded-xl text-white bg-[#5a3cee] cursor-pointer px-4 py-2 w-[320px]  hover:bg-[#8f78ff]">
                        <div><img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560d706514c51af627b9c97_how-btn-img.webp" loading="lazy" alt="" class="image-82 w-[100px] h-[40px]"/></div>
                        <div className=" flex justify-center rounded-md  pt-4 pb-2">
                            <div className=" flex pl-2 pb- "><p>Get Started for free </p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 pl-1 py-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                            </div>
                        </div>
                        </div>
                        <div>
                            <p className="text-[#bbadff] pt-4 px-2">or</p>
                        </div>
                        <div className="flex bg-[#8f78ff] cursor-pointer border-[#bbadff] border-[1px] rounded-2xl px-2 pt-4">
                            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            </div>
                            <div><p className="text-white">Create your own custom avatar</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#0c062c] to-[#5a3cee] h-[50px] "></div>
            <div className="bg-[#5a3cee] pt-[80px] ">
            <Marquee speed={8} >
                <div className="flex gap-4">
                    <Videomar/>
                    <Videomar url={"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd403de1871d2d426cb_07.webp"}/>
                    <Videomar url={"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd08397f73bfbbc02fb_03.webp"}/>
                    <Videomar url={"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd4c0886512e6dc092c_05.webp"}/>
                    <Videomar url={"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ccebdf82350d6317b90_08.webp"}/>
                    <Videomar url={"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd894bb4d7d86799639_13.webp"}/>
                    <Videomar url={"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd909abf7d03dbac4fb_10.webp"}/>
                    <Videomar url={"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd2a7d01fc94a727fab_06.webp" }/>
                 </div>
            </Marquee>
            <Marquee speed={8} direction="right">
                <div className="flex gap-4 pt-6">
                <Videomar/>
                   <Videomar url={"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce4d5b2d0fa8af4ca2d_20.webp"}/>
                   <Videomar url={"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce4e5478bae9e191561_19.webp"}/>
                   <Videomar url={"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce4111dd4df1ef2ad75_18.webp"}/>
                   <Videomar url={"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cdb7d557bdc613b6c5c_16.webp"}/>
                   <Videomar url={"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cee111dd4df1ef2b15b_25.webp"}/>
                   <Videomar url={"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65675bc0bdd2b122ad7e25e5_Avatar-10.webp"}/>
                   <Videomar url={"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce5b97e22e1e396eca8_23.webp"}/>

                </div>
            </Marquee>
                </div>         
                <div className="bg-gradient-to-b to-[#0c062c] from-[#5a3cee] h-[50px] "></div>
                <div className="pt-[40px] bg-[#0c062c]">
                <div className="bg-[#0c062c] h-[1500px] relative ">
                    <div className="z-[5] absolute top-[100px] right-[0px] ">
                    <video class="muted-video rounded-l-2xl w-[700px]" src="https://resource.heygencdn.com/homepage/AIavatar_instant4.mp4" type="video/mp4" muted="true" autoplay="true" loop="true">
                    </video>
                    </div>
                    <div className="z-[5]  absolute top-[120px] right-[630px] ">
                    <div className="w-12 h-12 rounded-xl cursor-pointer hover:bg-[#7559ff] bg-[#7559ff4d] flex justify-center pt-3 ml-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="pb-2 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                    </div>
                    </div>
                    <div className="absolute top-[300px] left-[0px] ">
                        <img className="w-[600px]" src="./src/assets/bgline.png" alt="" />
                    </div>
                    <div className="absolute top-[200px] left-[50px] ">
                        <div><p className="text-left text-[40px] text-white">Instant avatar</p>
                        <p className="text-left text-[20px] text-[#7559ff] ">A lifestyle avatar in a natural setting</p>
                        </div>
                    </div>
                    <div className="absolute top-[350px] left-[50px] ">
                        <div className="flex text-white bg-[#5a3cee] cursor-pointer  hover:bg-[#8f78ff] px-2 rounded-xl py-2"><p>Get Started for free </p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 pl-1 py-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                  </div>
                    </div>
                <div className="z-[5] absolute top-[550px] right-[0px] ">
                <video class="muted-video rounded-l-2xl w-[700px]" src="https://resource.heygencdn.com/website/vera_remove/aiavatar_studio3.mp4" type="video/mp4" muted="true" autoplay="true" loop="true">
                </video>
                </div>
                <div className="absolute top-[730px] left-[0px]  ">
                    <img className="w-[600px]" src="./src/assets/bgline.png" alt="" />
                </div>
                <div className="z-[5]  absolute top-[570px] right-[630px] ">
                    <div className="w-12 h-12 rounded-xl cursor-pointer hover:bg-[#7559ff] bg-[#7559ff4d] flex justify-center pt-3 ml-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="pb-2 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                    </div>
                </div>
                <div className="absolute top-[630px] left-[50px] ">
                <div><p className="text-left text-[40px] text-white">Studio avatar</p>
                        <p className="text-left text-[20px] text-[#7559ff] ">A professional-grade avatar for diverse application</p>
                        </div>
                </div>
                <div className="absolute top-[780px] left-[50px] ">
                        <div className="flex text-white bg-[#5a3cee] cursor-pointer  hover:bg-[#8f78ff] px-2 rounded-xl py-2"><p>Get Started for free </p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 pl-1 py-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                  </div>
                    </div>
                <div className="z-[5] absolute top-[1000px] right-[0px] ">
                <video class="muted-video rounded-l-2xl w-[700px]" src="https://resource.heygencdn.com/homepage/AIavatar_photo4.mp4" type="video/mp4" muted="true" autoplay="true" loop="true">
                </video>
                </div>
                <div className="z-[5]  absolute top-[1020px] right-[630px] ">
                    <div className="w-12 h-12 rounded-xl cursor-pointer hover:bg-[#7559ff] bg-[#7559ff4d] flex justify-center pt-3 ml-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="pb-2 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                    </div>
                </div>
                <div className="absolute top-[1200px] left-[0px]  ">
                    <img className="w-[600px]" src="./src/assets/bgline.png" alt="" />
                </div>
                <div className="absolute top-[1100px] left-[50px] ">
                <div><p className="text-left text-[40px] text-white">Studio avatar</p>
                        <p className="text-left text-[20px] text-[#7559ff] ">A professional-grade avatar for diverse application</p>
                        </div>
                </div>
                <div className="absolute top-[1250px] left-[50px] ">
                        <div className="flex text-white bg-[#5a3cee] cursor-pointer  hover:bg-[#8f78ff] px-2 rounded-xl py-2"><p>Get Started for free </p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 pl-1 py-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                  </div>
                    </div>
                </div>
                </div>
                <div className="pt-[200px]">
                    <Aivoices/>
                </div>
                <div className="bg-[#e6e0f4] h-[100px]">
                </div>
                <div className="bg-gradient-to-b from-[#e6e0f4] to-[#BBAEFB] h-[100px]"></div>
                <div className="bg-[#BBAEFB] h-[550px]">
                    <div className="relative">
                        <div className="absolute top-[20pxpx] left-[480px]">
                            <img className="w-[400px]" src="./src/assets/bgtri.png" alt="" />
                        </div>
                        <div className='z-[5] absolute left-[80px] top-[40px] bg-[#ffffff1a] rounded-2xl w-[400px] h-[300px] px-8 py-8  border-[1px]'>
                            <Scroolscript/>
                            
                        </div>
                        <div className='z-[5] absolute top-[280px] left-[120px] cursor-pointer bg-[#0c062c] w-[280px] rounded-2xl p-2 text-white'>Generate voice</div>
                        <div className="z-[30] absolute top-[300px] right-[200px]">
                        <video class="ai_voice_video w-[300px] height-[200px] rounded-2xl" src="https://resource.heygencdn.com/homepage/aivoices2_2.mp4" type="video/mp4" muted="true" autoplay="true" loop="true">
                        </video>
                        </div>
                        <div className="hover:bg-[#7559ff] cursor-pointer z-[30] absolute top-[310px] right-[390px] flex bg-[#00000080] w-[100px] px-2 py-2 rounded-xl  ">
                         <div><svg className="pt-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z" fill="white"></path>
                        </svg></div>
                        <div>
                            <p className="text-white">Japanese</p>
                        </div>
                        </div>
                        <div className="z-[20] absolute top-[150px] right-[400px]">
                        <video class="ai_voice_video w-[300px] height-[200px] rounded-2xl" src="https://resource.heygencdn.com/homepage/aivoices1_2.mp4" type="video/mp4" muted="true" autoplay="true" loop="true   ">
                            </video>
                        </div>
                        <div className="hover:bg-[#7559ff] cursor-pointer z-[20] absolute top-[160px] right-[590px] flex bg-[#00000080] w-[100px] px-2 py-2 rounded-xl  ">
                         <div><svg className="pt-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z" fill="white"></path>
                        </svg></div>
                        <div>
                            <p className="text-white">English</p>
                        </div>
                        </div>
                        <div className="z-[20] absolute top-[170px] right-[70px]">
                        <video class="ai_voice_video w-[300px] height-[200px] rounded-2xl" src="https://resource.heygencdn.com/homepage/aivoices4_2.mp4" type="video/mp4" muted="true" autoplay="true" loop="true">
                        </video>
                        </div>
                        <div className="hover:bg-[#7559ff] cursor-pointer z-[20] absolute top-[180px] right-[260px] flex bg-[#00000080] w-[100px] px-2 py-2 rounded-xl  ">
                         <div><svg className="pt-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z" fill="white"></path>
                        </svg></div>
                        <div>
                            <p className="text-white">French</p>
                        </div>
                        </div>
                        <div className="z-[10] absolute top-[30px] right-[250px]">
                        <video class="ai_voice_video w-[300px] height-[200px] rounded-2xl" src="https://resource.heygencdn.com/homepage/aivoices3_2.mp4" type="video/mp4" muted="true" autoplay="true" loop="true">
                    </video>
                        </div>
                        <div className="hover:bg-[#7559ff] cursor-pointer z-[10] absolute top-[40px] right-[440px] flex bg-[#00000080] w-[100px] px-2 py-2 rounded-xl  ">
                         <div><svg className="pt-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z" fill="white"></path>
                        </svg></div>
                        <div>
                            <p className="text-white">Spanish</p>
                        </div>
                        </div>
                    </div>   
                </div>
            <div className="bg-gradient-to-b from-[#BBAEFB] to-[#775BFF] h-[100px]"></div>
            <div className="relative ">
                <div className="bg-[#775BFF] h-[1900px]">
                    <div className="absolute top-[40px] left-[50px] ">
                        <p className="text-left text-white text-[100px]">Features for scale</p>
                        <p className="text-left text-[30px] text-white ">A full-featured platform for flawless video creation.</p>
                    </div>
                <div className="absolute top-[300px] left-[40px] ">
                <video class="translator_video rounded-2xl w-[500px]  " src="https://resource.heygencdn.com/homepage/vt5s2.mp4" type="video/mp4" muted="true" autoplay="true" loop="true">
                </video>
                </div>
                <div className="hover:bg-[#7559ff] cursor-pointer z-[5] absolute top-[320px] left-[50px] flex bg-[#00000080] w-[170px] px-2 py-2 rounded-xl  ">
                         <div><svg className="pt-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z" fill="white"></path>
                        </svg></div>
                        <div>
                            <p className="text-white">Nikki in Spanish</p>
                        </div>
                        </div>
                        <div className=" z-[10] text-white absolute top-[960px] left-[46px] ">
                            <p className="text-left text-[60px] ">Video translator</p>
                            <p className="text-left">Effortlessly translate your videos using our one-click solution that </p>
                            <p className="text-left">clones your natural speaking voice and style for seamless delivery in</p>
                            <p className="text-left pb-6">other languages.</p>
                            <div className="cursor-pointer rounded border-[1px] bg-[#5a3cee] hover:bg-[#8f78ff] w-[180px] h-[30px] ">Learn more</div>
                        </div>
                        <div className="bg-[#f8f8f8] absolute top-[300px] h-[880px] right-[30px] border-[1px] rounded-2xl p-8">
                            <p className= "text-left text-[#0c062c] text-[30px] pt-[30px] ">API</p>
                            <p className="text-left text-[#0c062c]">Integrate HeyGen’s powerful AI capabilities into your product and create</p>
                            <p className="text-left text-[#0c062c] pb-[100px]">amazing avatar videos programmatically with HeyGen's API.</p>
                            <div><img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 991px) 94vw, (max-width: 1439px) 46vw, 574px" srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature-p-500.png 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature-p-800.png 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature-p-1080.png 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature.webp 1142w" alt="" class="full-width-img"/></div>
                        </div>
                        <div className="rounded-2xl bg-white w-[700px] h-[480px] absolute top-[1220px] left-[50px] px-12 py-4  ">
                            <p className="text-left text-[30px]">ChatGPT script writer</p>
                            <p className="text-left pb-10">Accelerate your video creation with our AI writing assistant.</p>
                            <div><video class="muted-video" src="https://resource.heygencdn.com/homepage/scriptgenai2.mp4" type="video/mp4" muted="true" autoplay="true" loop="true">
                        </video></div>
                        </div>
                        <div className="absolute top-[1200px] right-[40px]  rounded-2xl bg-[#341DA6] px-10 py-8 ">
                            <p className="text-white text-left text-[30px]">AI outfits</p>
                            <p className="text-white text-left">Elevate your avatar for any occasion with a</p>
                            <p className="text-white text-left">wide range of customizable clothing</p>
                            <p className="text-white text-left">options.</p>
                            <div><img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6564349a75db541f49c4abee_feature_4.webp" loading="lazy" sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 29vw, 370px" srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6564349a75db541f49c4abee_feature_4-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6564349a75db541f49c4abee_feature_4.webp 738w" alt="" class="full-width-img"/></div>
                        </div>
                        <div className="border-[1px] rounded-2xl z-[10] px-4 bg-[#7559FF] w-[400px] h-[400px] absolute top-[1760px] left-[50px] ">
                            <p className="text-left text-white text-[30px] ">Integrations</p>
                            <p className="text-left text-white ">Using HeyGen couldn’t be easier, streamline</p>
                            <p className="text-left text-white ">your video creation process from your</p>
                            <p className="text-left text-white pb-12">favorite platform.</p>
                            <Marquee speed={20} loop={0}>
                                
                                <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566d9b35fd911cd666cc204_discord.webp" loading="lazy" alt="" class="feature_integration_logo"></img>
                                <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437be31f6f4a6fe2e16a6_zapier.webp" loading="lazy" alt="" class="feature_integration_logo"></img>
                                <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437c09837db5b566a7bae_canva.webp" loading="lazy" alt="" class="feature_integration_logo"></img>
                                
                            </Marquee>
                        </div>
                        <div className="absolute rounded-2xl border-[1px] bg-[#e6e0f4] top-[1760px] right-[20px] px-4 py-4 h-[400px] w-[760px] ">
                            <p className="text-left text-[30px] text-black pb-4">Templates for everything</p>
                            <div className="flex gap-2 justify-start pb-4">
                                <div className="bg-white p-2 border-[1px] rounded-2xl">popular</div>
                                <div className="bg-white p-2 border-[1px] rounded-2xl">Learning & development</div>
                                <div className="bg-white p-2 border-[1px] rounded-2xl">Ecommerce</div>
                            </div>
                            <div className="flex justify-around pt-4">
                                <div><img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1).webp" loading="lazy" sizes="(max-width: 479px) 76vw, 313px" srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1)-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1)-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1)-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1)-p-1600.webp 1600w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1)-p-2000.webp 2000w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1)-p-2600.webp 2600w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1)-p-3200.webp 3200w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1).webp 5760w" alt="" class="full-width-img _100-height"/></div>
                                <div><img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training.webp" loading="lazy" sizes="(max-width: 479px) 76vw, 313px" srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training-p-1600.webp 1600w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training-p-2000.webp 2000w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training-p-2600.webp 2600w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training-p-3200.webp 3200w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training.webp 5760w" alt="" class="full-width-img _100-height" /></div>
                            </div>
                        </div>

                </div>

            </div>
            <div className="bg-[#0C062C] h-[400px]"></div>
            <div className="bg-[#0C062C] relative">
            <img src="./src/assets/bground.png" alt="" />

            <div className="absolute top-[0px] right-[50px] ">
            <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656784f4a1a5876ea1668c22_creator-2.webp" loading="lazy" sizes="(max-width: 767px) 177px, (max-width: 991px) 280px, 388px" srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656784f4a1a5876ea1668c22_creator-2-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656784f4a1a5876ea1668c22_creator-2.webp 720w" alt=""/>
            </div>
            <div className="z-[5] absolute top-[150px] right-[90px]">
            <img className="rounded-2xl w-[150px]" src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567286e5148720d52b54287_iPhone%2014%20-%2023.webp" loading="lazy" alt=""></img>
            </div>
            <div className="absolute z-[10] top-[350px] right-[50px]  ">
            <img className="rounded-2xl w-[300px]" src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567286e6cab2a3cb6cdcfc6_creator-2.webp" loading="lazy" sizes="(max-width: 767px) 177px, (max-width: 991px) 280px, 388px" srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567286e6cab2a3cb6cdcfc6_creator-2-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567286e6cab2a3cb6cdcfc6_creator-2.webp 720w" alt=""/>
            </div>
            <div className="z-[15] absolute top-[170px] right-[300px] ">
            <img className="rounded-2xl w-[150px]" src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567286eff8b439e0d8230bf_iPhone%2014%20-%2024.webp" loading="lazy" alt=""></img>

            </div>
            <div className="absolute top-[0px] left-[300px] ">
            <img className="rounded-2xl " src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567286fa483986cef4ac893_creator-1.webp" loading="lazy" sizes="(max-width: 767px) 177px, (max-width: 991px) 280px, 388px" srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567286fa483986cef4ac893_creator-1-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567286fa483986cef4ac893_creator-1.webp 720w" alt=""/>
            </div>
            <div className="absolute z-[5] top-[200px] left-[60px] ">
            <img className="rounded-2xl w-[150px] " src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656784f2ca5a52c0df8c8b02_creator-3.webp" loading="lazy" alt=""/>
            </div>
            </div >
            <div className="bg-[#0C062C] h-[200px]"></div>
            <div className="bg-[#0C062C] h-[200px]">
            <Safe/>
            </div>
            <div className="b-[#e6e0f4] h-[300px]"></div>
            <div className="b-[#e6e0f4]">
               <img src="/beloved.png" alt="" />
            </div>
            <div className="b-[#e6e0f4] pb-[90px]">
                
                    <div className="flex ">
                    <Marquee speed={6} loop={0}>
                        <img className="px-2 h-[290px] rounded-2xl" src="/sc1.png" alt="" />
                        <img className="px-2 h-[290px] rounded-2xl" src="/sc2.png" alt="" />
                        <img className="px-2 h-[290px] rounded-2xl" src="/sc3.png" alt="" />
                        <img className="px-2 h-[290px] rounded-2xl" src="/sc4.png" alt="" />
                        </Marquee>
                    </div>
                    <div className="flex pt-8 ">
                    <Marquee speed={6} loop={0} direction="right">
                        <img className="px-2 h-[290px] rounded-2xl" src="/sc3.png" alt="" />
                        <img className="px-2 h-[290px] rounded-2xl" src="/sc2.png" alt="" />
                        <img className="px-2 h-[290px] rounded-2xl" src="/sc1.png" alt="" />
                        <img className="px-2 h-[290px] rounded-2xl" src="/sc4.png" alt="" />
                        </Marquee>
                    </div>
                
            </div>
            <div className="b-[#e6e0f4] relative">
                <img src="/final.png" alt="" />
                <div className="absolute top-[40px] left-[500px] ">
                    <p className="text-white text-[80px] ">Start</p>
                    <p className="text-white text-[80px] ">creating</p>
                    <p className="text-white">Create production-ready videos from text in</p>
                    <p className="text-white">seconds with AI-generated avatars and voices</p>
                    <div className=" flex justify-center rounded-md  pt-4 pb-2">
                <div className="flex text-[#5a3cee] bg-white cursor-pointer px-2 rounded-xl py-2"><p>Get Started for free </p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 pl-1 py-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                </div>
            </div>
                </div>

            </div>
            <div className="bg-[#7559FF] h-[30px]">

            </div>
            <div className="flex gap-6 bg-[#7559FF]  ">
                <div className="bg-[#7559FF] pt-12"><video class="footer_cta_video w-[400px]  rounded-2xl" src="https://resource.heygencdn.com/website/vera_remove/footer_new2.mp4" type="video/mp4" muted="true" autoplay="true" loop="true">
                </video>
                <div className=" flex justify-center rounded-md  pt-4 pb-2">
                <div className="flex text-white bg-[#5a3cee] cursor-pointer  hover:bg-[#8f78ff] px-2 rounded-xl py-2"><p>Get Started for free </p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 pl-1 py-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                </div>
            </div></div>
                <div className="pt-12  bg-[#7559FF]">
                    <Lastcomp/>
                </div>
            </div>
            <div className="bg-[#7559FF]">
                <img className="pt-4" src="/end.png" alt="" />

            </div>

            <div>
                <p>Created with ❤️ by <a href="https://twitter.com/Abhinav_1899">abhi</a></p>
            </div>
            
        </div>
    )
}
