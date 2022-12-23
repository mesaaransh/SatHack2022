import React from 'react'
import { Link } from 'react-router-dom'
import InputFeild from '../login/InputFeild'
import TextFeild from '../login/TextFeild'


function Contact() {
    return (
        <>
            <div className="contactcont">
                <h1 className='pt-5 rankinghead'>Contact Us</h1>
                <p className='rankinghead contag'>Couldn’t find an answer in the Help Center? We’ll start with some questions and get you to the right place.</p>

                <form className='loginform' action="">
                    <InputFeild label = {"Title"} type = {"email"}/>
                    <TextFeild label = {"Description"} type = {"Password"}/>
                    <div>
                        <button className='contactbtn'>
                            Submit
                        </button>
                    </div>
                    
                </form>
            </div>
        </>
    )
}
export default Contact





