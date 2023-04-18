import React from "react";
// import Typical from "react-typical";
import './Profile.css'

export default function Profile(){
  return(
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
            <a href='https://www.facebook.com/profile.php?id=100084000117025'>
              <i className= "fa fa-facebook-square"></i>
            </a>
            <a href="https://github.com/vaishuKshirsagar">
              <i className= "fa fa-github-square"></i>
            </a>
            <a href='https://www.instagram.com/itsvaishnavi_16/'>
              <i className= "fa fa-instagram"></i>
            </a>
            <a href='https://www.linkedin.com/in/vaishnavi-kshirsagar-636461228/'>
              <i className= "fa fa-linkedin-square"></i>
            </a>
            <a href='https://twitter.com/VaishnaviKshi18'>
              <i className= "fa fa-twitter"></i>
            </a>
           </div>
          </div>

          <div className='profile-details-name'>
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Vaishnavi</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
              {" "}
              {/* <Typical
              loop={Infinity}
              steps={[
                "Web developer",
                1000,
                "Software developer",
                1000,
                "Tech enthusiast",
                1000,
                "Front end designer",
                1000,
              ]}
              /> */}
              Software Developer 
              </h1>
             <span classNAme="profile-role-tagline">
              Knack of building application with front end and back end operations
              </span> 
            </span>
          </div> 
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href='vaishnavi_resume.pdf' download='vaishnavi_resume.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'>

          </div>
        </div>
      </div>
    </div>
  );
}

