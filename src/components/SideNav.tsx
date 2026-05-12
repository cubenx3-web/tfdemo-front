import { useState } from "react";
import { BiLogOut, BiMessage, BiTask } from "react-icons/bi";
import { CgArrowLeft } from "react-icons/cg";
import { MdAdminPanelSettings, MdDashboard, MdGroup } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from"../../images/logo1.png" 
import { GiHamburgerMenu } from "react-icons/gi";
import { logout } from "../service/LogoutHandler";
import { isAdmin } from "../hooks/AboutUser";
import { HiFolderOpen, HiUserGroup } from "react-icons/hi2";

type Props = {
    active: string
}
export default function SideNav(active: Props){

    const [slideState, setSlideState] = useState <string>("closed");
    
    

    const sliderStyle: Record<string, {sliderIcon: string, sliderNav: string, navText: string, sliderIcon2:string}> = {
        "open": { 
            sliderIcon: "rotate-0",
            sliderNav:"md:flex-3 w-[70%] max-sm:left-[5%] max-sm:w-[80%]",
            navText:"",
            sliderIcon2:"opacity-0"
        },
        "closed": {
            sliderIcon:"rotate-180 max-sm:hidden",
            sliderNav:"md:flex-1 w-[20%] max-sm:-left-[30%] " ,
            navText:"opacity-0 hidden",
            sliderIcon2:"sm:hidden"
        },
    }

    function handleSlide(){
        setSlideState( (prev) =>
            (prev=="open")? "closed": "open"
        )
    }

    const admin = isAdmin();
    

    const navs = [
        {
            nav: (admin)?"Admin":null,
            icon:<MdAdminPanelSettings size={20}/>
        },
        {
            nav: (admin)?"Projects":null,
            icon: <HiFolderOpen size={20}/>
        },
        {
            nav: (admin)?"Manage Groups":null,
            icon: <HiUserGroup size={20}/>
        },
        {
            nav: "Dashboard",
            icon: <MdDashboard size={20}/>
        },
        {   
            nav: "Groups",
            icon: <MdGroup size={20}/>
        },
        {
            nav:"Tasks",
            icon:<BiTask size={20}/>
        },
        {
            nav:"Messages",
            icon:<BiMessage size={20}/>
        },
        
    ]




    return (
        <div className={` 
        sm:relative sm:flex bg-blue-500/70 backdrop-blur-2xl h-[98%] transition-all duration-500 ease-in p-2  rounded-xl my-1 ml-2 justify-center text-center 
        ${sliderStyle[slideState].sliderNav}
        max-sm:absolute z-1 max-sm:duration-500 
        `}>
            <CgArrowLeft size={25} 
                onClick={handleSlide}
                className={`
                absolute  text-white bg-blue-500 p-1 rounded-lg -right-2 top-22 transition-all duration-400 ease-in border hover:bg-blue-950
                ${sliderStyle[slideState].sliderIcon} 
                `}
            /> 

            <GiHamburgerMenu size ={25}
                    onClick={handleSlide}
                    className={`
                    absolute  text-white bg-blue-500 p-1 rounded-lg right-[-90%] top-[2%]  transition-all duration-400 ease-in hover:bg-blue-950
                    ${sliderStyle[slideState].sliderIcon2} 
                `}
            />


            <div className="flex-col place-items-center space-y-10">
                <img src={logo} alt="Logo" className="w-15 h-15 rounded-full"/>
            </div>
            
            {/* NAV LINKS */}
            <div 
            className="absolute w-[90%] space-y-1 -translate-x-1/2 left-1/2 top-1/5 flex-col place-items-center p-1 justify-center text-lg"
            >

                    

                {
                    navs.map( (nav, key) =>
                    (
                       (nav.nav!==null)? 
                        <Link to={"/"+nav.nav.replace(" ","-")} key={key}
                                className={`flex gap-2  p-2 w-[101%] font-semibold text-white  hover:bg-linear-to-br hover:from-blue-400 hover:to-blue-600/40  rounded-lg text-[15px] text-center items-center
                                ${(slideState ==="closed")?"justify-center":""}    
                                ${(nav.nav===active.active)?"bg-linear-to-tr from-cyan-600/60  to-green-600/40  rounded-lg ":""}`  }
                            > 
                                {nav.icon} 
                        
                            <div className={` `+sliderStyle[slideState].navText}>{nav.nav}</div>  
                        
                        </Link>:null
                    )
                    )
                }
            </div>


            {/* logout button */}
            <div 
            onClick={logout}
            className={`
                absolute text-red-500 bottom-[1%] left-1/2 -translate-1/2 w-full flex justify-center space-x-2 cursor-pointer hover:bg-blue-100 
                py-2 active:bg-blue-300
            `}
            title="logout"
            >
                <BiLogOut size={30}/>
                <div 
                className={`font-bold ${sliderStyle[slideState].navText}  `}
                >Logout</div>
            </div>
        </div>
    )
}