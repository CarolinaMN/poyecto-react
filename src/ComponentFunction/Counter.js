import React, { useState, useContext } from 'react';
import { ContextT } from '../context';

function Counter() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState([0, 0, 0, 0, 0]);

    const contextHook = useContext(ContextT);


    const aleatorios = () => {
        let vec = new Array(5);

        for (let index = 0; index < vec.length; index++) {
           vec[index] = Math.trunc(Math.random() * 10);
        }
        // const v = Math.trunc(Math.random() * 10);
        setNum(vec)
    }

    const changeCount = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <h1>{contextHook}</h1>
            <button onClick={() => setCount(count + 1)}>Cambiar</button>
            <p>El contador es: {count}</p>

            <br/>

            <button onClick={aleatorios}>Generar aleatorio</button>
            <p>El número aleatorio son: </p>
            { num.map(n => (
                <p>El valor es: {n}</p>
            ))}

        </div>
    )
}

export default Counter;