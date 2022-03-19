import ListadoResultados from "./ListadoResultados";
import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';

function Resultado() {

  const [operaciones, setOperacion] = useState([])
  const [show, setShow] = useState(false);

  const nav = useNavigate();

  function sumar(event) {
    event.preventDefault();
    const v1 = parseInt(event.target.num1.value, 10)
    const v2 = parseInt(event.target.valor2.value, 10)
    const suma = v1 + v2

    const nuevo = {
      resultado: suma,
      valor1: v1,
      valor2: v2
    }

    setOperacion([...operaciones, nuevo])
    event.target.valor1.value = ''
    event.target.valor2.value = ''
  }

  function showComponent() {
    nav('/changecolor/Color');
  }

  return (
    <div>
      <form onSubmit={sumar}>
        <p>Ingrese primer valor:
          <input type="text" name="num1" />
        </p>
        <p>Ingrese segundo valor:
          <input type="text" name="valor2" />
        </p>
        <input type="submit" value="Sumar" />
      </form>
      <ul>
        {operaciones.map((elemento) => 
          <li>La suma de {elemento.valor1} y {elemento.valor2} es {elemento.resultado}</li>
        )}
      </ul>
      <button onClick={() => setShow(true)}>Cambiar1</button>
      <button onClick={showComponent}>Cambiar2</button>

      { show ? 
        <Navigate to="/welcome"></Navigate> : <p>Sin Componente</p>
      }
      

      

      {/* <ListadoResultados resultados={operaciones} /> */}
    </div>
  );
}

export default Resultado;
