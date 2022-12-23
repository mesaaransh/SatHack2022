import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InputFeild from '../modules/login/InputFeild'


function Register() {
    return (
        <>
        <div className="wrapper d-flex">
            <div className="loginleft">
                <h1 className='loginTitle'>Sign Up</h1>
                <hr className='seperator'/>
                <p className='loginText'> Click on Login button to explore online Community Complain Service &  more value-added services offered by <b>Izzan</b></p>

                <img className='logo' src="./logo.jpeg" alt="" />
            </div>

            <div className="loginright">
                <form className='loginform' action="">
                    <div className="namein">
                        <InputFeild label = {"First Name"} type = {"text"}/>
                        <InputFeild label = {"Last Name"} type = {"text"}/>
                    </div>
                    <InputFeild label = {"Email"} type = {"email"}/>
                    <div className="namein">
                        <InputFeild label = {"City"} type = {"text"}/>
                        <InputFeild label = {"State"} type = {"text"}/>
                    </div>
                    <InputFeild label = {"Address"} type = {"text"}/>
                    <InputFeild label = {"Pin Code"} type = {"text"}/>

                    <div>
                    <Link to={"/dash"}>
                        <button className='signupbtn'>
                            Sign Up
                        </button>
                    </Link>

                        or <Link className='signlink' to={"/login"}>Sign In</Link>
                    </div>
                    
                </form>
            </div>
        </div>
    </>
    )
  }
export default Register