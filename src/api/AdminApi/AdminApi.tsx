import axios from "axios";
import { apiUrl } from "../../store/ApiStore";

const adminApi = apiUrl.getState().localApi+"/admin"

const api = axios.create(
    {
        baseURL: adminApi
    }
)

export const getAdminSummary = async () =>{
    const email = localStorage.getItem("email")
    const token = localStorage.getItem("token")

    return ( await api.get("/summary",
        {
            headers:{
                Authorization: `Bearer ${token?.toString()}`
            },
            params: {email}
        },
    )

    )
}

