import { MdGroups, MdLocalActivity, MdMessage, MdSpaceDashboard, MdTask} from "react-icons/md"
import { useNavigate } from "react-router-dom"
import {  IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

import "./SliderNav.css"

type propType = {
    page: string,
}


function SliderNav( {page } : propType ){

    const navigate = useNavigate();

    const navs = [
        {
            icon: <MdSpaceDashboard size={30}/>,
            nav:  "Dashboard",
            navLink: "/dashboard",
        },
        {
            icon: <MdGroups size={30}/>,
            nav: "Group",
            navLink: "/group", 
        },
        {
            icon: <MdTask size={30}/>,
            nav: "Tasks",
            navLink: "/tasks", 
        },
        {
            icon: <MdMessage size={30}/>,
            nav: "Messages",
            navLink: "/messages",
        },
        {
            icon: <MdLocalActivity size={30}/>,
            nav: "Activities",
            navLink: "/activities",
        }
        

    ]

    const [close, setClose] = useState<boolean>(false);

    function sliderState(){
        setClose(
            (prev)=>(
                (prev===true)? false:true
            )
        )
    }

    return(
     
        <div className={`slider-container ${(close)?"slider-close":""}`}>
            
            <div className="slider-head">
                <h1>TF</h1>
            </div>

            <div className={`slider-toggle ${(close)?"close":""}`}
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
                                className={`nav 
                                        ${(page.trim().toLowerCase() === nav.nav.trim().toLowerCase())?"active":""}
                                    `}
                                onClick={()=>navigate(nav.navLink)}
                            >
                                {nav.icon}
                                <h3>{nav.nav}</h3>
                            </div>
                        )
                    )
                }

                


            </div>
            
        </div>

    )

}

export default SliderNav;