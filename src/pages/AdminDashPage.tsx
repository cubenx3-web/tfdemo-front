import StatusCard from "../components/StatusCard";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import {  MdOutlineFolderCopy, MdOutlineGroup} from "react-icons/md";
import { LuFileStack } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";


export default function AdminDashPage(){
    
    const summary = [
            {
                text:"Total Groups",
                num: 0,
                icon: <HiOutlineUserGroup />

            },
            {
                text:"Pending Requests",
                num: 0,
                icon: <MdOutlineGroup/>

            },
            {
                text:"Projects",
                num: 0,
                icon: <MdOutlineFolderCopy/>
            },
            {
                text:"Tasks",
                num: 0,
                icon: <LuFileStack />

            },
    ]

    

    return (
        <>
            <SideNav active={"Admin"}/>
            <div className="relative flex-nowrap flex-14 space-y-2 w-full h-full place-items-center justify-center ">
                
                <Header heading={"Admin Dashboard"}/>
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