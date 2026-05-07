import { MdOutlineGroup, MdOutlineGroupAdd } from "react-icons/md";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { IoTimerOutline } from "react-icons/io5";
import StatusCard from "../components/StatusCard";
import { useEffect, useState } from "react";
import { getUserSummary } from "../service/UserService/UserService.";
import { RiKey2Line } from "react-icons/ri";


export default function GroupDashPage(){


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
                
        ]
    
    const headerElement = (
        <div className="flex  place-items-center w-[45%] justify-evenly ">
                    <div title="Join Group" className="flex flex-1 max-w-35 justify-center place-items-center bg-blue-400 hover:bg-blue-900 p-2 rounded gap-3 cursor-pointer">
                        <RiKey2Line />
                        Join Group
                    </div>

                    <div title="Create Group" className="flex flex-1 max-w-35 justify-center place-items-center bg-gray-400 hover:bg-gray-700 p-2 rounded gap-3 cursor-pointer">
                        <MdOutlineGroupAdd />
                        Create Group
                    </div>
        </div>
    )    


    return (
        <>
                    <SideNav active={"Groups"}/>
                    <div className="relative flex-nowrap flex-14 space-y-2 w-full h-full place-items-center justify-center ">
                        
                        <Header heading={"Groups"} element={headerElement}/>
                        <div className=" bg-[#e5e2e2] w-[98%] h-[90%] rounded-2xl "> 
        
                            {/* SUMMARY */}
                            <div  className="flex flex-wrap w-full p-3 space-x-2 space-y-2 ">
        
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
    );  

}