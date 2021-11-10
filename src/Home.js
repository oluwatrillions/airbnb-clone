import React from 'react'
import './Home.css'
import Banner from './Banner'
import Explore from './Explore'
import Choices from './Choices'
import Hosting from './Hosting'

function Home() {
    return (
        <div className='airbnb'>
            <Banner />
            <Explore />
            <Choices />
            <Hosting />
             <h1 className='discovery'>Discover Airbnb Experiences</h1>
            <div className='experiences'>
                <div className='first'>
                    <img src='https://a0.muscache.com/im/pictures/b2f98185-f3bf-40db-ba8d-da0bceeccc65.jpg?im_w=720'
                        alt='' />
                    <h1>Things to do <br/>on your trip <span>Experiences</span></h1>
                </div>
                <div className='second'>
                    <img src='https://a0.muscache.com/im/pictures/cae7ae9a-d069-4c6a-9267-795643472df1.jpg?im_w=720'
                        alt='' />
                    <h1>Things to do<br/> from home <span>Online Experiences</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Home
