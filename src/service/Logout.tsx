import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

export const logout = () =>{
    localStorage.removeItem("token");
    window.location.href = "/login";
    <Navigate to={"/login"}/>
}

export function expTime () {

    const token = localStorage.getItem("token")
    
    if(token){
        const decode = jwtDecode(token) 
        const expTime = (Number(decode.exp)*1000) - Date.now()
        return 50000;
    }
    else{
        return 0;
    }

}