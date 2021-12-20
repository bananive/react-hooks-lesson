import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';

const State = () => {

    const [name, setName] = useState('Sara');

    function changeName() {
        setName('John');
    }

    useEffect(()=>{
        console.log('State mounted');
        return () => {
            console.log('State unmounted');
        };
    }, []);

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>Change name</button>

            <Counter/>

            <Link to="/">Back</Link>
        </div>
    )

}

export default State;
