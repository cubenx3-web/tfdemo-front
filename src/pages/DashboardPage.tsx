import StatusCard from "../components/StatusCard";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { MdOutlineGroup, MdPendingActions} from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import {  getUserSummary } from "../service/UserService/UserService.";
import { useEffect, useState } from "react";


export default function DashBoardPage(){
    
    type SummaryType  = {
        groups: number,
        pending: number,
        projects: number,
        tasks: number,
    }

    const [summary, setSummary] = useState<SummaryType>(
        {groups:0, pending:0, projects:0, tasks:0}
    )
   

    useEffect( ()=>{
         
        
        let timeoutId = setTimeout( async()=>
        {
            let theSummary:any = await getUserSummary();
            if(theSummary !== null){
                    setSummary(theSummary)
                    console.log(theSummary)
            }
        }
            , 500)
        
        return () => clearTimeout(timeoutId)
    }, [])
    

    const summaryCards = [
            {
                text:"Joined Groups",
                num: summary.groups,
                icon: <MdOutlineGroup />

            },
            {
                text:"Waiting Approval",
                num: summary.pending,
                icon: <IoTimerOutline />

            },
            {
                text:"Projects",
                num: summary.projects,
                icon: <MdPendingActions />
            },
            {
                text:"Tasks",
                num: summary.tasks,
                icon: <FaRegCircleCheck />

            },
    ]

    

    return (
        <>
            <SideNav active={"Dashboard"}/>
            <div className="relative flex flex-col flex-nowrap flex-14 space-y-2 w-full h-full place-items-center justify-center ">
                
                <Header heading={"Dashboard"} element={null}/>
                <div className=" border border-slate-500/50 bg-slate-500/30 w-97/100 h-full rounded-2xl flex flex-col overflow-y-scroll sc scroll-smooth"> 

                    {/* SUMMARY */}
                    <div  className="flex flex-wrap w-full p-3 gap-2 ">


                        {
                            summaryCards.map(
                                (s,i)=>(
                                    <StatusCard text={s.text} num={s.num} icon={s.icon} key={i}/>
                                )
                            )
                        }                                 
                    </div>


                      


                </div>

            </div>
        </>
    )
}