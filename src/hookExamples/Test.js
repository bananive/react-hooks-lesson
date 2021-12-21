import React, { useEffect } from 'react';

const Test = () => {

    useEffect(() => {
        console.log('Test mounted!');
        return () => {
            console.log('Test unmounted!');
        }
    }, []);

    return (
        <div>
            <h3>Test</h3>
        </div>
    )
}

export default Test;
