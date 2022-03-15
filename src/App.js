import React, { Component } from 'react';
import Title from './Title';
import Welcome from './Welcome';
import Counter from './ComponentFunction/Counter';
import Products from './ComponentFunction/Products';
import Resultados from './ComponentFunction/Resultados';

class App extends Component {
 render() {
    return (
        <div>
            <Products title="Tabla de productos"></Products>
            {/* <Resultados></Resultados> */}
        </div>
    );
 }
}

export default App;