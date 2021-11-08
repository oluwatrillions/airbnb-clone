import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='container'>
            <div className='header'>
                    <header>
                       <img className='logo'
                        src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
                        alt=''/>
                    </header>       
                   <div className='mid-header'>
                        <h3>Places to stay</h3>
                        <h3>Experiences</h3>
                        <h3>Online experiences</h3>
                   </div>
                   <div className='right-header'>
                      <div className='first-right'>
                        <h3>Become a Host</h3>
                        <img className='globe' 
                         src="https://img.icons8.com/material-outlined/24/ffffff/globe--v2.png"
                         alt='' />
                     </div>
                     <div className='last-header'>                             
                        <img className='hamburger'
                        src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
                        alt='' />
                        <img className='profile'
                        src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-user-avatars-becris-lineal-color-becris.png"
                        alt='' />
                     </div>
                   </div>    
                  
            </div>
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

                <div className='searchbtn'>
                  <button>
                    <img src="https://img.icons8.com/material-sharp/24/ffffff/search.png"
                     alt=''/>
                  </button>
                </div>
            </div>
            <div className='bottom'>
                <h3>Not sure where to go? Perfect.</h3>
                <button>I'm flexible</button>
            </div>
        </div>
    )
}

export default Header
