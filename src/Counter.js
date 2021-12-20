import React, { useState, useEffect } from 'react';

const Counter = () => {

    const [sec, setSec] = useState(0);
    let seconds = 0;

    useEffect(() => {
        // did mount
        const myInterval = setInterval(() => {
            seconds++;
            console.log(seconds);
            setSec(prevSec => prevSec + 1);
        }, 1000);

        return () => {
            // will unmount
            clearInterval(myInterval);
            console.log(`This component lived ${seconds} seconds.`);
        }
    }, []);

    return (
        <div>
            <h2>{sec}</h2>
        </div>
    )
}

export default Counter
