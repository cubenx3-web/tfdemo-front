import { useState, type FormEvent } from "react";
import "./SignUpPage.css"
import { useNavigate } from "react-router";
import PopMsg from "../../components/PopMsg";
import { signUpHandler } from "../../service/SignUpHandler";

function SignUpPage(){

    type valueType = {
        username: string,
        email: string,
        password: string,
        confirmPass: string
    }

    const [value, setValue] = useState<valueType>({
        username:"",
        email: "",
        password:"",
        confirmPass:""
    })


    const [isEmpty, setIsEmpty] = useState<boolean>(false)
    const [eMsg, setEMsg] = useState<string>("")
    const navigate = useNavigate();
    
    function inputHandler(event : React.ChangeEvent<HTMLInputElement>){
        
        setValue((prev)=>({...prev, [event.target.name]:event.target.value}));                
        setIsEmpty(false)

    }

    async function submitHandler(e:FormEvent ){
        e.preventDefault()
        
        
        if(!inputChecker()){
           const res:any = await signUpHandler(
                {
                    username: value.username, 
                    email: value.email, 
                    password: value.password
                }
            )

            console.log(res.error, res.message)

            if(!res.error){
                console.log(value.username, value.email, value.password, value.confirmPass) 
                setValue(
                    (prev)=>({...prev, username:"", email:"", password:"", confirmPass:""})
                )
                navigate("/login")
            }

            setIsEmpty(false);
            setEMsg(res.message);
            setTimeout(()=>{
            setIsEmpty(true)
            }, 10);

            
        }
        
    }

    function inputChecker():boolean{
      
      let result:boolean = false;
      if( !(value.password===value.confirmPass) ){

        setIsEmpty(false);
        setEMsg("Password does not match!");
        setTimeout(()=>{
            setIsEmpty(true)
        }, 10); 
        result = true;

      }
     
      if(value.password.length < 5){
         setIsEmpty(false);
        setEMsg("Use at least 6 characters!");
        setTimeout(()=>{
            setIsEmpty(true)
        }, 10);
        
        result = true;
      }


      return result;
    }

    


    
    return (

        <>
            <form className="sign-up-form" onSubmit={submitHandler}>
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
                    value={value.username}
                    required
                    />
                    <input 
                    type="email" 
                    name="email"
                    className="sign-up-input" 
                    placeholder="Email Address..."
                    onChange={inputHandler}
                    value={value.email}
                    required
                    />  
                    <input 
                    type="password" 
                    name="password"
                    className="sign-up-input" 
                    placeholder="Password..."
                    onChange={inputHandler}
                    value={value.password}
                    required
                    />
                    <input 
                    type="password"
                    name="confirmPass" 
                    className="sign-up-input" 
                    placeholder="Confirm Password..."
                    onChange={inputHandler}
                    value={value.confirmPass}
                    required
                    />
                </div>

                <div className="sign-up-submit">
                    
                    <button className="sign-up-btn" type="submit" >
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

            </form>

            <PopMsg show={isEmpty} msg={eMsg}/>

        </>
                
    )

}


export default SignUpPage;