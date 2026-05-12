import { getAdminSummary } from "../../api/AdminApi/AdminApi";



export async function adminSummary(){

    try{
        const response = await getAdminSummary();

        return{
            "totalGroups":response.data.totalGroups,
            "pending":response.data.pendingRequest,
            "projects":response.data.projects,
            "tasks":response.data.tasks
        }
    }
    catch(e:any){


        return{
            "totalGroups":0,
            "pending":0,
            "projects":0,
            "tasks":0
        }
    }

}