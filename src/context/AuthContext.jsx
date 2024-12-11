import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

// Create the Auth Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const isAuthenticated = localStorage.getItem('authToken');
    const Backend_Url = 'https://dsa-tracker-backend.up.railway.app';

    // login
    const login = async (formData) => {
        try {
            const res = await axios.post(`${Backend_Url}/auth/login`, formData);
            if (res.status === 200) {
              toast.success('Login Successful');
              localStorage.setItem('authToken', res.data.token);
              navigate('/');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.msg || "Login failed");
        }
    };

    // signup
    const signup = async (formData) => {
        try {
            const res = await axios.post(`${Backend_Url}/auth/signup`, formData);
            if (res.status === 200) {
              toast.success('Signup Successful');
              localStorage.setItem('authToken', res.data.token);
              navigate('/');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.msg || "Signup failed");
        }
    };

    // logout
    const logout = () => {
        toast.success('Logout Successful');
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
