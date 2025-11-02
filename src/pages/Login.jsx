import React, { useState } from 'react'
import lgnstyle from "../css/Login.module.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {


  const navigate = useNavigate()


  const[uemail, setUEmail] = useState('')
  const[upassword, setUPassword] = useState('')


  function verifyUser(){
    if(uemail.trim()!='' && upassword.trim()!=''){
        axios.post(`http://localhost:8080/login?email=${uemail}&password=${upassword}`)
        .then((res)=>{
            if(res.data){
                navigate("/chat", {
                  state:{
                    name: res.data.name,
                    email: res.data.email
                  }
                })
            }
            else{
              alert("account does not exist or wrong credentials")
            }
        })
    }
    else{
      alert("Please fill the details")
    }
  }

  return (
    <>
        <div id={lgnstyle.main}>
            <div id={lgnstyle.card}>
                  <h1>Login</h1>

                  <input type="email"
                  placeholder='enter your email'
                  value={uemail}
                  onChange={(event)=> setUEmail(event.target.value)}
                  />

                  <input type="password"
                  placeholder='enter your password'
                  value={upassword}
                  onChange={(event)=> setUPassword(event.target.value)}
                  />

                  <button onClick={verifyUser}>Login</button>

                  <Link to="/signup">Not a user? Sign up</Link>
            </div>
        </div>
    </>
  )
}

export default Login