import { useState } from "react";
import "./SignUpPage.css"
import { useNavigate } from "react-router";
import PopMsg from "../../components/PopMsg";

function SignUpPage(){

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPass, setConfirmPass] = useState<string>();
    const [isEmpty, setIsEmpty] = useState<boolean>(false)
    const navigate = useNavigate();
    
    function inputHandler(event : React.ChangeEvent<HTMLInputElement>){
        (event.target.name === "username")?     
        setUsername(event.target.value)
        :null;
        
        (event.target.name === "email")?       
        setEmail(event.target.value)
        :null;
        
        (event.target.name === "password")?    
        setPassword(event.target.value)
        :null;
        
        (event.target.name === "confirmPass")? 
        setConfirmPass(event.target.value)
        :null;
        
        setIsEmpty(false)

    }

    function submitHandler(){
        
        if(!checkIsEmpty()){

            console.log(username, email, password, confirmPass) 
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPass("");
        };
        
    }

    function checkIsEmpty(){
      
      let result:boolean = (username=="" || email==="" || password ==="" || confirmPass==="")? true : false;
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
            <div className="sign-up-form">
                <div className="sign-up-head">
                  <h1 className="sign-head"> Sign up</h1>
                </div>

                <div className="sign-up-inputs">
                    <input 
                    type="text" 
                    name="username"
                    className="sign-up-input" 
                    placeholder="Username..."
                    onChange={inputHandler}
                    value={username}
                    />
                    <input 
                    type="email" 
                    name="email"
                    className="sign-up-input" 
                    placeholder="Email Address..."
                    onChange={inputHandler}
                    value={email}
                    />  
                    <input 
                    type="password" 
                    name="password"
                    className="sign-up-input" 
                    placeholder="Password..."
                    onChange={inputHandler}
                    value={password}
                    />
                    <input 
                    type="password"
                    name="confirmPass" 
                    className="sign-up-input" 
                    placeholder="Confirm Password..."
                    onChange={inputHandler}
                    value={confirmPass}
                    />
                </div>

                <div className="sign-up-submit">
                    <button className="sign-up-btn" onClick={submitHandler}>
                        Sign Up
                    </button>
                </div>  
                
                <div>
                    <h5>
                        or
                    </h5>
                </div>

                <div >
                    <button className="login-btn" onClick={() => (navigate("/login"))}>
                        Already have an account
                    </button>
                </div>

            </div>

            <PopMsg show={isEmpty}/>

        </>
                
    )

}


export default SignUpPage;