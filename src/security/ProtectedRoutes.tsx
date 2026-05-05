import { useEffect } from "react";
import {expTime, logout} from "../service/LogoutHandler"

function ProtectedRoutes({children}:any){
    useEffect( ()=>{
        if(expTime()>=0){
            setTimeout(logout, expTime());
        }
        else{
            setTimeout(logout, 3600000);
        }
    } , [])

    return children;
}

export default ProtectedRoutes;