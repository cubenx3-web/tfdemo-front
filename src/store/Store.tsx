import { jwtDecode } from 'jwt-decode';
import {create} from 'zustand'


type SetIsAdminType = {
    admin: boolean|null;
    setIsAdmin: (admin: boolean |null) => void
};

type tokenType = {
    admin : boolean,
    exp: Number,
    iat: Number,
    sub: String,
    username: String
}

const token = localStorage.getItem("token")
const decodeToken = token ? jwtDecode<tokenType>(token ):null

export const isAdmin  = create<SetIsAdminType>((set)=>({
    admin: decodeToken?.admin || false,
    setIsAdmin: (admin) => set({admin:admin}),

}));