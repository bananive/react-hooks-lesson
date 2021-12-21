import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const sum = n => {
    console.log('log');
	return n + n;
};

const Memo = () => {

    const [num, setNum] = useState(1);
    const [isGreen, setIsGreen] = useState(true);

    const result = useMemo(() => {
        return sum(num);
    }, [num]);

    // const result = sum(num);

    return (
        <div>
            <h1 onClick={() => setIsGreen(!isGreen)} style={{ color: isGreen ? "green" : "red" }}>Example</h1>
            <h2>Sum {result}</h2>
            <button onClick={() => setNum(num + 1)}>➕</button>
            <Link to="/">Back</Link>
        </div>
    )
}

export default Memo;