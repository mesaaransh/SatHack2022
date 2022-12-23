import React, { Component } from 'react'
import Rank1 from './Rank1'
import Rank2 from './Rank2'
import Rank3 from './Rank3'


function Ranking() {
    return (
        <>
        <div className='rankcont'>
            <h1 className='mt-5 rankinghead'>Top Reported Departments</h1>

            <div className='rankings mt-5'>
                <Rank1 department="Electricity" reports = "422"/>
                <Rank1 department="Sanitary and Sewage" reports = "368"/>
                <Rank1 department="Water Supply" reports = "356" />
                <Rank2 department="Cleanliness" reports = "325"/>
                <Rank3 department="Education" reports = "106"/>
                <Rank3 department="Infrastructure" reports = "98"/>
            </div>
        </div>
        </>
    )
}
export default Ranking