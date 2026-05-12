import { MdOutlineGroup, MdOutlineGroupAdd } from "react-icons/md";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { IoCloseCircle, IoTimerOutline } from "react-icons/io5";
import StatusCard from "../components/StatusCard";
import { createContext, useContext, useEffect, useState } from "react";
import { getUserGroups, getUserSummary } from "../service/UserService/UserService.";
import { RiKey2Line } from "react-icons/ri";
import GroupTables from "../components/GroupTables";
import JoinGroupForm from "../components/JoinGroupForm";


type JoinStateType = {
    joinState : boolean;
    setJoinState: React.Dispatch<React.SetStateAction<boolean>>;
}
export const JoinStateContext = createContext<JoinStateType|null>(null);

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
    
    
    type GroupType = {
        groupName: string,
        groupCode: string,
        projects: number,
    }
    
    type PendingGroupType={
                groupName:string,
                groupCode:string
    }

    const [groups, setGroups] = useState<GroupType[]>([])
    const [waitingApproval, setWaitApproval] = useState<PendingGroupType[]>([])
    const [search, setSearch] = useState<string>("")
    
    
    
    useEffect( ()=>{
             
            //let timeoutId : ReturnType<typeof setTimeout>
            
            let timeoutId = setTimeout( async()=>
            {
                let theSummary:any = await getUserSummary();
                let getGroups: any = await getUserGroups();


                if(theSummary !== null){
                    setSummary(theSummary)
                }

                if(getGroups != null){
                    setGroups(getGroups.joinedGroups)
                    setWaitApproval(getGroups.waitingApproval)
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
    
    // const [groups, setGroups] = useState(null)    


    const [joinState, setJoinState] = useState<boolean>(false)
    

    const headerElement = (
        <div className="flex  place-items-center w-[45%] max-md:w-full max-md:text-sm justify-evenly space-x-1  ">
                    <div
                     onClick={()=>(setJoinState(true))}
                     title="Join Group" className="flex flex-1 max-w-35 justify-center place-items-center bg-blue-400 hover:bg-blue-900 p-2 rounded gap-3 cursor-pointer">
                        <RiKey2Line />
                        Join 
                    </div>

                    <div title="Create Group" className="flex flex-1 max-w-35 justify-center place-items-center bg-gray-400 hover:bg-gray-700 p-2 rounded gap-3 cursor-pointer">
                        <MdOutlineGroupAdd />
                        Create 
                    </div>
        </div>
    )    

    

    function searchHandler(e:React.ChangeEvent<HTMLInputElement>){
        setSearch(e.target.value)

    }

    
    return (
        <>
                    <SideNav active={"Groups"}/>
                    <div className="relative flex-nowrap flex-14 space-y-2 w-full h-full place-items-center justify-center overflow-hidden">
                        
                        <Header heading={"Groups"} element={headerElement}/>
                        
                        <div className=" bg-[#e5e2e2] w-[98%] h-[90%] rounded-2xl overflow-auto "> 
        
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
                                
                            {/* JOINED GROUPS DISPLAY */}
                            <div className="bg-white p-2 py-3 place-self-center w-[97%] rounded flex flex-col place-items-center relative">
                                <div className="flex gap-9 w-full place-items-center px-2 mb-2">
                                    <h1 className="font-bold  flex-2 ">Groups</h1>    
                                    {/* Search filter */}
                                    <div className="flex flex-1 gap-2 ">
                                        <input type="text" 
                                               placeholder="Search..."
                                               onChange={searchHandler}
                                               value = {search}
                                               className="flex text-sm bg-[#e5e2e2] max-w-50 px-2 border-2 border-gray-300 rounded-lg h-7"
                                        />
                                        
                                    </div>
                                </div>

                                <GroupTables groups={groups} waitingApproval={waitingApproval} search={search}/>

                            </div>      
        
                        </div>
         
                    </div>

                    <JoinStateContext.Provider value={{joinState, setJoinState}}>
                        <JoinGroupForm />
                    </JoinStateContext.Provider>

                </>
    );  

}