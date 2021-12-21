import React, { useCallback, useState, useEffect } from 'react';
import { Album } from '../components/Album';

const Callback = () => {

    const [isRed, setIsRed] = useState(true);
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json()).then(res => {
            setData(res);
        });
    }, []);

    // const getItemsFromApi = () => {
    //     console.log('run');
    //     return data.slice(0, count);
    // };

    const getItemsFromApi = useCallback(() => {
        console.log('run');
        return data.slice(0, count);
    }, [data, count]);

    return (
        <>
            <h2 style={{ color: isRed ? 'red' : 'green' }} onClick={() => { setIsRed(prev => !prev) }}>Albums {count}</h2>
            <button onClick={() => { setCount(prev => prev + 10)}}>Add</button>
            <Album getAlbums={getItemsFromApi} />
        </>
    );
}

export default Callback;