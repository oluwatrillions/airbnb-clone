import React from 'react'
import './CitiesAround.css'

function CitiesAround({src, city, distance}) {
    return (
        <div className='explore'>    
            <img src={src} />
            <div>
                <h3>{city}</h3>
                <h4>{ distance }</h4>
            </div>
            
        </div>
    )
}

export default CitiesAround
