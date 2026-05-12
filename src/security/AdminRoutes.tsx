
function AdminRoutes({children}:any){

    const isAdmin: boolean = JSON.parse(localStorage.getItem("isAdmin") || "false");

    console.log("isAdmin:", isAdmin)
    if(isAdmin){
        return children
    }
    else{
        window.location.href = "/Dashboard"
    }



}

export default AdminRoutes;