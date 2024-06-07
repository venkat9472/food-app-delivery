import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
export const LoginPopup = ({setShowLogin}) => {

    const[currState,setCurrentState]=useState('Login')
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />  
            </div>
            <div className="login-popup-inputs">
                
                  {currState === 'Sign Up' && <input type="text" placeholder='Your name' required />}
                
               
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Password' required/>

            </div>
            <button>{currState==='Sign Up'? 'Create account': 'Login'}</button>

            <div className="login-popup-condition">
                <input type='checkbox' required />
                <p>By continuing, I agree to the terms of use & privicy policy.</p>
            </div>
            {
                currState==='Login'
                ?
                <p>Crete a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p> 
                :
                <p>Already have an account ? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
            }
           
          
        </form>


    </div>
  )
}
