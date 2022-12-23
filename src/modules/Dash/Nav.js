import React, { Component } from 'react'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <>
            <div className="wrapper dashwrap">

                <div className="btnwrap">
                    <div className="logincont">
                        <h1 className='loghead'>Grievance?</h1>
                        <p className='logtxt'>Having a Complain? Register with us</p>
                        <div className='d-flex'>
                            <Link to={"/complain"}> <button className='regbtn'>Register</button> </Link>
                            <Link to={"/login"}> <button className='logbtn'>Dashboard</button> </Link>
                        </div>
                    </div>
                    <div className='navcontwrap'>
                        <div className="navcontleft">
                            <div className="navbtn tl">
                                <div className="navimg"><i class="bi bi-person-lines-fill"></i></div>
                                <p className='navhead'>About Us</p>
                                <p className='navbody'>Know more about the Unique Services</p>
                            </div>
                            <Link to={"/allcomplaints"}>
                                <div className="navbtn bl">
                                    <div className="navimg"><i class="bi bi-clipboard-fill">C</i></div>
                                    <p className='navhead'>Complaints</p>
                                    <p className='navbody'>Facing issues? Upvote Complaints allready registered</p>
                                </div>
                            </Link>

                        </div>

                        <div className="navcontright">
                            <div className="navbtn tr">
                                <div className="navimg"><i class="bi bi-1-circle">1</i></div>
                                <p className='navhead'>Rankings</p>
                                <p className='navbody'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="navbtn br">
                                <div className="navimg"><i class="bi bi-telephone-outbound"></i></div>
                                <p className='navhead'>Contact Us</p>
                                <p className='navbody'>We'll start with some questions and get you to the right place.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Nav