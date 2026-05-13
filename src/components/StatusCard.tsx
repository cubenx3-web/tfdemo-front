import { cloneElement } from "react"

type Details = {
    text: string,
    num: number,
    icon: any
}

export default function StatusCard( details: Details ){

    

    return(
        <div className="grid grid-rows-2 grid-flow-col-dense text-white  border border-slate-800/50 bg-slate-500/50 w-full min-w-60 h-27 rounded-lg p-5 flex-1 cursor-pointer">
            <div className="place-self-start">{details.text} </div>
            <div className="place-self-start text-xl font-bold ">{details.num}</div>
            {
                (details.icon!=null)?cloneElement(details.icon, {className:"text-emerald-400 place-self-end", size:35}):""
            }
            
        </div>
    )

}