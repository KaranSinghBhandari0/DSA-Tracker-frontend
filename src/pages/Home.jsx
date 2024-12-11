import React, { useContext } from 'react';
import Login from './Login';
import { AuthContext } from '../context/AuthContext';
import Dashboard from './Dashboard';

export default function Home() {
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <div>
            {isAuthenticated ? <Dashboard/> : <Login />}
        </div>
    );
}
