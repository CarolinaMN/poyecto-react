import React, { Component } from 'react';
import Title from './Title';
import Welcome from './Welcome';
import Counter from './ComponentFunction/Counter';
import Products from './ComponentFunction/Products';
import Resultados from './ComponentFunction/Resultados';
import ChangeColor from './ComponentFunction/ChangeColor';
import Coordenada from './ComponentFunction/Coordenada';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import { ContextT } from './context';

class App extends Component {
 render() {
    return (
        <div>
            
            <BrowserRouter>

                <Routes>
                    <Route path="/welcome"  element={<Welcome></Welcome>} ></Route>
                    <Route path="/changecolor"  element={<ChangeColor></ChangeColor>} ></Route>
                    <Route path="/coordenadas"  element={<Coordenada></Coordenada>} ></Route>
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