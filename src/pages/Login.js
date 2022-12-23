import React, { Component } from 'react'
import { Link, useFetcher } from 'react-router-dom'
import InputFeild from '../modules/login/InputFeild'


function Register() {

    // fetch('https://example.com/posts', {
    //     method: 'POST',
    //     body: formData,
    // })
    //     .then((response) => response.json())
    //     .then((result) => {
    //         console.log('Success:', result);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });

    return (
        <>
            <div className="wrapper d-flex">
                <div className="loginleft">
                    <h1 className='loginTitle'>Sign In</h1>
                    <hr className='seperator' />
                    <p className='loginText'> Click on Login button to explore online Community Complain Service &  more value-added services offered by <b>Izzan</b></p>

                    <img className='logo' src="./logo.jpeg" alt="" />
                </div>

                <div className="loginright">
                    <form className='loginform' action="">
                        <InputFeild label={"Email"} type={"email"} />
                        <InputFeild label={"Password"} type={"Password"} />
                        <div>
                            <Link to={"/dash"}>
                                <button className='signupbtn'>
                                    Sign In
                                </button>
                            </Link>

                            or <Link className='signlink' to={"/register"}>Sign Up</Link>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
export default Register