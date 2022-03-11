import React, { Component } from 'react';
import Title from './Title';
import Welcome from './Welcome';
import Counter from './ComponentFuntion/Counter';
import Products from './ComponentFuntion/Products';

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