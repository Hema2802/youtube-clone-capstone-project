import React, { useState } from 'react';
import './SignIn.css';

function SignIn({ onClose, onRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                alert("✅ Login successful! Welcome back.");
                console.log("Logged in user:", data.user);

                if (rememberMe) {
                    localStorage.setItem("token", data.token); // optional
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
                <h2>Sign In</h2>
                <form className="signin-form" onSubmit={handleLogin}>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

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
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Remember&nbsp;&nbsp;me
                        </label>
                        <span className="forgot-password">
                            <a href="#">Forgot Password?</a></span>
                    </div>
                     <br/>
                    <button type="submit" className="login-btn">Login</button>

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

export default SignIn;
