import { useContext, useState, type FormEvent } from "react"
import { joinGroup } from "../service/GroupService/GroupService";
import { JoinStateContext } from "../pages/GroupDashPage";
import { IoCloseCircle } from "react-icons/io5";
import { confirmationState, slideMsg } from "../store/ComponentState";


export default function JoinGroupForm(){

    const j = useContext(JoinStateContext);
    
    

    const [groupCode, setGroupCode] = useState<string>("");
    

    function submitHander(e:FormEvent){
        e.preventDefault();
 
        
        async function confirm (){
           (groupCode.trim() === "")? slideMsg.getState().setSlideMsg( {show:true, msg:"Enter Group Code", msgType:"error"} ) :null;
           let join = await joinGroup(groupCode)
           
           // Submit request to join Group
           type MsgType = "error"|"success"|"normal";
           slideMsg.getState().setSlideMsg( {show:true, msg:join?.msg, msgType:join?.msgType as MsgType} );
           (join?.isSent) ? j?.setJoinState(false):j?.setJoinState(true);
        } 

        confirmationState.getState().setConfirmationState({
            msg:"Do you Want to join This Group", 
            onConfirm:confirm,
            showConfirm:true
        })
        

    }



    return (

        <div className={`absolute flex place-items-center justify-center bg-blue-50/50 left-1/2 min-w-[70%] min-h-[40%] p-4  transition-all rounded-lg  backdrop-blur-sm duration-600 z-1  place-self-center -translate-y-1/2 top-1/2 ${(j?.joinState)?"-translate-x-1/2":"translate-x-full"}`}>
            
            <IoCloseCircle size={30} onClick={()=>(j?.setJoinState(false), setGroupCode(""))} 
                           className="cursor-pointer hover:text-red-500 active:text-red-900 absolute top-2 right-5" />

            

            <form onSubmit={submitHander} className="flex flex-col gap-3 bg-slate-500/70 p-4 rounded-lg h-[90%] sm:w-[70%] max-sm:w-full justify-center" >
                <div className="text-white text-xl font-bold">Join Group {}</div>
                <input type="text" title="" onChange={(e)=>setGroupCode(e.target.value)} className="border rounded p-1 font-normal bg-slate-600 text-blue-50" value={groupCode} placeholder="Enter Group Code" required/>
                <button type="submit" className="bg-blue-600 cursor-pointer text-white rounded-lg p-1 hover:bg-blue-900 active:bg-blue-400"> Join </button>
            </form>

        </div>
    )

}