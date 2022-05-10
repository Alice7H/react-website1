import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import '../../App.css'
import Login from '../form/Login'

export default function SignUp() {

    const {isLogged, setIsLogged} = useState(true)
    
    const logout = () => {
        setIsLogged(false)
        return (
            <Redirect to='/sign-up'/>
        )
    }

    return (
        <>
            { isLogged
            ? (
                <>
                    <h1 className='products'>SIGN UP</h1>
                    <button onClick={logout} type='submit'>
                        Log Out
                    </button>
                </>
            )
            : <div className='sign-up'><Login/></div> }
        </>
    )
}
