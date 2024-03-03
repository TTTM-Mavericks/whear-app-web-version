import React, { useState } from 'react';
import './Login.css';
import LOGO from '../../../asserts/img/d7d3518a-cbf8-4519-940c-4948a28ed865.jpg';
import Swal from 'sweetalert2';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const validateEmail = (value: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!value) {
            return 'Email is required.';
        } else if (!emailRegex.test(value)) {
            return 'Invalid email format.';
        }
        return '';
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const obj = { email, password };

        fetch('http://localhost:6969/api/v1/auth/login', {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache',
            },
            body: JSON.stringify({ ...obj }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error('Login failed');
                    throw new Error('Login failed');
                }
            })
            .then((res) => {
                console.log('Login successful:', res);
                localStorage.setItem('userID', res.data.user.userID);
                localStorage.setItem('accessToken', res.data.access_token);
                localStorage.setItem('role', res.data.user.role);
                console.log(res);

                window.location.href = '/admin-manager';
            })
            .catch((error) => {
                console.error('Error during login:', error);
                Swal.fire('Login Fail!', 'Your Email or Password is wrong !!!', 'error');
            });
    };

    return (
        <div className="login-container">
            <div className="form-container">
                <img src={LOGO} className="logologin" alt="Logo"></img>
                <h2 className="login_h2">Login</h2>
                <p className="signin">Sign in your account</p>
                <form onSubmit={handleLogin}>
                    <TextField
                        type="email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        variant="outlined"
                        placeholder="Email"
                        id="outline-basic"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ backgroundColor: "white", width: "100%", borderRadius: "4px" }}
                    />
                    <br />
                    <br />
                    <TextField
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        value={password}
                        style={{ backgroundColor: "white", borderRadius: "4px" }}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={togglePasswordVisibility}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br />
                    <br />
                    <br />
                    <button type="submit" className="login_btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
