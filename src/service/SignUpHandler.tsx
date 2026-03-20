import { registerUser } from "../api/Auth"


export const signUpHandler = async (data: {username: string, email: string, password: string})=>{
     type resType = {
            error: boolean,
            message: string
        }

    try{
        const response = await registerUser(data);
        console.log(response.data.message);
       
        const res : resType = {
            error: false,
            message: response.data.message

        }
        return res
    }
    catch(e:any){
        const status:number = e.response?.status;
        const response = e.response?.data

        if(status === 409){
            console.log(response.message);
        }
        
        const res : resType = {
            error: true,
            message: response.message

        }
        return res
    }
    
}