import React, { useState } from 'react';
import './login_page.css'; // Import your CSS file
import axios from 'axios';

const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const { email,  password } = loginInfo;

    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (email.trim() === '' || password.trim() === '') {
            alert('Please enter both email and password.');
            return;
        }
        
        axios.post("http://64.23.146.210:8080/api/v1/auth/login", loginInfo)
            .then(res => {
                console.log(res.data);
                const name=res.data.name;
                const role=res.data.role;
                const user_id = res.data.user_id;
                console.log(name,);
            })
            .catch(err => console.log(err))

            

        // console.log(loginInfo);
        //url:http://192.168.0.127:8080/api/v1/auth/login   this url is used for same network 
    };

    return (
        <div className="login-container">
            <h2>Login page</h2>
            <form onSubmit={handleSubmit}>
                <div className="regi-form">
                    <label htmlFor="email">email</label>
                    <input 
                         style={{fontWeight: 600,textAlign: 'center'}} type="text" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                
                <div className="regi-form">
                    <label htmlFor="password">Password</label>
                    <input 
                         style={{fontWeight: 600,textAlign: 'center'}} type="password" 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
