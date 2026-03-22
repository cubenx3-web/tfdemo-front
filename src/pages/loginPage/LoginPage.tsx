import { useState, type FormEvent } from "react";
import "./LoginPage.css";
import PopMsg from "../../components/pop msg/PopMsg";
import {useNavigate } from "react-router-dom";
import { loginHandler } from "../../service/LoginHandler";

function LoginPage(){

    const navigate = useNavigate();

    


    const [eMsg, setEMsg] = useState<string>("")
    const [isEmpty, setIsEmpty] = useState<boolean>(false)
    const [msgType, setMsgType] = useState<string>("error-msg")

    type valueType = {
        email: string
        password: string

    }

    const [values, setValues] = useState <valueType>({email:"", password:""});

    
    function inputHandler(event : React.ChangeEvent<HTMLInputElement>){
        
        
        setValues((prev)=>({
            ...prev, 
            [event.target.name] : event.target.value
        }
        ));
        setIsEmpty(false);
        
    }

    async function onSubmit(e: FormEvent){
        

        e.preventDefault();
        console.log(values.email, values.password)
        let login = await loginHandler({email:values.email, password:values.password })
        if(login.isLogin){
            setIsEmpty(false);
            setEMsg("Login Successfully");
            setMsgType("normal-msg")
            setTimeout(()=>{
                setIsEmpty(true)
            }, 1);

            setTimeout(()=>{navigate("/dashboard") }, 1000)
            
        }
        else{               
            setIsEmpty(false);
            setEMsg(login.message);
            setMsgType("error-msg")
            setTimeout(()=>{
                setIsEmpty(true)
            }, 10);    
        }
    }

    

    return (

        <>
            <form onSubmit={onSubmit}  className="login-form">
                <div className="login-head">
                  <h1 className="login-head">Login</h1>
                </div>

                <div className="login-inputs">
                   
                    <input 
                    type="email" 
                    name="email"
                    className="login-input" 
                    placeholder="Email Address..."
                    onChange={inputHandler}
                    value={values.email}
                    required
                    />  
                    <input 
                    type="password" 
                    name="password"
                    className="login-input" 
                    placeholder="Password..."
                    onChange={inputHandler}
                    value={values.password}
                    required

                    />
                    
                </div>

                <div className="login-submit">
                    <button className="login-btn" type="submit">
                        Login
                    </button>
                </div>
                
                <div>
                    <h5>
                        or
                    </h5>
                </div>

                <div>
                    <button className="reg-btn" onClick={() => (navigate("/sign-up"))}>
                        Create Account
                    </button>
                </div>


    
            </form>

            <PopMsg show={isEmpty} msg={eMsg} msgType={msgType}/>   

        </>
        
                
    )

}


export default LoginPage;