import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';

export default function Login() {
    const { login, isAuthenticated, signup } = useContext(AuthContext);

    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            toast.error('You are already logged in');
            navigate('/');
        }
    }, [isAuthenticated, navigate]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormToggle = (e) => {
        e.preventDefault();
        setIsLogin(!isLogin);
        setFormData({ email: '', password: '' }); // Reset the form
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isLogin) {
            login(formData);
        } else {
            signup(formData);
        }
    };

    return (
        <LoginForm handleSubmit={handleSubmit} handleFormToggle={handleFormToggle} formData={formData} 
        handleChange={handleChange} isLogin={isLogin} />
    );
}
