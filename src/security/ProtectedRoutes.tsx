import { useEffect } from "react";
import {expTime, logout} from "../service/LogoutHandler"

function ProtectedRoutes({children}:any){
    useEffect( ()=>{
        if(expTime()>=0){
            setTimeout(logout, expTime());
        }
        else{
            logout()
        }
    } , [])

    return children;
}

export default ProtectedRoutes;