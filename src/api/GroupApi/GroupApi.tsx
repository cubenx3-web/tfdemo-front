import axios from "axios";
import { apiUrl } from "../../store/ApiStore";

const groupApi = apiUrl.getState().localApi+"/group"

const api = axios.create(
    {
        baseURL: groupApi
    }
)

export async function userJoinGroup(groupCode:string){

    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    return ( await api.post("/join",
        
        {
                    "email" : email,
                    "groupCode" : groupCode
        },

        {
            headers:{
                        Authorization: `Bearer ${token?.toString()}`
                    },      
        },

        
    ) );
   

}

export async function createGroupApi(groupName:string){

    const email = localStorage.getItem("email")
    const token = localStorage.getItem("token")

    return ( await api.post("/create",
        {
            "email":email,
            "groupName":groupName
        },
        {
            headers:{
                        Authorization: `Bearer ${token?.toString()}`
                    }
        }
    )
        
    )

}