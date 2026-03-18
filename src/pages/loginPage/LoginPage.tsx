import { useState } from "react";
import "./LoginPage.css";
import PopMsg from "../../components/PopMsg";
import {useNavigate } from "react-router-dom";

function LoginPage(){

    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isEmpty, setIsEmpty] = useState<boolean>(false)

    
    function inputHandler(event : React.ChangeEvent<HTMLInputElement>){
        
        (event.target.name === "email")?       
        setEmail(event.target.value)
        :null;
        
        (event.target.name === "password")?    
        setPassword(event.target.value)
        :null;

        setIsEmpty(false);
        
    }

    function onSubmit(){
        (!checkIsEmpty())?console.log(email, password): null;
    }

    function checkIsEmpty(){
      
      let result:boolean = (email==="" || password ==="")? true : false;
      if(result){
        setIsEmpty(false);
        setTimeout(()=>{
            setIsEmpty(true)
        }, 1); 
        
      }
      return result;
    }

    return (

        <>
            <div className="login-form">
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
                    value={email}
                    />  
                    <input 
                    type="password" 
                    name="password"
                    className="login-input" 
                    placeholder="Password..."
                    onChange={inputHandler}
                    value={password}
                    />
                    
                </div>

                <div className="login-submit">
                    <button className="login-btn" onClick={onSubmit}>
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
                        register
                    </button>
                </div>


    
            </div>

            <PopMsg show={isEmpty}/>   

        </>
        
                
    )

}


export default LoginPage;