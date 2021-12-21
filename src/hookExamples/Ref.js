import { useRef, useEffect, useState } from 'react';

const Ref = () => {

    const [user, setUser] = useState({
        name: 'Sara',
        age: 32,
        followers: 1000
    });

    const divRef = useRef(null);
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const followersRef = useRef(null);

    console.log('salom');

    useEffect(() => {
        nameRef.current.value = user.name;
        ageRef.current.value = user.age;
        followersRef.current.value = user.followers;
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({
            name: nameRef.current.value,
            age: ageRef.current.value,
            followers: followersRef.current.value
        });

        divRef.current.className = 'red';

        console.log(divRef.current);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 ref={divRef}>Ref component</h3>
            <div>
                <input type="text" name="name" ref={nameRef} />
                <input type='number' name="age" ref={ageRef} />
            </div>
            <input type='number' name="followers" ref={followersRef} />
            <button type="submit">Update user</button>
        </form>
    )
}

export default Ref;
