import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import backIcon from '../../assets/images/icons/backArrow.svg';
// icones

import Visibility from '../../assets/images/visibility.svg';
import offVisibility from '../../assets/images/visibility_off.svg';
// imagens

import './RegisterStyle.css';
import '../SmallModal.css';
//css

function RegModal ({setIsModalRegVisible}){
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[repeatPassword,setRepeatPassword] = useState('')
    const[repeatShowPassword, setRepeatShowPassword] = useState(false)
    const [showPassword,setShowPass] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    function setShowPassword (){
        setShowPass(showPassword => !showPassword);
    }
    function setShowRepeatPassword (){
        setRepeatShowPassword(repeatShowPassword => !repeatShowPassword);
    }

    const navigate = useNavigate();
    const goToProfilePage = () => {
      navigate('/main', {
        state: {
            userId: name,
            description: '51.505S/-0.09W'
        }
      });
    }
    const validationSchema = yup.object({
        email: yup
          .string()
          .email("Enter a valid email")
          .required("Email is required"),
        password: yup
          .string()
          .min(8, "Password minimum 8 characters")
          .required("Password is required")
      });

    return(
        <div className = "modal">
            <div className = "containerModalReg_Login">
                <button onClick = {() => setIsModalRegVisible(false)} className = "closeModal">
                    <img src={backIcon} alt="back" className= "backIcon"/>
                </button>  
                <div className = "contentReg"> 
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={validationSchema}
                        >
                        <div>
                            <Form onSubmit={goToProfilePage} className = "RegForm">
                            <span className = "helloSpan"> Hello! </span>
                            <div className = "enterName">
                                <Field className = "username" placeholder= "Username" type="text" name="Username" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className = "enterEmail">
                                <Field className = "email" type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                <ErrorMessage component="div" name="email" />
                            </div>

                            <div className = "enterPassword">
                                <Field className = "password" type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                <ErrorMessage component="div" name="password" />
                            </div>

                            <button className="RegisterButton" type="submit">Submit</button>
                            </Form>
                        </div>
                    </Formik>
                </div>
            </div>
        </div>
    )

}

export default RegModal;