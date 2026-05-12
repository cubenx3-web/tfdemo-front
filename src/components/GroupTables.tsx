import { useState } from "react"



type GroupType = {
    groupName: string,
    groupCode: string,
    projects: number,
}
    
type PendingGroupType={
    groupName:string,
    groupCode:string
}


export default function GroupTables({groups, waitingApproval, search}:{groups:GroupType[], waitingApproval:PendingGroupType[], search:String }){


    type TableType = ("Joined Groups"|"Waiting Approval")
    const j:TableType="Joined Groups"
    const w:TableType="Waiting Approval"


    const [table, setTable] = useState<TableType>("Joined Groups")
    
    function handleTable(t:TableType){
        setTable(t);
    }

    return (
        
        <>
            <div className="flex justify-start w-full text-sm mt-1">
                <div onClick={()=>handleTable("Joined Groups")} className={`cursor-pointer hover:scale-110 flex items-center rounded-t-xl text-center px-2 p-1  ${(table===j)?"bg-blue-400 text-white":"bg-gray-200 "}` }>{(table===j)?j:j.split(" ")[0]}</div>
                <div onClick={()=>handleTable("Waiting Approval")} className={`cursor-pointer hover:scale-110 flex items-center rounded-t-xl text-center px-2 p-1 ${(table===w)?"bg-blue-400 text-white":"bg-gray-200 "} `}>{(table===w)?w:w.split(" ")[0]}</div>
            </div>
            
            <div className="w-full relative overflow-hidden ">
                <div className={`w-full transition-all duration-700 max-h-75 max-sm:max-h-65 overflow-auto  ${(table===j)?"translate-x-0":"absolute translate-x-full opacity-0"}`}>
                  
                    <table className="table-fixed w-full bg-gray-100/20 rounded-lg">
                        <thead>
                            <tr className="border-gray-400 bg-gray-100 border-b-2 text-sm font-semibold">
                                <th className="p-3 tracking-wide text-left w-10">No.</th>
                                <th className="p-3 tracking-wide text-left">Name</th>
                                <th className="p-3 tracking-wide text-left">Code</th>
                                <th className="p-3 tracking-wide text-left ">Projects</th>
                                <th className="p-3 tracking-wide text-left"></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                groups.filter( (g) =>
                                        g.groupName.toLocaleLowerCase().includes(search.toLowerCase()) ||
                                        g.groupCode.toLocaleLowerCase().includes(search.toLowerCase())
                                    ).
                                    map((g,i) => (
                                        <tr key={i} className="text-sm odd:bg-blue-100/40 even:bg-gray-300/30">
                                            <td className="p-3">{i+1}</td>
                                            <td className="p-3">{g.groupName}</td>
                                            <td className="p-3">{g.groupCode}</td>
                                            <td className="p-3">{g.projects}</td>
                                            <td className="">
                                                <button 
                                                    className="bg-red-500 hover:bg-amber-800 active:bg-red-500  p-1 px-3 text-white w-10/12 rounded-2xl max-sm:text-xs">
                                                        Leave
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                            }    
                        </tbody>    
                    </table>
                </div>
                <div className={`w-full  transition-all duration-700   ${(table===w)?"translate-x-0":"absolute translate-x-full opacity-0"}`}>
                    <table className="table-auto w-full bg-gray-100/20 rounded-lg overflow-auto ">
                        <thead>
                            <tr className="border-gray-400 bg-gray-100 border-b-2 text-sm font-semibold">
                                <th className="p-3 tracking-wide text-left w-10">No.</th>
                                <th className="p-3 tracking-wide text-left">Name</th>
                                <th className="p-3 tracking-wide text-left">Code</th>
                                <th className="p-3 tracking-wide text-left"></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                waitingApproval.filter( (g) =>
                                        g.groupName.toLocaleLowerCase().includes(search.toLowerCase()) ||
                                        g.groupCode.toLocaleLowerCase().includes(search.toLowerCase())
                                    ).
                                    map((g,i) => (
                                        <tr key={i} className="text-sm odd:bg-blue-100/40 even:bg-gray-300/30">
                                            <td className="p-3">{i+1}</td>
                                            <td className="p-3">{g.groupName}</td>
                                            <td className="p-3">{g.groupCode}</td>
                                            <td className="">
                                                <button 
                                                    className="bg-red-500 hover:bg-amber-800 active:bg-red-500  p-1 text-white w-10/12 rounded-2xl max-sm:text-xs">
                                                        Cancel 
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                            }    
                        </tbody>    
                    </table>
                </div>

            </div>
                


        </>
    )

}