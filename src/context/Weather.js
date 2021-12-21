import React, { useContext } from 'react';
import { MyContext } from '../hookExamples/Context';

const Weather = () => {
    const contextData = useContext(MyContext);
    return (
        <div>
            {contextData.lat + ' - ' + contextData.long}
        </div>
    )
}

export default Weather;
