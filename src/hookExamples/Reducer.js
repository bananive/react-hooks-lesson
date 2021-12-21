import React, { useReducer } from 'react';

const initialState = {
    name: '',
    age: 0,
    email: null,
    phone: null,
    message: '',
    users: []
}

const myReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_NAME': 
            return { ...state, name: action.payload };
        case 'CHANGE_AGE': 
            return { ...state, age: action.payload };
        case 'CHANGE_EMAIL': 
            return { ...state, email: action.payload };
        case 'CHANGE_PHONE': 
            return { ...state, phone: action.payload };
        case 'CHANGE_MESSAGE': 
            return { ...state, message: action.payload };
        case 'ADD_USER':
            return {
                ...state,
                users: [ ...state.users, action.payload]
            };
        case 'REMOVE_USER':
            return { ...state, users: state.users.filter((el, index) => index !== action.payload) };
        default: return state;
    }
}


const Reducer = () => {

    const [ state, dispatch] = useReducer(myReducer, initialState);

    const handleFormSubmit = () => {
        const user = {
            name: state.name,
            age: state.age,
            email: state.email,
            phone: state.phone,
            message: state.message
        }
        dispatch({ type: 'ADD_USER', payload: user});
    }

    const removeUser = (index) => {
        console.log(index);
        dispatch({ type: 'REMOVE_USER', payload: index});
    }

    return (
        <div>
            {state.users.map((el, i) => <div key={i}> Name: {el.name}, age: {el.age} <span onClick={() => {removeUser(i)}}>remove</span></div>)}
            <div className="form">
                <input type="text" placeholder="name" onChange={(e)=> { dispatch({ type: 'CHANGE_NAME', payload: e.target.value}) }}  />
                <input type="text" placeholder="age" onChange={(e)=> { dispatch({ type: 'CHANGE_AGE', payload: e.target.value}) }}  />
                <input type="text" placeholder="email" onChange={(e)=> { dispatch({ type: 'CHANGE_EMAIL', payload: e.target.value}) }}  />
                <input type="text" placeholder="phone" onChange={(e)=> { dispatch({ type: 'CHANGE_PHONE', payload: e.target.value}) }}  />
                <textarea placeholder="message" onChange={(e)=> { dispatch({ type: 'CHANGE_MESSAGE', payload: e.target.value}) }}></textarea>
                <button onClick={handleFormSubmit}>Save user</button>
            </div>
        </div>
    );
}

export default Reducer;
