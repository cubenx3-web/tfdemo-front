import axios from "axios";
import { apiUrl } from "../../store/ApiStore";

const userApi = apiUrl.getState().localApi+"/user"

const api = axios.create(
    {
        baseURL: userApi
    }

);

export  const getGroups = async() =>{

    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    

    return ( await api.get("/groups",
        {
            
            headers:{
                        Authorization: `Bearer ${token?.toString()}`
                    },
            params: {email}
            
        },
        
    ) );
}

export  const getSummary = async() =>{

    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");


    return ( await api.get("/summary",
        {
            headers:{
                        Authorization: `Bearer ${token?.toString()}`
                    },
            params: {email}
        },
    ) );
}

export async function leaveGroupApi(groupCode:string){
    
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");


    return ( await api.put("/leave-group",
       
        {
            "email":email,
            "groupCode":groupCode
        },

        {
            headers:{
                Authorization: `Bearer ${token?.toString()}`
                }
        }
    
    ))
}

// CANCEL REQUEST
export async function cancelGroupRequestApi(groupCode:string){
    
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");


    return ( await api.put("/cancel-request",
       
        {
            "email":email,
            "groupCode":groupCode
        },

        {
            headers:{
                Authorization: `Bearer ${token?.toString()}`
                }
        }
    
    ))
}