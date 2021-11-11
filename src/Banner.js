import React from 'react'
import './Banner.css'
import {Link} from 'react-router-dom'

function Banner() {
    return (
        <div className='banner'>
          <div className='form-div'>
            <div className='search'>
                <form className='location'>
                    <label for='location'>Location</label>
                    <input type='text' name='location' placeholder='Where are you going?'/>
                </form>
                <form className='check-in'>
                    <label for='check-in'>Check in</label>
                    <input type='text' name='checkin' placeholder='Add dates'/>
                </form>
                <form className='check-out'>
                    <label for=''>Check-out</label>
                    <input type='text' name='checkout' placeholder='Check out'/>
                </form>
                <form className='guests'>
                    <label for='guests'>Guests</label>
                    <input type='text' name='guests' placeholder='Add guests'/>
                </form>
            </div>
                <div className='searchbtn'>
                  <button className='btn'>
                    <img src="https://img.icons8.com/material-sharp/24/ffffff/search.png"
                     alt=''/>
                  </button>
                </div>
            </div>
            <div className='bottom'>
                <h3>Not sure where to go? Perfect.</h3>
              <Link to='search'>  <button>I'm flexible</button> </Link>
            </div>
        </div>
    )
}

export default Banner