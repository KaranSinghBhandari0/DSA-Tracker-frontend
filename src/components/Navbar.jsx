import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import NewProblem from './NewProblem';
import { UserContext } from '../context/UserContext';

export default function Navbar() {

  const {isAuthenticated, logout} = useContext(AuthContext);
  const {totalQ} = useContext(UserContext)
  const [toogleNew , setToogleNew] = useState(false);

    return (
        <div className='navParent'>
            <nav>
                <div className="totalQ"> {totalQ} </div>
                <button className="btn" onClick={()=> {setToogleNew(!toogleNew)}}>New Problem</button>
                <button className="btn" onClick={()=>logout()} >{isAuthenticated ? 'Logout' : 'Login'}</button>
            </nav>
            <NewProblem toogleNew={toogleNew} setToogleNew={setToogleNew} />
        </div>
    );
}
