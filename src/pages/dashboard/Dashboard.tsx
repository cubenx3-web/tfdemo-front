import "./Dashboard.css"
import SliderNav from "../../components/slider nav/SliderNav";
import Header from "../../components/header/Header";

function Dashboard(){

    

       

    return(
        <>
            <SliderNav page = "dashboard"/>

            <div className="dash-container">

                <Header title="Dashboard"/>
                

                <div className="components-container">
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