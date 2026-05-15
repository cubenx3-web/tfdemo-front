import {create} from "zustand";

type LoadingType ={
    loading:boolean;
    isLoading: (loading:boolean) => void
}

export const IsLoading = create<LoadingType>((set)=>(
    {
        loading: false,
        isLoading: (loading)=>set({loading:loading})

    }
))