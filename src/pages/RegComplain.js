import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InputFeild from '../modules/login/InputFeild'
import TextFeild from '../modules/login/TextFeild'


function RegComplain() {
    return (
        <>
            <div className='complaincont'>
                <h1 className='pt-5 rankinghead'>Register a Complain</h1>

                <form className='loginform' action="">
                    <InputFeild label={"Title"} type={"text"} />
                    
                    <div class="inputField mt-3">
                        <label>Select Department</label>
                        <select>
                            <option>Department of Education</option>
                            <option>Department of Women and Child Development</option>
                            <option>Ministry of Information and Broadcasting</option>
                            <option>Ministry of Labour</option>
                            <option>Ministry of Law and Justice</option>
                            <option>Ministry of Power</option>
                            <option>Ministry of Railways</option>
                            <option>Ministry of Shipping</option>
                            <option>Department of Biotechnology</option>
                        </select>
                    </div>
                    <TextFeild label={"Description"} type={"text"} />
                    <div>
                    <Link to={"/allcomplaints"}>
                        <button className='contactbtn'>
                            Submit
                        </button>
                    </Link>
                    </div>

                </form>
            </div>
        </>
    )
}
export default RegComplain