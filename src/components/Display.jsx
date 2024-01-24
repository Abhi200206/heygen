import { useEffect, useState } from "react"
export default function Display({id})
{
    let [val,setVal]=useState("");
    useEffect(()=>{
        let arr=[
            'Hey',            ' there!',     ' Welcome',
            ' to',             ' HeyGen',     ' -',
            ' where',          ' you',        ' can',
            ' easily',         ' create',     ' fun,',
            ' high-quality',   ' videos',     ' using',
            ' our',            ' AI',         ' avatars',
            ' and',            ' voices.',    ' In',
            ' just',           ' a',          ' few',
            ' clicks,',        ' you',        ' can',
            ' generate',       ' custom',     ' videos',
            ' for',            ' social',     ' media,',
            ' presentations,', ' education,', ' and',
            ' more.'
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
                console.log("inside",i);
                console.log(val)
               let k=val.split(" ");
                k.pop();
                console.log("arr: ",k);
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
                <p className="whitespace-pre-line">{val}</p>
        </div>
    )


}