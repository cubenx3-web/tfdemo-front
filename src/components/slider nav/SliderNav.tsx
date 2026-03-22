import {MdSpaceDashboard} from "react-icons/md"
import { useNavigate } from "react-router-dom"
import "./SliderNav.css"
import { FaArrowRight } from "react-icons/fa";

function SliderNav(){

    const navigate = useNavigate();

    const navs = [
        {
            icon: <MdSpaceDashboard size={30}/>,
            nav:  "DashBoard",
            navLink: "/dashboard"
        },
        

    ]


    return(
     
        <div className="slider-container">
            
            <div className="slider-head">
                <h1>Slider head</h1>
            </div>

            <div className="slider-toggle">
                <FaArrowRight size={30}/>
            </div>

            <div className="nav-container">


                {
                    navs.map(
                        (nav, i) =>
                        (
                            <div
                                key={i} 
                                className="nav"
                                onClick={()=>navigate(nav.navLink)}
                            >
                                {nav.icon}
                                <h2>{nav.nav}</h2>
                            </div>
                        )
                    )
                }

                


            </div>
            
        </div>

    )

}

export default SliderNav;