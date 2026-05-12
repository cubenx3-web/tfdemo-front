

export function isAdmin(){
    const admin:boolean = JSON.parse(localStorage.getItem("isAdmin") || "false")

    return admin
}