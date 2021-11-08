import React from 'react'
import './Card.css'
function Card({src, description}) {
    return (
        <div className='choice'>
            <img src={src} alt='' />
            <h3>{ description}</h3>
        </div>
    )
}

export default Card
