import React, { useState } from 'react';


function useInput(initialValue) {

    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const clear = () => {
        setValue('');
    }

    return {
        bind: {
            value,
            onChange,
        },
        clear
    };

} 

const Custom = () => {

    const nameInput = useInput('');
    const lastnameInput = useInput('');
    const ageInput = useInput(15);

    const handleClear = () => {
        nameInput.clear();
        lastnameInput.clear();
        ageInput.clear();
    };

    return (
        <>
            {/* <input type='text' value={nameInput.bind.value} onChange={nameInput.bind.onChange} /> */}
            {/* <input type='text' value={lastnameInput.bind.value} onChange={lastnameInput.bind.onChange}  /> */}
            {/* <input type='number' value={ageInput.value} onChange={ageInput.onChange}  /> */}


            <input type='text' {...nameInput.bind}  />
            <input type='text' {...lastnameInput.bind}  />
            <input type='number' {...ageInput.bind}  />


            <button onClick={handleClear}>Tozalash</button>
            <hr/>
            <p>Name: {nameInput.bind.value}</p>
            <p>Lastname: {lastnameInput.bind.value}</p>
            <p>Age: {ageInput.bind.value}</p>
        </>
    );
}

export default Custom;