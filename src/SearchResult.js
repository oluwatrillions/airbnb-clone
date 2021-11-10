import React from 'react'
import './SearchResult.css'

function SearchResult({src, location, price, distance}) {
    return (
        <div className='edited'>
            <img src={src} alt='' />
            <div className='desc'>
                <h3>{location} <span>{ price}</span></h3>
                <h3>{ distance}</h3>
            </div>
        </div>
    )
}

export default SearchResult
