import axios from "axios";

const userApi = "http://localhost:8080/api/v1/user"

const api = axios.create(
    {
        baseURL: userApi
    }

);

export  const getJoinedGroups = async() =>{

    const email = localStorage.getItem("email");

    return ( await api.get("/joined-group",
        {params: {email}}
    ) );
}

export  const getSummary = async() =>{

    const email = localStorage.getItem("email");

    return ( await api.get("/summary",
        {params: {email}}
    ) );
}