import {  getGroups, getSummary } from "../../api/UserApi/UserApi";




export async function getUserGroups(){
    try{
        const email = localStorage.getItem("email");
        
        if(email){
            const data =  (await getGroups()).data


            type GroupType = {
                    groupName: string,
                    groupCode: string,
                    projects: number,
                }
                    
            type PendingGroupType={
                groupName:string,
                groupCode:string
            }    
            //const [groups, setGroups] = useState<GroupType[]>([])

            const groups:GroupType[] = data.joinedGroups;
            const waitingApproval:PendingGroupType[] = data.waitingApproval;


            console.log("User Service Group:",groups)
            console.log('User Service pending: ', waitingApproval)

            return {
                "joinedGroups": groups,
                "waitingApproval":waitingApproval
            };
        }
        else{
            window.location.href = "/login";
            return null;
        }
    }
    catch(e: any){
        
        return null

    }
}

export async function getUserSummary(){
    try{
        const email = localStorage.getItem("email");
        
        if(email){
            const data =  (await getSummary()).data


            console.log(data)

            return {
                "groups": data.joinedGroups,
                "pending": data.waitingApproval,
                "projects": data.projects,
                "tasks": data.tasks
            }
        }
        else{
            window.location.href = "/login";
            return null;
        }
    }
    catch(e: any){
        
        return null

    }
}