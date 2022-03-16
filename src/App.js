import React, { Component } from 'react';
import Title from './Title';
import Welcome from './Welcome';
import Counter from './ComponentFunction/Counter';
import Products from './ComponentFunction/Products';
import Resultados from './ComponentFunction/Resultados';
import ChangeColor from './ComponentFunction/ChangeColor';
import Coordenada from './ComponentFunction/Coordenada';

class App extends Component {
 render() {
    return (
        <div>
            {/* <ChangeColor></ChangeColor> */}
            <Coordenada></Coordenada>
        </div>
    );
 }
}

export default App;