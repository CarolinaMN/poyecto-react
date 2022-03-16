import { useState } from "react";
import CoordenadaFlecha from './CoordenadaFlecha';

function Coordenada() {

  const [visible, setVisible] = useState(true)

  function ocultar() {
    if (visible === true) {
        setVisible(false)
    } else {
        setVisible(true)
    }
  }

  return (
    <div>
      {visible === true ? <CoordenadaFlecha /> : null}
      <button onClick={ocultar}>Ocultar</button>
    </div>
  );
}

export default Coordenada;