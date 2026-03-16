
import "./SignUpPage.css"

function SignUpPage(){

    return (
        
        <div className="sign-up-form">
                <div className="sign-up-head">
                  <h1 className="sign-head"> Sign up</h1>
                </div>

                <div className="sign-up-inputs">
                    <input 
                    type="text" 
                    className="sign-up-input" 
                    placeholder="Username..."
                    value={""}
                    />
                    <input 
                    type="email" 
                    className="sign-up-input" 
                    placeholder="Email Address..."
                    value={""}
                    />  
                    <input 
                    type="passowrd" 
                    className="sign-up-input" 
                    placeholder="Password..."
                    value={""}
                    />
                    <input 
                    type="password" 
                    className="sign-up-input" 
                    placeholder="Confirm Password..."
                    value={""}
                    />
                </div>

                <div className="sign-up-submit">
                    <button className="sign-up-btn">
                        Sign up
                    </button>
                </div>  

                

            </div>
                
    )

}


export default SignUpPage;