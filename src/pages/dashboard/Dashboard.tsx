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
                        <h1>Dashboard</h1>
                    </div>

                    <div className="logout-container">
                        <button className="logout-btn" onClick={logout}>
                            logout
                        </button>
                    </div>
                    
                </div>

                <div className="dash-components">
                   <h1>Dashboard-containers</h1>
                </div>

            </div>
        </>
    )
}

export default Dashboard;