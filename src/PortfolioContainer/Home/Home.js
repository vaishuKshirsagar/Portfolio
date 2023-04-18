import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import './Home.css';
import Navbar from '../Components/Navbar/Navbar'
 
export default function Home(){
    return(    
    <div className="home-container">
        <Navbar/>
        <Profile/>
        <Footer/>
    </div>
    );  
}
