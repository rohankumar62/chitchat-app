import React, { useState} from 'react'
import signStyle from "../css/Signup.module.css"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

function Signup() {

  const navigate = useNavigate()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  function createUser() {
    if (name.trim() == '' || email.trim() == '' || password.trim() == '') {
      alert("Please fill the details")
    }

    else {
      axios.post("http://localhost:8080/signup", {
        email: email,
        name: name,
        password: password
      })
        .then((res) => {
          if (res.data) {
            navigate("/login")
          }
          else {
            alert("Email already registered")
            setEmail('')
          }
        })
    }
  }

  return (
    <>
      <div id={signStyle.main}>
        <div id={signStyle.card}>
          <h1>Signup</h1>

          <input type="text"
            placeholder='enter your name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <input type="email"
            placeholder='enter your email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input type="password"
            placeholder='enter your password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button onClick={createUser}>Signup</button>

          <Link to="/login">Already registered? Login</Link>
        </div>
      </div>
    </>
  )
}

export default Signup