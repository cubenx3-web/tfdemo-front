import { useState, type FormEvent } from "react";
import React from "react";
import { BiUser } from "react-icons/bi";
import { MdLockOutline, MdOutlineEmail, MdPassword } from "react-icons/md";
import { useNavigate } from "react-router";
import { signUpHandler } from "../service/SignUpHandler";
import { slideMsg } from "../store/ComponentState";
import { IsLoading } from "../store/IsLoading";

function SignUpPage(){

    const navigate = useNavigate();
    type valuesType = {
        username: string,
        email: string,
        password: string,
        confirmPass: string
    }
    
    const [values, setValues] = useState<valuesType>({
        username:"", email: "", password:"", confirmPass:""
    })



    const {setSlideMsg} = slideMsg();

    function inputHandler(event: React.ChangeEvent<HTMLInputElement>){
        setValues( (prev) =>(
            {  
                ...prev, 
                [event.target.name]: event.target.value 
            }
            )
        );

       setSlideMsg( {show:false, msg:"", msgType:"normal"} );
    }

    async function submitHandler(e: FormEvent){
        e.preventDefault();

        IsLoading.getState().isLoading(false)
        const reg:any = (values.password === values.confirmPass && values.password.length >= 6 )? await signUpHandler({username:values.username, email:values.email, password:values.password}):null;
        
        (values.password.length < 6)? setSlideMsg( {show:true, msg:"Use at least 6 Characters", msgType:"error"} ): 
        (values.password!==values.confirmPass)? setSlideMsg( {show:true, msg:"Passwords do not match", msgType:"error"} ):
        (reg!==null)? setSlideMsg( {show:true, msg:reg.message, msgType:((reg.isReg)?"success": "error")} ): null;
        
        
        
        (reg!==null && reg.isReg )? setTimeout(()=>{navigate("/login")},2000):null;
        

    }

    return (
        <>
            {/* login page container */}
                        <div className="flex flex-col relative gap-5 p-5 bg-slate-700/50 pb-5  justify-center place-items-center rounded-xl">

                            <div className="bg-slate-700 border-b-4 border border-t-slate-700 border-l-slate-700 -my-5 border-r-slate-700 p-1 rounded-full -translate-y-1/2 text-indigo-400 shadow-lg  shadow-olive-1 ring-5 ring-slate-700">
                                <BiUser size={65} className=""/>
                            </div>

                            <h2 className=" font-semibold text-2xl text-indigo-400 text-center underline underline-offset-1">Sign Up</h2>
            
                            {/* Input */}
                            <form
                            onSubmit={submitHandler} 
                            className="flex flex-col justify-center text-blue-50 p-1 text-sm place-items-center gap-5">
            
                                <div className="flex flex-col justify-center place-items-center gap-2">
                                    <div className="flex justify-center place-items-center gap-2 border-2 border-gray-300/30 rounded-lg px-1">
                                        <label className="font-medium text-lg flex place-items-center p-1 border-r border-gray-300" htmlFor="text">
                                            <BiUser size={20}/>
                                        </label>
                                        <input id="text" name="username" onChange={inputHandler} value={values.username} className=" h-10 p-1 rounded flex-1 outline-gray-200/30" type="text" placeholder="Enter your username" required />
                                    </div>

                                    <div className="flex justify-center place-items-center gap-2 border-2 border-gray-300/30 rounded-lg px-1">
                                        <label className="font-medium text-lg flex place-items-center p-1 border-r border-gray-300" htmlFor="email">
                                            <MdOutlineEmail size={20}/>
                                        </label>
                                        <input id="email" name="email" onChange={inputHandler} value={values.email} className=" h-10 p-1 rounded flex-1 outline-gray-200/30" type="text" placeholder="Enter your email" required />
                                    </div>
            
                                    <div className="flex justify-center place-items-center gap-2 border-2 border-gray-300/30 rounded-lg px-1">
                                        <label className="font-medium text-lg flex place-items-center p-1 border-r border-gray-300" htmlFor="password">
                                            <MdLockOutline size={20}/>
                                        </label>
                                        <input id="password" name="password" onChange={inputHandler} value={values.password} className= " h-10 p-1 rounded flex-1 outline-gray-200/30" type="password" placeholder="Enter your password"/>
                                    </div>

                                    <div className="flex justify-center place-items-center gap-2 border-2 border-gray-300/30 rounded-lg px-1">
                                        <label className="font-medium text-lg flex place-items-center p-1 border-r border-gray-300" htmlFor="confirm-pass">
                                            <MdPassword size={20}/>
                                        </label>
                                        <input id="confirm-pass" name="confirmPass" onChange={inputHandler} value={values.confirmPass} className= " h-10 p-1 rounded flex-1 outline-blue-300" type="password" placeholder="Confirm password"/>
                                    </div>
                                </div>
                                
                                
                                <div className="flex flex-col w-full gap-1 justify-center">
                                    <button type="submit" className="bg-blue-500/50 hover:bg-blue-700 active:bg-gray-500 text-white p-2 rounded-lg  font-semibold" >Sign Up</button>
                                    
                                    <h1 className="flex justify-center ">or</h1>
            
                                    <button type="button" className="bg-blue-500/50
                                    hover:bg-blue-700 active:bg-gray-500 text-white p-2 rounded-lg  font-semibold " 
                                    onClick={()=>(navigate("/login"))}
                                    >I Have an Account</button>
                                    
            
                                </div>
            
                            </form>
            
                        </div>

        </>
    )
}

export default SignUpPage;