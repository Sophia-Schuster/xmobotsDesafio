import React, {useState} from 'react';

import logoImg from '../assets/images/logo.jpg'; //logo da tokenlab
import landingImg from '../assets/images/mymarketing.png';
// imagens

import purpleHeartIcon from '../assets/images/icons/purple-heart.svg';
// icones

import './landingStyle.css';
// css

import LoginModal from '../Components/LoginComponent/LogModal.jsx'; 
import RegisterModal from '../Components/RegisterComponent/RegisterModal.jsx'; 
// componentes

function Landing() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    // modal form de login 
    const [isModalRegVisible, setIsModalRegVisible] = useState(false);
    // modal form de registro
    return(
        <div id= "page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Tokenlablogo"/>
                    <h2>Start using our app now and keep all your drones on track!</h2>
                </div>

                <img src={landingImg} alt="example of site" className="site-image"/>

                        <div className = "buttons-container">
                            <button onClick = {() => setIsModalRegVisible(true)} className="register"> 
                            Register
                            </button>
                            
                            <button onClick = {() => setIsModalVisible(true)} className="login">
                            Log in
                            </button>
                        </div>
                        
                        {isModalVisible ? <LoginModal setIsModalVisible={setIsModalVisible}/> : null}

                        {isModalRegVisible ? <RegisterModal setIsModalRegVisible={setIsModalRegVisible}/> : null} 

                <a href="https://www.linkedin.com/in/sophia-schuster-315935184/" className= "know-more">
                    <img src={purpleHeartIcon} alt="Purple heart"/>
                    Developed by Sophia.S.Schuster
                    {/* fica separado dos outros para facilitar a organizacao do grid */}
                </a>
            </div>
        </div> 
    )
}

export default Landing;