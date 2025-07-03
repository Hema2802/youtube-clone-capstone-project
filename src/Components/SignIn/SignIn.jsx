import React from 'react';
import './SignIn.css';
import CreateAccount from '../CreateAccount/CreateAccount';
import { useState } from 'react';

function SignIn({ onClose,onRegister }) {

    

   


    return (
        <div className="signin-modal">
            <div className="signin-box">
                <button className="close-btn" onClick={onClose}>✘</button>
                <h2>Sign In to Youtube</h2>
                <form>
                   
                    
                    <input type="email" placeholder="Your Email *" required />
                    <input type="password" placeholder="Your Password *" required />

                    <div className="checkbox-section">
                    <label>
                          <input type="checkbox" />
                               Remember&nbsp;&nbsp;me
                          </label>
                          <a href="#" className="forgot-link">Forgot Password?</a>
                    </div>

                    <button className="login-btn">Login to your account</button><br/><br></br>
                    <p className="register-link" >Don't have an account? <br/><br/><a href="#" onClick={onRegister}>Register here</a></p>
                </form>
            </div>
            
        </div>
    );
}

export default SignIn;
