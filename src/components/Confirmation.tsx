import { confirmationState, slideMsg } from "../store/ComponentState";
import { IsLoading } from "../store/IsLoading";



export default function Confirmation(){

    const {setSlideMsg} = slideMsg();
    const {msg, showConfirm,onConfirm,setConfirmationState} = confirmationState();

    function cancel(){
        setSlideMsg({msg:"Process Cancelled", msgType:"normal",show:true})
        setConfirmationState({msg:"", showConfirm:false, onConfirm:()=>null}) 
    } 
    function confirm(){
        IsLoading.getState().isLoading(true)
        onConfirm();
        IsLoading.getState().isLoading(false)
        setConfirmationState({msg:"", showConfirm:false, onConfirm:()=>null}) 
    }

    return(
        <div className={`absolute z-3 -translate-x-1/2 left-1/2  ${(showConfirm)?"top-1/2 opacity-90":"-top-1/2 scale-0 opacity-0"} -translate-y-1/2 transition-all duration-600 w`}>
            <div className={`p-3 bg-slate-700 text-white rounded-lg flex flex-col gap-5 `}>
                <div className="text-center">{msg}</div>
                <div className="flex gap-2 justify-center">
                    <div onClick={confirm} className=" bg-green-500 hover:bg-green-700 active:bg-green-300 cursor-pointer text-white p-1 rounded-lg ">Confirm</div>
                    <div onClick={cancel} className="bg-red-500 hover:bg-red-700 active:bg-red-300 cursor-pointer text-white p-1 rounded-lg">Decline</div>
                </div>
            </div>
        </div>
    );  

}