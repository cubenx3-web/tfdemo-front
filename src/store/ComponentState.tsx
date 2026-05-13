import {create} from "zustand";


type MsgType = "error" | "normal" | "success";

type SlideMsgType = {
    msg:string;
    msgType: MsgType;
    show:boolean;
    setSlideMsg: ({msg, msgType,show}:{msg:string, msgType:MsgType, show:boolean}) =>void;
}

export const slideMsg = create<SlideMsgType>((set) =>( {
    msg: "",
    msgType: "normal",
    show: false,
    setSlideMsg: ({msg, msgType,show}) => set({msg:msg, msgType:msgType, show:show})
}));



// Confirmation Component
type ConfirmationType = {
    msg: string;
    showConfirm: boolean;
    onConfirm: ()=>void;
    setConfirmationState: ({msg, onConfirm,showConfirm}:{msg:string, onConfirm:()=>void, showConfirm:boolean}) =>void;
}

export const confirmationState = create<ConfirmationType>((set)=>({
    msg: "Confirmation ",
    onConfirm: ()=>console.log("hello world"),
    showConfirm: false,
    setConfirmationState: ({msg, onConfirm, showConfirm}) => set({msg:msg, onConfirm:onConfirm, showConfirm:showConfirm})
}))