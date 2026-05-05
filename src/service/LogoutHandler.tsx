import { jwtDecode } from "jwt-decode";

export function logout(){
    localStorage.removeItem("token");
    window.location.href = "/login";
}

export function expTime(){
    const token = localStorage.getItem("token");

    if(token){
        const decode = jwtDecode(token);
        console.log(decode)
        
        const expTime = (Number(decode.exp)*1000) - Date.now()
        return expTime;
    }
    else{
        return 0
    }

}