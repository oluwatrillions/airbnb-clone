import React from 'react'
import CitiesAround from './CitiesAround'
import './Explore.css'

function Explore(props) {
    return (
        <div>
            <div className='explore-section'>
                <CitiesAround
                    src='	https://a0.muscache.com/im/pictures/ee86b8d6-b214-43f5-912c-3db2637a5724.jpg?im_q=medq&im_w=240'
                    alt=''
                    city='Lagos'
                    distance='15 minute drive'/>
                <CitiesAround
                    src='https://a0.muscache.com/im/pictures/aff9e173-b551-44e4-80f3-bd9b9d632f8b.jpg?im_q=medq&im_w=240'
                    alt=''
                    city='Ikeja'
                    distance='30 minutes drive'/>
                <CitiesAround
                    src='https://a0.muscache.com/im/pictures/1bbded7d-51fe-49b8-b85d-e458b3e218bf.jpg?im_q=medq&im_w=240'
                    alt=''
                    city='Port-Harcourt'
                    distance='8 hours drive'/>
                <CitiesAround
                    src='https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_q=medq&im_w=240'
                    alt=''
                    city='Lekki'
                    distance='45 minutes drive'/>
                <CitiesAround
                    src='https://a0.muscache.com/im/pictures/2f5a15c7-2170-420a-9c48-9ac88a80a7fa.jpg?im_q=medq&im_w=240'
                    alt=''
                    city='Ibadan'
                    distance='2 hours drive'/>
                <CitiesAround
                    src='	https://a0.muscache.com/im/pictures/a1617dd0-7140-4c64-814f-384d174a78be.jpg?im_q=medq&im_w=240'
                    alt=''
                    city='Enugu'
                    distance='7 hour drive'/>
                <CitiesAround
                    src='	https://a0.muscache.com/im/pictures/1bb8b6ff-17ec-4f01-96df-27d0ba265b16.jpg?im_q=medq&im_w=240'
                    alt=''
                    city='Ikorodu'
                    distance='30 minute drive'/>
                <CitiesAround
                    src='https://a0.muscache.com/im/pictures/1a653f75-87bd-41f0-91b5-f9f2c3194984.jpg?im_q=medq&im_w=240'
                    city='Ado-Ekiti'
                distance='4.5 hour'/>
            </div>
        </div>
    )
}

export default Explore
