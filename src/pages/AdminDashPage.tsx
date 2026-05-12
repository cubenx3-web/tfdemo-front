import StatusCard from "../components/StatusCard";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import {  MdOutlineFolderCopy, MdOutlineGroup} from "react-icons/md";
import { LuFileStack } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { adminSummary } from "../service/AdminService/AdminService";


export default function AdminDashPage(){
    
    type AdminSumType = {
        totalGroups: number,
        pending: number,
        projects: number,
        tasks: number
    }

    const [admin_summary, setSummary] = useState<AdminSumType>({
        totalGroups: 0, pending: 0, projects: 0, tasks: 0
    });

    useEffect (()=>{

        let timeoutId = setTimeout( async() => {
            let adminSum = await adminSummary();

            if(adminSum !==null){
                setSummary(adminSum)
            }

        }   
        ,1000)

        return () => clearTimeout(timeoutId)

    },[])




    const summary = [
            {
                text:"Total Groups",
                num: admin_summary.totalGroups,
                icon: <HiOutlineUserGroup />

            },
            {
                text:"Pending Requests",
                num: admin_summary.pending,
                icon: <MdOutlineGroup/>

            },
            {
                text:"Projects",
                num: admin_summary.projects,
                icon: <MdOutlineFolderCopy/>
            },
            {
                text:"Tasks",
                num: admin_summary.tasks,
                icon: <LuFileStack />

            },
    ]

    

    return (
        <>
            <SideNav active={"Admin"}/>
            <div className="relative flex-nowrap flex-14 space-y-2 w-full h-full place-items-center justify-center ">
                
                <Header heading={"Admin Dashboard"} element={null}/>
                <div className=" bg-[#e5e2e2] w-[98%] h-[90%] rounded-2xl "> 

                    {/* SUMMARY */}
                    <div className="flex flex-wrap w-full p-3 space-x-2 space-y-2 ">
                        {

                            summary.map(
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