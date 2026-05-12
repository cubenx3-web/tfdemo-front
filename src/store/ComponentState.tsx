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