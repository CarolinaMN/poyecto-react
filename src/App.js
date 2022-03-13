import React, { Component } from 'react';
import Title from './Title';
import Welcome from './Welcome';
import Counter from './ComponentFunction/Counter';
import Products from './ComponentFunction/Products';

class App extends Component {
 render() {
    return (
        <div>
            <Products></Products>
        </div>
    );
 }
}

export default App;