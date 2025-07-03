
import React, { useState } from 'react';
import './CreateAccount.css';

function CreateAccount({ onClose, onLogin }) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Password do not match ❌");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    fullName:fullName, 
                    email:email, 
                    password:password 
                })
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                alert("✅ Registration successful! Welcome to YouTube Clone");
                setFullName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                onLogin();
                onClose();
            } else {
                alert(`❌ Error: ${data.message || "Something went wrong"}`);
            }

        } catch (error) {
            console.error("Registration failed:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="createaccount-modal">
            <div className="createaccount-box">
                <button className="close-button" onClick={onClose}>✘</button>
                <h2>Create New Account</h2>
                <form className='account-details' onSubmit={handleRegister}>
                    <div>
                        <label>Enter Your FullName</label>
                        <input
                            type="text"
                            placeholder="Hemalatha Thangavel"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Enter Your Email</label>
                        <input
                            type="email"
                            placeholder="user12@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Enter Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Confirm Your Password</label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="checkbox-sec">
                        <label>
                            <input type="checkbox" />
                            Remember&nbsp;&nbsp;me
                        </label>
                    </div>

                    <button type="submit" className="register-btn">Register</button>

                    <p className="login-link">
                        If you have an account? <br /><br />
                        <a href="#" onClick={(e) => { e.preventDefault(); onLogin(); }}>Login here</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;
