import { getAdminSummary } from "../../api/AdminApi/AdminApi";
import { IsLoading } from "../../store/IsLoading";



export async function adminSummary(){

    try{
        const response = await getAdminSummary();
        IsLoading.getState().isLoading(false);

        return{
            "totalGroups":response.data.totalGroups,
            "pending":response.data.pendingRequest,
            "projects":response.data.projects,
            "tasks":response.data.tasks
        }
    }
    catch(e:any){

        IsLoading.getState().isLoading(false)
        return{
            "totalGroups":0,
            "pending":0,
            "projects":0,
            "tasks":0
        }
    }

}