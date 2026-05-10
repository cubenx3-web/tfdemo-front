import { userJoinGroup } from "../../api/GroupApi/GroupApi";


export async function joinGroup(groupCode:string){

    try{
        const response = await userJoinGroup(groupCode);
        return {
            "msg" : response.data.message,
            "msgType" : "normal",
            "isSent": true
        }
        
    }
    catch (e: any){
        
        return  {
            "msg" : e.response.data.message,
            "msgType" : "error",
            "isSent" : false
        }
    }

}