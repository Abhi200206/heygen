export default function Cards({no,desc,desc1,desc2,pic,descf})
{
    return (
        <div className="bg-white  rounded-t-2xl w-[350px] px-6 py-6">
                <div className="text-[#7559ff] text-[90px] flex justify-start ">{no}</div>
                <div >
                    <p className="text-black text-[30px] text-left">{desc}</p>
                    <p className="text-black text-[30px] text-left ">{descf}</p>
                </div>
                <div >
                    <p className="text-left text-slate-500 ">{desc1}</p>
                    <p className="text-left text-slate-500 pb-4">{desc2}</p>

                </div>
                <div>{pic}</div>
        </div>
    )
}