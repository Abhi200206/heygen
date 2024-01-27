import { useEffect, useState } from "react"
export default function Display({id})
{
    let [val,setVal]=useState("");
    useEffect(()=>{
        let arr=[
            ' Hey',     ' there!',
            ' Welcome', ' to',
            ' HeyGen!', ' This',
            ' is',      ' what',
            ' we',      ' sound',
            ' like',    ' in',
            ' another', ' language.'
          ];
        let i=0;
        setInterval(()=>{
            
            if(i<arr.length)
            {
                val+=arr[i];
                setVal(val);
                i++;
            }
            else if(i<(2*arr.length-1)+1 && i>arr.length-1){
               let k=val.split(" ");
                k.pop();
                val=k.join(" ");
                setVal(val);
                i++
            }
            else{
                val="";
                setVal(val);
                i=0;
            }
        },200)
    },[])
    
   
    return(
        <div className="flex justify-start">
                <p className="text-left text-[20px]">{val}</p>
        </div>
    )


}