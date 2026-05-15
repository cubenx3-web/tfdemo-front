import { registerUser } from "../api/Auth"
import { IsLoading } from "../store/IsLoading";


export const signUpHandler = async (data: {username: string, email: string, password: string})=>{
     type resType = {
            isReg: boolean,
            message: string
        }

    try{
        const response = await registerUser(data);
        console.log(response.data.message);
       
        const res : resType = {
            isReg: true,
            message: response.data.message

        }
        IsLoading.getState().isLoading(false)
        return res
    }

    catch(e:any){
        const status:number = e.response?.status;
        const response = e.response?.data
        IsLoading.getState().isLoading(false)
        if(status === 409){
            console.log(response.message);
        }
        
        const res : resType = {
            isReg: false,
            message: response.message

        }
        return res
    }
    
}