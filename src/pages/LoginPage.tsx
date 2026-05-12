import React, { useContext, useState, type FormEvent } from "react";
import { BiUser } from "react-icons/bi";
import {MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router";
import { loginHandler } from "../service/LoginHandler";
import { PopMsgCon } from "../context/PopMsgContext";


function LoginPage(){

    const navigate = useNavigate();
    type valueTypes = {
        email: string;
        password: string;
    };


    const [values, setValues] = useState<valueTypes>({email:"", password:""})


    const popCon = useContext(PopMsgCon);


    function inputHandler(event: React.ChangeEvent<HTMLInputElement>){
        setValues(
            (prev) => (
                {
                    ...prev,
                    [event.target.name] : event.target.value
                }
            )
        )

        popCon?.setUsePop( {show:false, msg:"", msgType:"normal"} )

    }

    async function submitHandler(e:FormEvent){
        e.preventDefault(); 

        let login = await loginHandler(values);
        
        (login.isLogin)?( popCon?.setUsePop( {show:true, msg:login.message, msgType:"normal"} ) ): popCon?.setUsePop( {show:true, msg:login.message, msgType:"error"} );

        (login.isLogin)?(setTimeout(() => {navigate("/Dashboard")},1000)):null

    }

    

    return (
        <>  
            {/* login page container */}
            <div className="flex-col relative space-y-5  bg-white p-3 pb-5 pt-10  justify-center place-items-center rounded-xl">

                <div className="bg-white border-b-4 border-t-2 border-t-white p-3 rounded-full absolute -top-10 text-blue-700">
                    <BiUser size={70}/>
                </div>

                <h2 className=" font-semibold text-2xl text-blue-600 text-center mt-10">Login</h2>

                {/* Input */}
                <form onSubmit={submitHandler} className="flex flex-col justify-center p-1 text-sm place-items-center space-y-5">

                    <div className="flex flex-col justify-center place-items-center space-y-3">
                        <div className="flex justify-center place-items-center space-x-2 border border-gray-300 rounded-lg px-1">
                            <label className="font-medium text-lg flex place-items-center p-1 border-r border-gray-300" htmlFor="email">
                                <MdOutlineEmail size={20}/>
                            </label>
                            <input id="email" onChange={(inputHandler)} name="email"  value={values.email} className=" h-10 p-1 rounded flex-1 outline-blue-300" type="text" placeholder="Enter your email" required />
                        </div>

                        <div className="flex justify-center place-items-center space-x-2 border border-gray-300 rounded-lg px-1">
                            <label className="font-medium text-lg flex place-items-center p-1 border-r border-gray-300" htmlFor="password">
                                <MdLockOutline size={20}/>
                            </label>
                            <input id="password" onChange={(inputHandler)} name="password" className= " h-10 p-1 rounded flex-1 outline-blue-300" type="password" placeholder="Enter your password"/>
                        </div>
                    </div>
                    
                    
                    <div className="flex flex-col w-full space-y-1 justify-center">
                        <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 active:bg-gray-500 text-white p-2 rounded-lg font-semibold " >Login</button>
                        
                        <h1 className="flex justify-center ">New here?</h1>

                        <button className="bg-blue-500
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