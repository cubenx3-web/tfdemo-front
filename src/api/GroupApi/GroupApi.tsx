import axios from "axios";

const groupApi = "http://localhost:8080/api/v1/group"

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