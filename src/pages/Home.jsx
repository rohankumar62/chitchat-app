import React from 'react'
import hstyle from "../css/Home.module.css"
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()


  return (
    <>
        <div id={hstyle.main}>
            <div id={hstyle.card}>
                  <h1>Welcome to chit chat</h1>
                  <button onClick={()=> navigate("/login")}>Continue</button>
            </div>
        </div>
    </>
  )
}

export default Home