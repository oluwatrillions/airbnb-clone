import React from 'react'
import './Nearby.css'

function Nearby({src, desc, details, roomInfo, roomInfoCont, ratings, price}) {
    return (
        <div className='nearbySearch'>
            <div className='imgDiv'>
                <img className='picture' src={src} alt='' />
                <img className='heart' src="https://img.icons8.com/fluency-systems-regular/48/000000/like--v1.png" alt=''/>
            </div>
            <div className='infoDiv'>
                <div className='searchInfo'>
                    <h4>{desc}</h4>
                    <h3>{details}</h3>
                    <p>____</p>
                    <h4 className='roomInfo'>{roomInfo}<br />{ roomInfoCont}</h4>
                </div>
                <div className='bottomInfo'>                
                    <img src="https://img.icons8.com/material-sharp/100/fa314a/star--v1.png" alt='' />
                    <h4>{ratings}</h4> <h3>${price}/night</h3> 

                    </div>
            </div>
        </div>
    )
}

export default Nearby
