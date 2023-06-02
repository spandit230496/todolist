import { BarChartOutlined, BrowserUpdated, CandlestickChart, ChromeReaderMode, DarkMode, Dashboard, DashboardRounded, Language, LightMode, Share, WestOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<DashboardRounded/>
        },
        {
            path:"/about",
            name:"Section 1",
            icon:<FaRegChartBar/>
        },
        {
            path:"/analytics",
            name:"Section 2",
            icon:<CandlestickChart/>
        },
        {
            path:"/comment",
            name:"Section 3",
            icon:<Share/>
        },
        {
            path:"/product",
            name:"Section 3",
            icon:<Share/>
        }
       
    ]
    return (
        <div className="container">
           <div style={{width:  "20%" }} className="sidebar">
               <div className="top_section">
                   <h1 style={{display:"block" }} className="logo">Name</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <WestOutlined />
                   </div>
               </div>
               <div className='navlink'>
                <div>
               {   
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display:"block" }} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
                   
               }
               </div>
               <div className='bottombtn'>
                <div className='btn'>
                <button>$0.90</button>
                <button>Buy XYZ</button>
                </div>
                <div className='mode'>
                    <Language/>
                    <div className='screenmode'>
                        <DarkMode/>
                        <LightMode/>
                    </div>
                </div>
               </div>
               </div>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;