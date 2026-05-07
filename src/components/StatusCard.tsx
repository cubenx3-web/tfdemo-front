import { cloneElement } from "react"

type Details = {
    text: string,
    num: number,
    icon: any
}

export default function StatusCard( details: Details ){

    

    return(
        <div className="grid grid-rows-2 grid-flow-col-dense bg-white w-full min-w-60 h-27 rounded-lg p-5 flex-1 cursor-pointer">
            <div className="place-self-start">{details.text} </div>
            <div className="place-self-start text-xl font-bold ">{details.num}</div>
            {
                (details.icon!=null)?cloneElement(details.icon, {className:"text-blue-600 place-self-end", size:35}):""
            }
            
        </div>
    )

}