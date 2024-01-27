import Videobtn from "./Videobtn"
export default function Videocomponent()
{
    return (
        <div className="bg-[#5a3cee]  h-[1000px] relative">
                <div className="text-left text-[700px] text-black pl-6 pt-20 absolute left-[50px] "><p className="text-white text-black text-[90px]">Create Videos</p>
                <p className="text-white text-black text-[90px]">for every</p>
                <p className="text-white text-black text-[90px]">team</p>
                </div>
                <div className="test-left absolute top-[250px] right-[40px]">
                    <p className="text-white text-bold text-[25px]">Engage, explain, entertain. AI-powered video creation </p>
                    <p className="text-white text-bold text-[25px]">for any need</p>
                </div>
            <div className="absolute top-[550px] left-[30px] rounded-xl">
            <video class="muted-video w-[590px] rounded-t-xl " src="https://resource.heygencdn.com/homepage/usecase_sales2.mp4" type="video/mp4" muted="true" autoplay="true" loop="true">
            </video>
            <Videobtn s1={"Sales outreach"} s2={"that converts"} s3={"create personalized outreach videos at scale"}/>
            </div>

                <div className="absolute top-[400px] right-[30px] rounded-xl">
                <video class="muted-video w-[590px] rounded-t-xl " src="https://resource.heygencdn.com/homepage/usecase_productmarketing2.mp4
                " type="video/mp4" muted="true" autoplay="true" loop="true">
                </video>
                <Videobtn s1={"Product Marketing"} s2={"that resonates"} s3={"produce engaging & consise product videos"} />
                </div>
                <div className="absolute top-[1040px] left-[30px]">
                <video class="muted-video w-[590px] rounded-t-xl" src="https://resource.heygencdn.com/homepage/usecase_mailchimp2.mp4" type="video/mp4" muted="true" autoplay="true" loop="true">
                </video>
                <Videobtn s1={"Content marketing"} s2={"that engage"} s3={"supercharge your content calender with"} s4={"videos"} />
                </div>
                <div className="absolute top-[900px] right-[30px]">
                <video class="muted-video w-[590px] rounded-t-xl" src="https://resource.heygencdn.com/homepage/usecase_lnd2.mp4" type="video/mp4" muted="true" autoplay="true" loop="true">
                </video>
                <Videobtn s1={"Learning & development"} s2={"that teaches"} s3={"create training videos your team will actually"} s4={"watch"} />
                </div>  
                            
            </div>
    )
}