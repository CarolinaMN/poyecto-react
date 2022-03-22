import React, { Component } from 'react';
import Title from './Title';
import Welcome from './Welcome';
import Counter from './ComponentFunction/Counter';
import Products from './ComponentFunction/Products';
import Resultados from './ComponentFunction/Resultados';
import ChangeColor from './ComponentFunction/ChangeColor';
import Coordenada from './ComponentFunction/Coordenada';
import { Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import { ContextT } from './context';
import ApisAxios from './ComponentFunction/ApisAxios';




class App extends Component {
 render() {
    return (
        <div>
            
            <BrowserRouter>
                <nav >
                    <Link style={{margin: '10px'}} to="/">Inicio</Link>
                    <Link style={{margin: '10px'}} to="/welcome">Bienvenida</Link>
                    <Link style={{margin: '10px'}} to="/changecolor/Pagina-Con-Color">Color de Página</Link>
                    <Link style={{margin: '10px'}} to="/apis-axios">Peticiones</Link>
                    <Link style={{margin: '10px'}} to="/products">Productos</Link>
                </nav>

                <Routes>
                    <Route path="/"  element={<Resultados></Resultados>} ></Route>
                    <Route path="/welcome"  element={<Welcome></Welcome>} ></Route>
                    <Route path="/changecolor/:title"  element={<ChangeColor></ChangeColor>} ></Route>
                    <Route path="/coordenadas"  element={<Coordenada></Coordenada>} ></Route>
                    <Route path="/apis-axios"  element={<ApisAxios></ApisAxios>} ></Route>
                    <Route path="/products"  element={<Products></Products>} ></Route>
                </Routes>
            </BrowserRouter>
        
            {/* <ContextT.Provider value="hola mundo">

                <Products></Products>

            </ContextT.Provider> */}
        </div>
        
    );
 }
}

export default App;