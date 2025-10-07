"use client"
import {useState} from "react";


function Counter({user}) {
    const [count, setCount] = useState(0)
    return (
        <>
        <p>There are {user.length}users on Api</p>
        <button onClick={() => setCount(count + 1)}>
            {count }
        </button>
        </>
    );
}

export default Counter