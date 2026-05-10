import { BiSolidError } from "react-icons/bi";
import { SiTicktick } from "react-icons/si";
import { useContext } from "react";
import { PopMsgCon } from "../context/PopMsgContext";
import { MdOutlineTouchApp } from "react-icons/md";

type MsgType = "error" | "normal" | "success";

export function PopMsg(){

    const msg = useContext(PopMsgCon);

    
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
        onClick={()=>(msg?.setUsePop( {show:false, msg:msg?.usePop.msg, msgType:"normal"} ))}
        className={`
           cursor-pointer absolute bottom-[1%] right-[5%] border p-3 rounded-lg ${color[msg?.usePop.msgType||"normal"]} ${msg?.usePop.show?"opacity-100 translate-x-0 animate-bounce" : "opacity-50 translate-x-100 animate-spin"} duration-700
        `}>
            <h3 className="flex gap-3 place-items-center">{icon[msg?.usePop.msgType||"normal"]} {msg?.usePop.msg} <MdOutlineTouchApp size={20} /> </h3>
        </div>
    )
}


export default PopMsg;