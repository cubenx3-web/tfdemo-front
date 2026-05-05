import StatusCard from "../components/StatusCard";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { MdOutlineGroup, MdPendingActions} from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";


export default function AdminDashPage(){
    
    const summary = [
            {
                text:"Total Groups",
                num: 0,
                icon: <MdOutlineGroup />

            },
            {
                text:"Active Requests",
                num: 0,
                icon: <IoTimerOutline />

            },
            {
                text:"Projects",
                num: 0,
                icon: <MdPendingActions />
            },
            {
                text:"Tasks",
                num: 0,
                icon: <FaRegCircleCheck />

            },
    ]

    

    return (
        <>
            <SideNav active={"Dashboard"}/>
            <div className="relative flex-nowrap flex-14 space-y-2 w-full h-full place-items-center justify-center ">
                
                <Header heading={"Dashboard"}/>
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