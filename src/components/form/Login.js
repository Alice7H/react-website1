import React, { useState } from 'react'
import '../styles/Login.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const login = (event) => {
        event.preventDefault() 
        // http request
    }

    const register = () => {
        //redirect 
    }

    return (
        <div className='card__login'>
            <div className='card__item__login'>  
                <h2>Welcome, </h2> 
                <h3>Log in to continue</h3>     
                <form className='card__form'>      
                    <label  htmlFor='email'> Email adress</label>
                    <input type="email" value={email} placeholder='Enter email' onChange={e=> setEmail(e.target.value)}/>
             
                    <label htmlFor='password'> Password</label>
                    <input type="password" value={pass} placeholder='Enter password' onChange={e=> setPass(e.target.value)}/>                
           
                    <button className='primary' type='submit' onClick={login}> Sign up </button>
                    <button className='secondary' type='button' onClick={register}> Create account</button>
                </form>
            </div>
        </div>
    )
}
