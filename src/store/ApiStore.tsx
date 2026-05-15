import {create} from "zustand"


type apiType = {
    localApi: string;
    onlineApi: string;
}

// http://localhost:8080/api/v1
// https://tfdemo.onrender.com/api/v1
const url = "https://tfdemo.onrender.com/api/v1" ;


export const apiUrl = create<apiType>(()=>({
    localApi: url,
    onlineApi: "https://tfdemo.onrender.com/api/v1"
}));

