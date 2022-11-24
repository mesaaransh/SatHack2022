import React, { Component } from 'react'
import InputFeild from '../modules/login/InputFeild'


function Login() {
    return (
        <>
        <div className="wrapper d-flex">
            <div className="loginleft">
                <h1 className='loginTitle'>Sign Up</h1>
                <hr className='seperator'/>
                <p className='loginText'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repudiandae eius dolorum expedita tempora provident sequi soluta, ut quo cum.</p>

                <h1 className='logo'>LOGO</h1>
            </div>

            <div className="loginright">
                <form className='loginform' action="">
                    <InputFeild label = {"Username"} type = {"text"}/>
                    <InputFeild label = {"Email"} type = {"email"}/>
                    <InputFeild label = {"Password"} type = {"Password"}/>
                    <InputFeild label = {"Confirm Password"} type = {"Password"}/>

                    <div>
                        <button className='signupbtn'>
                            Sign Up
                        </button>

                        or <a href="">Sign In</a>
                    </div>
                    
                </form>
            </div>
        </div>
    </>
    )
  }
export default Login