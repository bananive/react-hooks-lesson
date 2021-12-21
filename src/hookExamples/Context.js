import React, { createContext } from 'react';
import Catalog from '../context/Catalog';
import Home from '../context/Home';
import { Link } from 'react-router-dom';

export const MyContext = createContext();

const Context = () => {

    return (
        <MyContext.Provider value={{ lat: 41.32515129985789, long: 69.24520894779826 }}>
            <Home/>
            <Catalog/>
            <Link to="/">Back</Link>
        </MyContext.Provider>
    );
}

export default Context;
