import { BiSolidError } from "react-icons/bi";
import { SiTicktick } from "react-icons/si";


type MsgType = "error" | "normal" | "success";

function PopMsg({show, msg, msgType} : {show:boolean, msg:string, msgType: MsgType} ){

    
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
        <div className={`
            absolute bottom-[10%] right-[10%] border-2 p-3 rounded-lg ${color[msgType]} ${show?"opacity-100":"hidden opacity-0"} animate-bounce duration-1000
        `}>
            <h3 className="flex gap-3 place-items-center">{icon[msgType]} {msg}</h3>
        </div>
    )
}
export default PopMsg;