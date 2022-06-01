import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const signIn = e =>{
  e.preventDefault();

 // some fancy firebase login
}

const register = e =>{
  e.preventDefault();

  //do some fancy firebase register
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  return (
    <div className='login'>
        <Link to='/'>
        <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png' alt='amazon-logo'/>
        </Link>
        <div className='login__container'>
            <h1>Sign in</h1>

            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button className='login__signinbtn' type='submit' onClick={signIn}>Sign In</button>
            </form>
            <p>
                By signing-in you agree to the Amazon Fake Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest base ads.
            </p>
            <button className='login__registerbtn' onClick={register}>Create your Amazon Account</button>
        </div>
        
    </div>
  )
}

export default Login
