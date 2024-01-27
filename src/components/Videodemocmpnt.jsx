export default function Videodemocmpnt()
{
    return (
        <div className=" bg-[#e6e0f4] h-[550px] relative">
                <div className="absolute top-[100px] right-[50px] ">
                <video class="muted-video w-[700px] rounded-2xl shadow-2xl" src="https://resource.heygencdn.com/website/vera_remove/howitworks_new2.mp4" type="video/mp4" muted="true" autoplay="true" loop="true">
                </video>
                </div>
                <div className="absolute top-[200px] left-[40px]">
                    <p className="text-black text-[120px] text-[#0c062c] leading-[120px]">How it </p>
                    <p className="text-black text-[120px] text-[#0c062c] leading-[120px]">Works</p>
                </div>
                <div className="absolute top-[120px] right-[630px] ">
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