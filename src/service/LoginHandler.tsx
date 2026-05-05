import { loginUser } from "../api/Auth";
import { jwtDecode } from "jwt-decode";


type tokenType = {
    admin : boolean,
    exp: Number,
    iat: Number,
    sub: String,
    username: String
}

export const loginHandler = async (data: {email: string, password: string}) =>{ 
    try{
        const response = await loginUser(data)
        
        console.log(response.data);
        localStorage.setItem("token",response.data.token);
        
        const decode = jwtDecode<tokenType>(response.data.token)
        localStorage.setItem("username", decode.username.toString())

        const isAdmin:boolean = decode.admin
         
        localStorage.setItem("isAdmin", JSON.stringify(isAdmin))
        
        return {
            isLogin:true,
            message:response.data.message 
        };

    }   
    catch(e: any){
        const status:number = (e.response.status);
        const data = (e.response.data)
        
        if(status === 404){
            console.log(data.message);
        }

        if(status === 401){
            console.log(data.message);
        }

        return {
            isLogin:false,
            message:data.message 
        };
    } 
}