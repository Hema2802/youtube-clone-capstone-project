import React, { useState } from 'react';
import './SignIn.css';

function SignIn({ onClose, onRegister }) {
    // store user input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // Prevents form from refreshing the page.
    const handleLogin = async (e) => {
        e.preventDefault();

     // try and catch method
        try {
            const response = await fetch("https://youtube-clone-capstone-project-backend-14.onrender.com/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();  //Parses the response JSON.

            if (response.ok) {
                alert("✅ Login successful! Welcome back.");
                console.log("Logged in user:", data.user);

               
            // Store user email in localStorage to access in NavBar
            localStorage.setItem("userEmail", data.user.email);
            
            localStorage.setItem("userFullName", data.user.fullName);

            localStorage.setItem("isLoggedIn", "true"); 
            window.dispatchEvent(new Event("storage")); 


            // Store token only if rememberMe is checked
            if (rememberMe) {
                localStorage.setItem("token", data.accessToken);
             } else {
                sessionStorage.setItem("token", data.accessToken); // temporary storage
             }

                // You can close the modal or redirect user
                onClose();
            } else {
                alert(`❌ ${data.message}`);
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong during login");
        }
    };

    return (
        <div className="signin-modal">
            <div className="signin-box">
                <button className="close-button" onClick={onClose}>✘</button>
                {/* handle login */}
                <h2>Login</h2>
                <form className="signin-form" onSubmit={handleLogin}>
                    {/* user input */}
                    <label>Email</label>
                    {/* email */}
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
{/* password */}
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <div className="checkbox-sec">
                        <label>
                            {/* remmembrance checking */}
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Remember&nbsp;&nbsp;me
                        </label>
                        {/* static forgot password */}
                        <span className="forgot-password">
                            <a href="#">Forgot Password?</a></span>
                    </div>
                     <br/>
                     {/* login button */}
                    <button type="submit" className="login-btn">Login</button>
                     
                     {/* register for new users */}
                    <p className="register-link">
                        Don’t have an account? <br /><br />
                        <a href="#" onClick={(e) => { e.preventDefault(); onRegister(); }}>
                            Register here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
// final export the component
export default SignIn;
