import { createContext, useState } from "react";

type MsgType = "error" | "normal" | "success" ;

type PopMsgType = {
        show: boolean,
        msg: string,
        msgType: MsgType
}

type popMsgConType = {
        usePop: PopMsgType;
        setUsePop: React.Dispatch<React.SetStateAction<PopMsgType>>;
}



export const PopMsgCon = createContext<popMsgConType |null>(null);


export default function PopMsgContext({children}:any){

    const [usePop, setUsePop] = useState<PopMsgType>({
        show: false,
        msg: "message",
        msgType: "normal"
    })

    
    return (
        <PopMsgCon.Provider value={{usePop, setUsePop}}>
            {children}
        </PopMsgCon.Provider> 
    )
}