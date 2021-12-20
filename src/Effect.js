import React, { useEffect, useState } from 'react';
import Test from './Test';
import { Link } from 'react-router-dom';

const Effect = () => {

    const [name, setName] = useState('Sara');
    const [age, setAge] = useState(16);
    const [hidden, setHidden] = useState(false);

    useEffect(()=>{
        console.log('Effect mounted');
        return () => {
            console.log('Effect unmounted');
        };
    }, []);

    function handleChangeName() {
        setName('John');
        setHidden(true);
    }

    function handleChangeAge() {
        setAge(15);
        setHidden(false);
    }

    return (
        <div>
            <h1>{name} , {age}</h1>
            <button onClick={handleChangeName}>change name</button>
            <button onClick={handleChangeAge}>change age</button>
            { hidden ? '' : <Test/> }

            <Link to="/">Back</Link>
        </div>
    )
}

export default Effect;


// class Test extends React.Component {

//     componentWillMount() {

//     }

//     componentDidMount() {

//     }

//     componentWillReceiveProps() {

//     }

//     shouldComponentUpdate() {
//         return true;
//     }

//     componentWillUpdate() {

//     }

//     componentDidUpdate() {

//     }

//     componentWillUnmount() {

//     }
 
// }