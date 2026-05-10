import { useContext, useState, type FormEvent } from "react";
import React from "react";
import { BiUser } from "react-icons/bi";
import { MdLockOutline, MdOutlineEmail, MdPassword } from "react-icons/md";
import { useNavigate } from "react-router";
import { signUpHandler } from "../service/SignUpHandler";
import { PopMsgCon } from "../context/PopMsgContext";

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


    
    const popCon = useContext(PopMsgCon);

    function inputHandler(event: React.ChangeEvent<HTMLInputElement>){
        setValues( (prev) =>(
            {  
                ...prev, 
                [event.target.name]: event.target.value 
            }
            )
        );

        popCon?.setUsePop( {show:false, msg:"", msgType:"normal"} );
    }

    async function submitHandler(e: FormEvent){
        e.preventDefault();

        const reg:any = (values.password === values.confirmPass && values.password.length >= 6 )? await signUpHandler({username:values.username, email:values.email, password:values.password}):null;
        
        (values.password.length < 6)? popCon?.setUsePop( {show:true, msg:"Use at least 6 Characters", msgType:"error"} ): 
        (values.password!==values.confirmPass)?popCon?.setUsePop( {show:true, msg:"Passwords do not match", msgType:"error"} ):
        (reg!==null)?popCon?.setUsePop( {show:true, msg:reg.message, msgType:((reg.isReg)?"success": "error")} ): null;
        
        
        
        (reg!==null && reg.isReg )? setTimeout(()=>{navigate("/login")},2000):null;
        

    }

    return (
        <>
            {/* login page container */}
                        <div className="flex-col relative space-y-5 bg-white px-6 py-10  justify-center place-items-center rounded-xl">

                            <div className="bg-white border-b-4 border-t-2 border-t-white p-3 rounded-full absolute -top-10 text-blue-700">
                                <BiUser size={70}/>
                            </div>

                            <h2 className=" font-semibold text-2xl text-blue-600 text-center mt-10">Sign Up</h2>
            
                            {/* Input */}
                            <form
                            onSubmit={submitHandler} 
                            className="flex-col justify-center place-items-center space-y-7">
            
                                <div className="flex-col w-full justify-center place-items-center space-y-3">
                                    <div className="flex w-full justify-center place-items-center space-x-2 border border-gray-300 rounded-2xl px-2">
                                        <label className="font-medium text-lg flex place-items-center p-1 border-r border-gray-300" htmlFor="text">
                                            <BiUser size={20}/>
                                        </label>
                                        <input id="text" name="username" onChange={inputHandler} value={values.username} className=" h-10 p-2 rounded flex-1 outline-blue-300" type="text" placeholder="Enter your username" required />
                                    </div>

                                    <div className="flex w-full justify-center place-items-center space-x-2 border border-gray-300 rounded-2xl px-2">
                                        <label className="font-medium text-lg flex place-items-center p-1 border-r border-gray-300" htmlFor="email">
                                            <MdOutlineEmail size={20}/>
                                        </label>
                                        <input id="email" name="email" onChange={inputHandler} value={values.email} className=" h-10 p-2 rounded flex-1 outline-blue-300" type="text" placeholder="Enter your email" required />
                                    </div>
            
                                    <div className="flex w-full justify-center place-items-center space-x-2 border border-gray-300 rounded-2xl px-2">
                                        <label className="font-medium text-lg flex place-items-center p-1 border-r border-gray-300" htmlFor="password">
                                            <MdLockOutline size={20}/>
                                        </label>
                                        <input id="password" name="password" onChange={inputHandler} value={values.password} className= " h-10 p-2 rounded flex-1 outline-blue-300" type="password" placeholder="Enter your password"/>
                                    </div>

                                    <div className="flex w-full justify-center place-items-center space-x-2 border border-gray-300 rounded-2xl px-2">
                                        <label className="font-medium text-lg flex place-items-center p-1 border-r border-gray-300" htmlFor="confirm-pass">
                                            <MdPassword size={20}/>
                                        </label>
                                        <input id="confirm-pass" name="confirmPass" onChange={inputHandler} value={values.confirmPass} className= " h-10 p-2 rounded flex-1 outline-blue-300" type="password" placeholder="Confirm password"/>
                                    </div>
                                </div>
                                
                                
                                <div className="flex-col w-full space-y-2 justify-center">
                                    <button className="bg-blue-500 hover:bg-blue-700 active:bg-gray-500 text-white p-1.5 rounded-4xl w-full font-semibold text-lg" >Sign Up</button>
                                    <br />
                                    <h1 className="w-full flex justify-center ">or</h1>
            
                                    <button className="bg-blue-500
                                    hover:bg-blue-700 active:bg-gray-500 text-white p-1.5 rounded-4xl w-full font-semibold text-lg" 
                                    onClick={()=>(navigate("/login"))}
                                    >I Have an Account</button>
                                    
            
                                </div>
            
                            </form>
            
                        </div>

        </>
    )
}

export default SignUpPage;