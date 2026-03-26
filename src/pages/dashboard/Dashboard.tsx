import { useNavigate } from "react-router";
import "./Dashboard.css"
import SliderNav from "../../components/slider nav/SliderNav";

function Dashboard(){

    let navigate = useNavigate();

    function logout(){
        localStorage.removeItem("token");
        navigate("/login");
    }   

    return(
        <>
            <SliderNav/>

            <div className="dash-container">

                <div className="dash-head"> 


                    <div className="dash-title">
                        <h2>Dashboard</h2>
                    </div>

                    <div className="logout-container">
                        <button className="logout-btn" onClick={logout}>
                            logout
                        </button>
                    </div>
                    
                </div>

                <div className="dash-components">
                   <div className="group-container">
                        <div className="joined-group-container">

                        </div>
                        <div className="pending-join-container">

                        </div>
                        <div className="rejected-join-containder">

                        </div>
                        
                   </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard;