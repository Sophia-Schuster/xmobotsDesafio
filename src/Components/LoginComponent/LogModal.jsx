import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

import backIcon from '../../assets/images/icons/backArrow.svg';
// icones

import Visibility from '../../assets/images/visibility.svg';
import offVisibility from '../../assets/images/visibility_off.svg';
// imagens

// import ProfileModal from '../../Components/ProfileComponent/ProfileModal.jsx'
// componentes

import './logStyle.css';
//css

//Modal / Dialog do formulário de login
function Modal({setIsModalVisible}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword,setShowPass] = useState(false)

    // const [isProfileVisible, setIsProfileVisible] = useState(false);
    //modal form de perfil

    function setShowPassword (){
        setShowPass(showPassword => !showPassword);
    }

    const navigate = useNavigate();
    const goToProfilePage = () => {
      navigate('/main', {
        state: {
            userId: email,
            description: '51.505S/-0.09W'
        }
      });
    }
    return(
        <div className = "modal">
            <div className = "containerModalReg_Login">
                <button onClick = {() => setIsModalVisible(false)} className = "closeModal">
                    <img src={backIcon} alt="back" className= "backIcon"/>
                </button> 
                <div className = "content"> 
                    <div className = "loginForm">
                        <span className = "helloSpan"> Welcome </span>
                        <div className= "inputsContainer">
                        <div className = "enterEmail">
                            <input className = "email" placeholder= "Email" type="text" name="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className = "enterPassword">
                            <input className = "password" placeholder= "Password" type={showPassword ? 'text' : 'password'} name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                            <img className = "openEye" src= {showPassword? offVisibility : Visibility} onClick={() => setShowPassword()} alt="Show Password"/>
                        </div>
                        </div>
                        <div className = "loginButtonContainer">
                            <button onClick = {goToProfilePage} className="logInButton">
                                Log in
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {/* {isProfileVisible ? <ProfileModal setIsProfileVisible={setIsProfileVisible} /> : null}  */}
                </div>
            </div>
        </div>
    ) 
}

export default Modal;