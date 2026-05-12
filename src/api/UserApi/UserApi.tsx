import axios from "axios";

const userApi = "http://localhost:8080/api/v1/user"

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