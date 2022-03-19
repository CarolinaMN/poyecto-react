import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ChangeColor () {
    const [show, setShow] = useState(true);

    return(
        <div>
            <button onClick={() => setShow(false)}>Dejar de mostrar</button>
            {show ? <MouseColor></MouseColor> : <></>}
        </div>
    )

}

function MouseColor () {
    const [color, setColor] = useState('red');
    const params = useParams();

    useEffect(() => {
        function onMouseMove(event){
            if (event.clientX < window.innerWidth / 2) {
                setColor('red')
            } else {
                setColor('blue')
            }
        }

        window.addEventListener("mousemove", onMouseMove);

        return() => {
            console.log("Deberia limpiar")
            window.removeEventListener("mousemove", onMouseMove);
        }
    }, []);

    console.log("Se esta renderizando")

    return(
        <div>
            <h1>{params.title}</h1>
            <div style={{ height: "100vh", background: color}}>
            </div>
        </div>
    )
}

export default ChangeColor;