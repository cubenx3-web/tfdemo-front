import { useState, type FormEvent } from "react"
import { IoCloseCircle } from "react-icons/io5";
import { createGroup } from "../service/GroupService/GroupService";
import { useNavigate } from "react-router";
import { confirmationState, createGroupFormState, slideMsg } from "../store/ComponentState";



export default function CreateGroupFrom (){

    //const cG = useContext(CreateGroupContext);
    const {groupFormState ,setGroupFormState} = createGroupFormState();
    
    const [groupName, setGroupName] = useState<string>("")
    const navigate = useNavigate();
    

    function submitHander(e:FormEvent){
        e.preventDefault()

        async function create(){
            let create_group = await createGroup(groupName);        
            type MsgType = "error"|"success"|"normal"

            slideMsg.getState().setSlideMsg({
                  msg:create_group?.msg,
                  show:true,
                  msgType: create_group?.msgType as MsgType 
            });

            (create_group.isSent)? (createGroupFormState.getState().setGroupFormState({groupFormState:false}), navigate("/Admin-Panel") ):null
        }

        confirmationState.getState().setConfirmationState({
            msg:"Do you want to create the group?",
            onConfirm:create,
            showConfirm:true
        })

        



    }

    return (
        <div className={`absolute flex place-items-center justify-center bg-slate-800/20 left-1/2 min-w-[99%] min-h-[99%] p-4  transition-all rounded-lg  backdrop-blur-sm duration-800 z-1  place-self-center -translate-y-1/2 top-1/2  ${(groupFormState)?"-translate-x-1/2 opacity-100":" translate-x-full opacity-0 scale-0"}`}>
            <IoCloseCircle size={30} onClick={()=>( setGroupFormState({groupFormState:false}), setGroupName(""))} 
                                       className="cursor-pointer hover:text-red-500 active:text-red-900 text-white absolute top-2 right-5" />


            <form onSubmit={submitHander} className="flex flex-col gap-3 bg-slate-500 p-4 rounded-lg h-[90%] sm:w-[70%] max-sm:w-full justify-center transition-all duration-400" >
                <div className="text-white text-xl font-bold">Create Group </div>
                <input type="text" title="" onChange={(e)=>setGroupName(e.target.value)} className="border rounded p-1 font-normal bg-slate-600 text-blue-50" value={groupName} placeholder="Enter Group Name" required/>
                <button type="submit" className="bg-blue-500 cursor-pointer text-white rounded-lg p-1 hover:bg-blue-900 active:bg-blue-400"> Create </button>
            </form>

        </div>
    )
}