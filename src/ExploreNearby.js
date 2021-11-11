import React from 'react'
import Nearby from './Nearby'
import Stays from './Stays'

function ExploreNearby(props) {
    return (
        <div>
            <Stays />
            <Nearby
                src='https://i.postimg.cc/zvLVBQkB/00ea13ae-29e6-446c-a60b-c5bcda521390.jpg'
                alt=''
                desc='Entire serviced apartment in Lekki'
                details='Luxury One Bedroom Oceanfront Apartment in Lekki'
                roomInfo='2 guests. 1 bedroom. 1.5 baths'
                roomInfoCont='Air conditioning .Wifi .Kitchen.Washer'
                ratings={4.53}
                price={66}/>
            <Nearby
                src='https://i.postimg.cc/QdDYBpjn/908e4031-8fef-4839-a326-4e2f0efc2486.jpg'
                alt=''
                desc='Entire rental unit in Lekki'
                details='Modern Stylish Beachfront apartment w Pool'
                roomInfo='5 guests. 2 bedrooms. 2 beds. 2 baths'
                roomInfoCont='Air conditioning. Wifi. Kitchen. Washer'
                ratings={4.96}
                price={ 170}/>
            <Nearby src='https://i.postimg.cc/kXRPNF3J/748b11d9-e3a8-4ad1-b25b-7bdc0ffa4fc9.jpg'
                alt=''
                desc='Entire condominium (condo) in Lagos'
                details='Very Central Home Away From Home'
                roomInfo='4 guests. 2 bedrooms. 2 beds. 1.5 baths'
                roomInfoCont='Air conditioning. Wifi. Kitchen. Washer'
                ratings={4.98}
                price={ 78}/>
            <Nearby src='https://i.postimg.cc/4dGpP1Fr/c13bc95d-d650-4e3e-b0a6-8878f31638d7.jpg'
                alt=''
                desc='Entire condominium (condo) in Ikeja'
                details='OGC | 2 Bed flat Apartment'
                roomInfo='5 guests. 2 bedrooms. 2 beds. 2.5 baths'
                roomInfoCont='Air conditioning. Wifi. Kitchen'
                ratings={4.91}
                price={ 27}/>
            <Nearby src='https://i.postimg.cc/7hd6sHZf/d769728e-cf36-43de-bd31-d6321f4b13dd.jpg'
                alt=''
                desc='Entire rental unit in Lagos'
                details='Rustic & Modern Studio in Lekki Phase 1'
                roomInfo='2 guests. Studio. 1 bed. 1 baths'
                roomInfoCont='Air conditioning. Wifi. Kitchen'
                ratings={4.93}
                price={ 70}/>/>
        </div>
    )
}

export default ExploreNearby
