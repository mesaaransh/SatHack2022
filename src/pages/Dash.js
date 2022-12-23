import React, { Component } from 'react'
import About from '../modules/Dash/About'
import Contact from '../modules/Dash/Contact'
import Nav from '../modules/Dash/Nav'
import Ranking from '../modules/Dash/Rankings'


function Dash() {
    return (
        <>
            <section>
                <Nav/>
            </section>

            <section>
                <Ranking/>
            </section>

            <section>
                <About/>
            </section>

            <section>
                <Contact/>
            </section>
            
        </>
    )
}
export default Dash