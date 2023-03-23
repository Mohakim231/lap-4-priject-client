import React, { useRef, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useAuth } from '../context'

const SignUp = () => {

    const [username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const[user, setUser] = useState({})
    const navigate = useNavigate()
    // const { setUser, user } = useAuth();

    
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
            const options = {
                method:"POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username:username,
                    email:email,
                    password:password
                })
            }
            const response = await fetch("http://localhost:5000/service-register", options)
            if (response.status === 201) {
                const data = await response.json()
                console.log(data.user)
                // now set user details to user and navigate to main page 
                setUser(data.user)
                console.log(user)
                localStorage.setItem("token", data.token)
               
                navigate("/login")
          
        } }
        catch (error) {
          setError('Failed to create an account')  
        }
        
        setLoading(false)
    }
    
  

  return (<>
    
        <div>
          <button onClick={handleUserRegister}>Pet owner</button>
          <button onClick={handleServiceRegister}>Service provider</button>
        </div>
           {serviceChoice?(
    <>
        <div>
            <h2>
                Sign Up As Service Provider
            </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username-form'>
                    Username: 
                </label>
                <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)} placeholder={"Username"} name='username-form' required/>
                <label htmlFor='email-form'>
                    Email: 
                </label>
                <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder={"Email"} name='username-form' required/>
                <label htmlFor='password-form'>                    
                    Password: 
                </label>
                <input type='password' ref={passwordRef} value={password} onChange={(e)=> setPassword(e.target.value)} placeholder={"Password"}name='password-form' required/>
                <label htmlFor='passwordConfirm-form'>
                     Confirmation: 
                </label>
                <input type='password' ref={passwordConfirmRef} placeholder={"Confirm Password"} name='passwordConfirm-form' required/>
                <button disabled={loading} type='submit'>Sign Up</button>
                {error && <p>{error}</p>}
            </form>
        </div>
        <div>Already have an account? <Link to='/login'>Login</Link></div>
    </>): userChoice? (<>
        {/* <div>
            <h2>
                Sign Up As Pet Owner
            </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username-form'>
                    Username: 
                </label>
                <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)} placeholder={"Username"} name='username-form' required/>
                <label htmlFor='email-form'>
                    Email: 
                </label>
                <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder={"Email"} name='username-form' required/>
                <label htmlFor='password-form'>                    
                    Password: 
                </label>
                <input type='password' ref={passwordRef} value={password} onChange={(e)=> setPassword(e.target.value)} placeholder={"Password"}name='password-form' required/>
                <label htmlFor='passwordConfirm-form'>
                     Confirmation: 
                </label>
                <input type='password' ref={passwordConfirmRef} placeholder={"Confirm Password"} name='passwordConfirm-form' required/>
                <button disabled={loading} type='submit'>Sign Up</button>
                {error && <p>{error}</p>}
            </form>
        </div>
        <div>Already have an account? <Link to='/login'>Login</Link></div> */}
        user register
    </>):''}</>
  )
}

export default SignUp
