import { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0);

    return (
        <>
            <span>{num}</span>
            <button onClick={() => setNum((i) => ++i)}>+</button>
            <button onClick={() => setNum((i) => --i)}>-</button>
        </>
    );
};

export default Counter;
