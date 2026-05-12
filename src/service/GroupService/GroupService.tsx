import { jwtDecode } from "jwt-decode";
import { createGroupApi, userJoinGroup } from "../../api/GroupApi/GroupApi";
import { isAdmin } from "../../store/Store";


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

export async function createGroup(groupName:string){
    try{    
        const response = await createGroupApi(groupName);
        localStorage.setItem("token", response.data.token);

        type tokenType = {
            admin : boolean,
            exp: Number,
            iat: Number,
            sub: String,
            username: String
        }

        const decode = jwtDecode<tokenType>(response.data.token)
        isAdmin.getState().setIsAdmin(decode.admin)

        return {
            "msg": response.data.message,
            "msgType": "success",
            "isSent": true
        }

    }catch(e:any){

        return {
            "msg":e.response.data.message,
            "msgType": "error",
            "isSent" : false
        }

    }
}