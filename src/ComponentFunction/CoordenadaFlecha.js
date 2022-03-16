import { useState, useEffect } from "react";

function CoordenadaFlecha() {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 })

  useEffect(() => {
    window.addEventListener('mousemove', fijarPosicion)
    
    return () => { 
      alert("Se desmontó el componente")
      window.removeEventListener('mousemove', fijarPosicion) 
      console.log('se borro el registro de eventos')
    }

  }, [])

  function fijarPosicion(e) {
    setPosicion({ x: e.clientX, y: e.clientY })
  }

  return (
    <div>
      <p>{posicion.x} - {posicion.y}</p>
    </div>
  );
}

export default CoordenadaFlecha;