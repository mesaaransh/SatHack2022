import React, { Component } from 'react'


function About() {
    return (
        <>
            <div class="py-5 bgDark">
                <div class="container py-5 bgDark">
                    <div class="row align-items-center mb-5">
                        <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                            <h2 class="font-weight-light text-light">Allways at the front</h2>
                            <p class="font-italic text-muted mb-4">The latest initiative has been to centralize both these applications for ensuring higher tranparency, security and reliability of operations</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                        </div>
                        <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
                    </div>
                    <div class="row align-items-center text-light">
                        <div class="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
                        <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <h2 class="font-weight-light">A wider prespective</h2>
                            <p class="font-italic text-muted mb-4">A countrywide unified database and provision of a highly citizen and trade centric web enabled environment.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About

