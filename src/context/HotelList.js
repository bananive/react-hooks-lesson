import React, { useContext } from 'react'
import { MyContext } from '../Context';
import HotelCard from './HotelCard';

const HotelList = () => {

    const contextData = useContext(MyContext);

    return (
        <div>
            HotelList {contextData.lat + ' - ' +  contextData.long}
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
        </div>
    )
}

export default HotelList;
