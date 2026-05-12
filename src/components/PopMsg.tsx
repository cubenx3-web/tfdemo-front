import { BiSolidError } from "react-icons/bi";
import { SiTicktick } from "react-icons/si";
import { MdOutlineTouchApp } from "react-icons/md";
import { slideMsg } from "../store/ComponentState";

type MsgType = "error" | "normal" | "success";

export function PopMsg(){


    const {msg, msgType, show, setSlideMsg} = slideMsg()
    
    const color: Record <MsgType, string> = {
      error:"text-red-500 border-red-500 bg-red-50",
      normal: "text-blue-500 border-blue-500 bg-blue-50",
      success:"text-green-500 border-green-500 bg-green-50"
    };

    const icon = {
        error: <BiSolidError size={20}/>,
        normal: null,
        success: <SiTicktick size={20}/>
    }

    

    return (
        <div 
        onClick={()=>(setSlideMsg( {msg:msg, msgType:"normal", show:false} ))}
        className={`
           cursor-pointer absolute bottom-[1%] right-[5%] border p-3 rounded-lg ${color[msgType||"normal"]} ${show?"opacity-100 translate-x-0 animate-bounce" : "opacity-50 translate-x-100 animate-spin"} duration-700
        `}>
            <h3 className="flex gap-3 place-items-center">{icon[msgType||"normal"]} {msg} <MdOutlineTouchApp size={20} /> </h3>
        </div>
    )
}


export default PopMsg;