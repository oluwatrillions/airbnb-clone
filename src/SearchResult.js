import React from 'react'
import './SearchResult.css'

function SearchResult({src, location, price, distance}) {
    return (
        <div className='edited'>
            <div className='imgsDiv'>
                <img src={src} alt='' />
                <img className='iheart' src="https://img.icons8.com/material-two-tone/50/000000/like--v1.png" alt='heart'/>
            </div>
             <div className='infoRoom'>
                <h3>{location}</h3>
                <h3>{ price}</h3>
            </div>
            <div className='distance'>
                <h3>{distance}</h3>
            </div>
           
        </div>
    )
}

export default SearchResult
