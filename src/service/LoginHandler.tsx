import { loginUser } from "../api/Auth";


export const loginHandler = async (data: {email: string, password: string}) =>{ 
    try{
        const response = await loginUser(data)
        
        console.log(response.data);
        localStorage.setItem("token",response.data.token);
        return response.data.message;

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

        return data.message;
    } 
}