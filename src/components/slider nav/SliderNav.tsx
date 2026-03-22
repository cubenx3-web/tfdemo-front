import {MdSpaceDashboard} from "react-icons/md"
import { useNavigate } from "react-router-dom"
import {  IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

import "./SliderNav.css"

function SliderNav(){

    const navigate = useNavigate();

    const navs = [
        {
            icon: <MdSpaceDashboard size={30}/>,
            nav:  "DashBoard",
            navLink: "/dashboard"
        },
        

    ]

    const [close, setClose] = useState<string>("");

    function sliderState(){
        setClose(
            (prev)=>(
                (prev==="")? "close":""
            )
        )
    }

    return(
     
        <div className="slider-container">
            
            <div className="slider-head">
                <h1>Slider head</h1>
            </div>

            <div className={`slider-toggle ${close}`}
                 onClick={sliderState}                    
            >
                <IoIosArrowBack size={30}/>
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