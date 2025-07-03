import React from 'react';
import './CreateAccount.css';

function CreateAccount({ onClose,onLogin }) {
    return (
        <div className="createaccount-modal">
            <div className="createaccount-box">
                <button className="close-button" onClick={onClose}>✘</button>
                <h2>Create New Account</h2>
                <form className='account-details'>
                    <div>
                        <label>Enter Your FullName</label>
                        <input type="text" placeholder="Hemalatha Thangavel" required />
                    </div>
                    
                    <div>
                        <label>Enter Your Email</label>
                        <input type="email" placeholder="user12@gmail.com" required />  
                    </div>
                    
                     <div>
                         <label>Enter Password</label>
                         <input type="password" placeholder="Password" required />
                     </div>
                    
                      <div>
                          <label>Confirm Your Password</label>
                          <input type="password" placeholder="Confirm Password" required />
                      </div>

                      <div className="checkbox-sec">
                    <label>
                          <input type="checkbox" />
                               Remember&nbsp;&nbsp;me
                          </label>
                          
                    </div>
                    

                    <button className="register-btn">Register</button>

                    <p className="login-link" >If you have an account? <br/><br/>
                           <a href="#" onClick={(e) => { e.preventDefault(); onLogin(); }}>Login here</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;
