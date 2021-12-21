import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div>
            <header className="App-header">
                <p> React <code>Hooks</code></p>
                <ul>
                    <li className="main">--- Basic hooks ---</li>
                    <li><Link to="/state">useState</Link></li>
                    <li><Link to="/effect">useEffect</Link></li>
                    <li><Link to="/context">useContext</Link></li>
                    <li className="main">--- Additional hooks ---</li>
                    <li><Link to="/ref">useRef</Link></li>
                    <li><Link to="/reducer">useReducer</Link></li>
                    <li><Link to="/memo">useMemo</Link></li>
                    <li><Link to="/callback">useCallback</Link></li>
                    <li><Link to="/custom">custom hook useApi</Link></li>
                </ul>
            </header>
        </div>
    );
}

export default Intro;
