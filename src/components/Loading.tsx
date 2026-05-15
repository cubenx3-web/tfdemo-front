import { IsLoading } from "../store/IsLoading"




export default function Loading(){

    const {loading} = IsLoading();

    return (
        <div className={`absolute  text-2xl top-1/2 left-1/2 bg-white p-2 rounded transition-all animate-ping ${(loading)?" -translate-x-1/2 scale-70":"scale-0"}`}>
            loading...
        </div>
    )
}