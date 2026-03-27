
import { logout } from "../../service/Logout";
import "./Header.css";

type header ={
    title: string
}

function Header({title} : header){

    

    return (
        <div className="head"> 


            <div className="title">
                <h2>{title}</h2>
            </div>

            <div className="logout-container">
                <button className="logout-btn" onClick={logout}>
                    logout
                </button>
            </div>
                    
        </div>
    )

}

export default Header;