import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api/v1/auth"
});

// LOGIN 
export const loginUser = ( data: {email:string, password:string}) =>{
    return API.post("/login",data)
}

// REGISTRATION
export const registerUser = (data: {username:string, email:string, password:string}) =>{
    return API.post("/register",data)
}