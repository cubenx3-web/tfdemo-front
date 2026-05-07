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
         
        //let timeoutId : ReturnType<typeof setTimeout>
        
        let timeoutId = setTimeout( async()=>
        {
            let theSummary:any = await getUserSummary();
            if(theSummary !== null){
                    setSummary(theSummary)
                    console.log(theSummary)
            }
        }
            , 5000)
        
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
            <div className="relative flex-nowrap flex-14 space-y-2 w-full h-full place-items-center justify-center ">
                
                <Header heading={"Dashboard"} element={null}/>
                <div className=" bg-[#e5e2e2] w-[98%] h-[90%] rounded-2xl "> 

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