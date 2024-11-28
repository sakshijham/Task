import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const detail = {
            email: email,
            password: password,
        };

        if (detail.email !== "sakshijhamnani@gmail.com" || detail.password !== "123456") {
           alert("Email or Password is incorrect")
            return;
        }

        localStorage.setItem('UserDetail', JSON.stringify(detail));

        setEmail('');
        setPassword('');
      
        navigate('/');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={submitHandler} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={emailChangeHandler}
                    className="w-full p-3 mt-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={passwordChangeHandler}
                    className="w-full p-3 mt-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-3 rounded-lg mt-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
