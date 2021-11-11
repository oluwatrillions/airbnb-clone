import React from 'react'
import './Stays.css'

function Stays() {
    return (
        <div className='stays'>
            <h5>300+ Stays</h5>
            <h1>Stays in Lagos</h1>
            <div className='buttons'>
                <button className='btn1'>Free cancellation</button>
                <button className='btn2'>Type of place</button>
                <button className='btn3'>Price</button>
                <button className='btn4'>Instant Book</button>
                <button className='btn5'>More Filters</button>
            </div>
            <h4 className='reviews'>Review COVID-19 travel restrictions before you book. <span>Learn more</span></h4>
        </div>
    )
}

export default Stays
