import { useState } from "react";
import { BiLogOut, BiMessage, BiTask, BiUser } from "react-icons/bi";
import { MdAdminPanelSettings, MdDashboard, MdGroup } from "react-icons/md";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { logout } from "../service/LogoutHandler";
import { HiFolderOpen, HiUserGroup } from "react-icons/hi2";
import { isAdmin } from "../store/Store";
import {  TbArrowBigLeftFilled } from "react-icons/tb";

type Props = {
    active: string
}
export default function SideNav(active: Props){

    const [slideState, setSlideState] = useState <string>("open");
    
    const {admin} = isAdmin();

    const sliderStyle: Record<string, {sliderIcon: string, sliderNav: string, navText: string, sliderIcon2:string}> = {
        "open": { 
            sliderIcon: "rotate-0",
            sliderNav: " w-50 max-md:w-60 rounded-xl",
            navText:"",
            sliderIcon2:"opacity-0"
        },
        "closed": {
            sliderIcon:" rotate-180 max-sm:hidden",
            sliderNav:" w-20 max-sm:-translate-x-3/2 rounded-4xl" ,
            navText:"opacity-0  hidden",
            sliderIcon2:"sm:hidden"
        },
    }

    function handleSlide(){
        setSlideState( (prev) =>
            (prev=="open")? "closed": "open"
        )
    }

    const navs = [
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

    const adminNav = [
        {
            nav: (admin)?"Admin Panel":null,
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
    ]




    return (
        <div className={` 
        sm:relative bg-slate-900 backdrop-blur-2xl h-[98%] transition-all duration-500 ease-in p-2 px-3  my-1 ml-2 justify-center text-center 
        ${sliderStyle[slideState].sliderNav}
        max-sm:absolute z-1  
        `}>
            <TbArrowBigLeftFilled size={20} 
                onClick={handleSlide}
                className={`
                absolute  text-white bg-slate-600/50  rounded-lg -translate-x-full left-full top-19 transition-transform duration-400 ease-out hover:bg-blue-500
                ${sliderStyle[slideState].sliderIcon} 
                `}
            /> 

            <GiHamburgerMenu size ={20}
                    onClick={handleSlide}
                    className={`
                    absolute  text-white bg-slate-900  rounded right-[-90%] top-[2%]  transition-opacity duration-300 ease-in  hover:bg-blue-500
                    ${sliderStyle[slideState].sliderIcon2} 
                `}
            />

            <div className="place-self-center">
                <div className="bg-slate-700 border-b-4 border border-t-slate-700 border-l-slate-700 border-r-slate-700 p-1 place-items-center rounded-full text-indigo-400 ring-5 ring-slate-700">
                    <BiUser size={40}/>
                </div>
            </div>             

           <div className="mt-10 origin-top  flex flex-col gap-2">
                {/* USER NAV LINKS */}
                <div 
                className="flex flex-col p-1 text-sm"
                >       
                    {
                        navs.map( (nav, key) =>
                            (
                                (nav.nav!==null)? 
                                <Link to={"/"+nav.nav.replace(" ","-")} key={key}
                                className={`flex gap-2  p-2 font-semibold text-white  hover:bg-linear-to-br hover:from-blue-400 hover:to-blue-600/40  rounded-lg  text-center items-center
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

                {/* ADMIN NAV LINKS */}
                <div 
                className={`flex flex-col  p-1 text-sm border-t border-white ${(admin)?"":"hidden"}`}
                >       
                    {
                        adminNav.map( (nav, key) =>
                            (
                                (nav.nav!==null)? 
                                <Link to={"/"+nav.nav.replace(" ","-")} key={key}
                                className={`flex gap-2  p-2 font-semibold text-white  hover:bg-linear-to-br hover:from-blue-400 hover:to-blue-600/40  rounded-lg  text-center items-center
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