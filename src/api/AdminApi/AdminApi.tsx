import axios from "axios";

const adminApi = "http://localhost:8080/api/v1/admin"

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

