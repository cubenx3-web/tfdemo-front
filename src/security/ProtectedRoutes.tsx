import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { expTime, logout } from "../service/Logout";



function ProtectedRoutes ({children}:any){
    const token= localStorage.getItem("token");
    
    useEffect(
    ()=>{
      if(expTime()>0){
        setTimeout(logout, expTime());
      }
      else{
        logout()
      }
    },[])
    
    
    if(!token){
        return <Navigate to={"/login"}/>;
    }
    else{
        const decode = jwtDecode(token) 
        const expTime = (Number(decode.exp)*1000) - Date.now()

        setTimeout(()=>{<Navigate to={"/login"}/>},1000)

        if(expTime<=0){
            return <Navigate to={"/login"}/>
        }

        return children;
    }

    
}

export default ProtectedRoutes;