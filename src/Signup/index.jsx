import React, { useRef, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useAuth } from '../context'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'

const SignUp = () => {

    const [username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { signup } = useAuth();

    
    const[userChoice, setUserChoice] = useState(false)
    const[serviceChoice, setServiceChoice] = useState(false)
    
    
   
   
    const handleUserRegister = ()=>{
      console.log("user register")
      serviceChoice?setserviceChoice(!serviceChoice):''
      setUserChoice(!userChoice)
    }
    
    const handleServiceRegister = ()=>{
      console.log("service register")
      userChoice? setUserChoice(!userChoice):''
      setServiceChoice(!serviceChoice)
    }
    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            signup(usernameRef.current.value, passwordRef.current.value)    
        } catch (error) {
          setError('Failed to create an account')  
        }
        
        setLoading(false)
    }
    
  return (
    <div className='signup-page'>
        <div className='signup-box'>
            <h2 className='signup-heading'>
                Sign Up
            </h2>
            <form onSubmit={handleSubmit} className='signup-form'>
                <input className='signup-form-element' placeholder={"Username"} type='text' ref={usernameRef} name='username-form' required/>
                <input className='signup-form-element' placeholder='Password' type='password' ref={passwordRef} name='password-form' required/>
                <input className='signup-form-element' placeholder='Confirm Password' type='password' ref={passwordConfirmRef} name='passwordConfirm-form' required/>
                <button disabled={loading} type='submit' className='singup-button'>Sign Up</button>
                {error && <p>{error}</p>}
            </form>
            <div className='signup-link'>Already have an account? <Link to='/login'>Login</Link></div>    
        </div>
    </div>
  )
}

export default SignUp
