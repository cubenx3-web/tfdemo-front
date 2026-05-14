import { useState, type FormEvent } from "react"
import { joinGroup } from "../service/GroupService/GroupService";
import { IoCloseCircle } from "react-icons/io5";
import { confirmationState,  joinGroupFormState,  slideMsg } from "../store/ComponentState";


export default function JoinGroupForm(){

    //const j = useContext(JoinStateContext);
    const {joinState, setJoinGroupFormState} = joinGroupFormState();
    

    const [groupCode, setGroupCode] = useState<string>("");
    

    function submitHander(e:FormEvent){
        e.preventDefault();
 
        
        async function confirm (){
           (groupCode.trim() === "")? slideMsg.getState().setSlideMsg( {show:true, msg:"Enter Group Code", msgType:"error"} ) :null;
           let join = await joinGroup(groupCode)
           
           // Submit request to join Group
           type MsgType = "error"|"success"|"normal";
           slideMsg.getState().setSlideMsg( {show:true, msg:join?.msg, msgType:join?.msgType as MsgType} );
           (join?.isSent) ? joinGroupFormState.getState().setJoinGroupFormState({joinState:false}): joinGroupFormState.getState().setJoinGroupFormState({joinState:true});
        } 

        confirmationState.getState().setConfirmationState({
            msg:"Do you want to join the group?", 
            onConfirm:confirm,
            showConfirm:true
        })
        

    }



    return (

        <div className={`absolute flex place-items-center justify-center bg-slate-800/50  min-w-[99%] min-h-[99%] p-4  transition-all rounded-lg  backdrop-blur-sm duration-800 z-1   place-self-center -translate-y-1/2 top-1/2 ${(joinState)?"-translate-x-1/2 left-1/2 opacity-100":"opacity-0 -translate-x-full left-0 scale-0 "}`}>
            
            <IoCloseCircle size={30} onClick={()=>(setJoinGroupFormState({joinState:false}), setGroupCode(""))} 
                           className="cursor-pointer hover:text-red-500 active:text-red-900 text-white absolute top-2 right-5" />

            

            <form onSubmit={submitHander} className="flex flex-col gap-3 bg-slate-500 p-4 rounded-lg h-[90%] sm:w-[60%] max-sm:w-full justify-center transition-all duration-400" >
                <div className="text-white text-xl font-bold">Join Group {}</div>
                <input type="text" title="" onChange={(e)=>setGroupCode(e.target.value)} className="border rounded p-1 font-normal bg-slate-600 text-blue-50" value={groupCode} placeholder="Enter Group Code" required/>
                <button type="submit" className="bg-blue-500 cursor-pointer text-white rounded-lg p-1 hover:bg-blue-900 active:bg-blue-400"> Join </button>
            </form>

        </div>
    )

}