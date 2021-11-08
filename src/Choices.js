import React from 'react'
import Card from './Card'
import './Choices.css'

function Choices(props) {
    return (
        <div className='h3'>
            <h1>Live Anywhere</h1>
        <div className='liveAnywhere'>
            <Card
                src='https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480'
                alt=''
                description='Outdoor Getaways' />
            <Card
                src='https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480'
                alt=''
                description='Unique Stays' />
            <Card
                src='https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480'
                alt=''
                description='Entire Homes' />
            <Card
                src='https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480'
                alt=''
                description='Pets Allowed' />
        </div>
     </div>
    )
}

export default Choices
