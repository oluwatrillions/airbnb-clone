import React from 'react'
import './Header.css'

function Header() {
    return (
        <header>
         <div>
            <img
                className='logo'
                src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
                alt=''
            />
         </div>
         <div className='mid-header'>
                <h3>Places to stay</h3>
                <h3>Experiences</h3>
                <h3>Online experiences</h3>
         </div>
         <div className='right-header'>
            <div className='first-right'>
                <h3>Become a Host</h3>
                 <img className='globe' 
                    src="https://img.icons8.com/ios/50/000000/globe--v1.png"
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
        </header>
    )
}

export default Header
