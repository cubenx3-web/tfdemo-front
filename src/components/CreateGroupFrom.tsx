import { useContext, useState, type FormEvent } from "react"
import { CreateGroupContext } from "../pages/GroupDashPage"
import { IoCloseCircle } from "react-icons/io5";
import { createGroup } from "../service/GroupService/GroupService";
import { useNavigate } from "react-router";
import { slideMsg } from "../store/ComponentState";



export default function (){

    const cG = useContext(CreateGroupContext);
    
    const [groupName, setGroupName] = useState<string>("")
    const navigate = useNavigate();
    const{setSlideMsg} = slideMsg();

    async function submitHander(e:FormEvent){
        e.preventDefault()
        let create_group = await createGroup(groupName);
        
        type MsgType = "error"|"success"|"normal"


        setSlideMsg({
              msg:create_group?.msg,
              show:true,
              msgType: create_group?.msgType as MsgType 
        });
        
        (create_group.isSent)? (cG?.setCreateGroupState(false), navigate("/Admin-Panel") ):null



    }

    return (
        <div className={`absolute flex place-items-center justify-center bg-blue-500/20 left-1/2 min-w-[70%] min-h-[40%] p-4  transition-all rounded-lg  backdrop-blur-sm duration-600 z-1  place-self-center -translate-y-1/2 top-1/2 ${(cG?.createGroupState)?"-translate-x-1/2":"translate-x-full"}`}>
            <IoCloseCircle size={30} onClick={()=>(cG?.setCreateGroupState(false), setGroupName(""))} 
                                       className="cursor-pointer hover:text-red-500 active:text-red-900 absolute top-2 right-5" />


            <form onSubmit={submitHander} className="flex flex-col gap-3 bg-white p-4 rounded-lg h-[90%] sm:w-[70%] max-sm:w-full justify-center" >
                <div className="text-blue-600 text-xl font-bold">Create Group </div>
                <input type="text" title="" onChange={(e)=>setGroupName(e.target.value)} className="border rounded p-1 font-normal" value={groupName} placeholder="Enter Group Name" required/>
                <button type="submit" className="bg-blue-600 cursor-pointer text-white rounded-lg p-1 hover:bg-blue-900 active:bg-blue-400"> Create </button>
            </form>

        </div>
    )
}