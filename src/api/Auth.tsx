import axios from "axios";
import { apiUrl } from "../store/ApiStore";


const API = axios.create({
    baseURL: apiUrl.getState().localApi+"/auth"
});

// LOGIN 
export const loginUser = ( data: {email:string, password:string}) =>{
    return API.post("/login",data)
}

// REGISTRATION
export const registerUser = (data: {username:string, email:string, password:string}) =>{
    return API.post("/register",data)
}