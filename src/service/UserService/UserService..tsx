import {  getJoinedGroups, getSummary } from "../../api/UserApi/UserApi";




export async function joinedGroups(){
    try{
        const email = localStorage.getItem("email");
        
        if(email){
            const data =  (await getJoinedGroups()).data

            const groups = data.joinedGroups;
            const total = data.total

            console.log(data)

            return {
                "groups": groups,
                "total": total
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