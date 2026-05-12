import { isAdmin } from "../store/Store";

function AdminRoutes({children}:any){

    const {admin} = isAdmin();

    

    console.log("isAdmin:", isAdmin)
    if(admin){
        return children
    }
    else{
        window.location.href = "/Dashboard"
    }



}

export default AdminRoutes;