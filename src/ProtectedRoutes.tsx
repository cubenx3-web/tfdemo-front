import { Navigate } from "react-router-dom";


function ProtectedRoutes ({children}:any){
    const token= localStorage.getItem("token");
    console.log(token)
    if(!token){
        return <Navigate to={"/login"}/>;
    }

    return children;
}

export default ProtectedRoutes;