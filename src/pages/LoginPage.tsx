import React, { useState, type FormEvent } from "react";
import { BiUser } from "react-icons/bi";
import {MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router";
import { loginHandler } from "../service/LoginHandler";
import { slideMsg } from "../store/ComponentState";
import { IsLoading } from "../store/IsLoading";


function LoginPage(){

    const navigate = useNavigate();
    type valueTypes = {
        email: string;
        password: string;
    };


    const [values, setValues] = useState<valueTypes>({email:"", password:""})


    //const popCon = useContext(PopMsgCon);
    const {setSlideMsg} = slideMsg();


    function inputHandler(event: React.ChangeEvent<HTMLInputElement>){
        setValues(
            (prev) => (
                {
                    ...prev,
                    [event.target.name] : event.target.value
                }
            )
        )

        setSlideMsg( {show:false, msg:"", msgType:"normal"} )

    }

    async function submitHandler(e:FormEvent){
        e.preventDefault(); 

        IsLoading.getState().isLoading(true)
        let login = await loginHandler(values);
        IsLoading.getState().isLoading(false);
        (login.isLogin)?( setSlideMsg( {
            show:true, 
            msg:login.message, 
            msgType:"normal"
        }))
        :setSlideMsg( {
            show:true, 
            msg:login.message, 
            msgType:"error"
        } );

        (login.isLogin)?(setTimeout(() => {
            navigate("/Dashboard")
        },100)):null

    }

    

    return (
        <>  
            {/* login page container */}
            <div className="flex flex-col relative gap-5 p-5 bg-slate-700/50 pb-5 translate-y-1/4 place-self-center  justify-center place-items-center rounded-xl">

                <div className="bg-slate-700 border-b-4 border border-t-slate-700 -my-5  border-l-slate-700 border-r-slate-700 p-1 rounded-full -translate-y-1/2 text-indigo-400 shadow-lg  shadow-olive-1 ring-5 ring-slate-700">
                    <BiUser size={65}/>
                </div>

                <h2 className=" font-semibold text-2xl text-indigo-400 text-center underline underline-offset-1">Login</h2>

                {/* Input */}
                <form onSubmit={submitHandler} className="flex flex-col justify-center text-blue-50 p-1 text-sm place-items-center space-y-5">

                    <div className="flex flex-col justify-center place-items-center gap-2">
                        <div className="flex justify-center place-items-center gap-2 border-2 border-gray-300/30 rounded-lg px-1">
                            <label className="font-medium text-lg flex place-items-center p-1 border-r border-gray-300" htmlFor="email">
                                <MdOutlineEmail size={20}/>
                            </label>
                            <input id="email" onChange={(inputHandler)} name="email"  value={values.email} className=" h-10 p-1 rounded flex-1  outline-gray-200/30" type="text" placeholder="Enter your email" required />
                        </div>

                        <div className="flex justify-center place-items-center gap-2 border-2 border-gray-300/30 rounded-lg px-1">
                            <label className="font-medium text-lg flex place-items-center p-1 border-r border-gray-300" htmlFor="password">
                                <MdLockOutline size={20}/>
                            </label>
                            <input id="password" onChange={(inputHandler)} name="password" className= " h-10 p-1 rounded flex-1 outline-gray-200/30" type="password" placeholder="Enter your password"/>
                        </div>
                    </div>
                    
                    
                    <div className="flex flex-col w-full gap-1 justify-center text-blue-50">
                        <button
                        type="submit"
                        className="bg-blue-500/50 hover:bg-blue-700 active:bg-gray-500 text-white p-2 rounded-lg font-semibold " >Login</button>
                        
                        <h1 className="flex justify-center ">New here?</h1>

                        <button 
                        type="button"
                        className="bg-blue-500/50
                        hover:bg-blue-700 active:bg-gray-500 text-white p-2 rounded-lg  font-semibold " 
                        onClick={()=>(navigate("/sign-up"))}
                        >Create an Account</button>
                        

                    </div>

                </form>                

            </div>  
            
        </>
    )
    

}

export default LoginPage;