import Aibtncomp from "./Aibtncomp"
export default function  Aivoicescopm({v,no,n,head,d1,d2,d3})
{
    return (
        <div className="pt-[20px]">
                <div className="border-[1px] bg-white rounded-2xl p-4"> 
                    <div className="pb-[30px] flex"><div className="pr-2 text-[#7559ff] text-[20px] ">{no}</div><div className="text-[20px]">{ head}</div></div>
                    {v && <div className="flex justify-around gap-2 ">
                        <Aibtncomp d1={d1} d2={d2} d3={d3} />
                        <Aibtncomp d2={"Charles"} d3={"Natural"}/>
                        <Aibtncomp d2={"Ethan"} d3={"Professional"}/>
                        <Aibtncomp d2={"Belle"} d3={"Natural"}/>
                    </div>}
                    {n && <div className="flex justify-around gap-2 ">

                        <Aibtncomp d1={"JP"} d2={"Japanese"} />
                        <Aibtncomp d1={"ES"} d2={"Spanish"}/>
                        <Aibtncomp d1={"DE"} d2={"Germany"}/>
                        <Aibtncomp d1={"FR"} d2={"French"}/>
                        </div>}

                </div>

        </div>
    )
}