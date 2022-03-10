import React, { Component } from 'react';
import Title from './Title';
import Welcome from './Welcome';

class App extends Component {
 render() {
    return (
        <div>
            <Welcome name="Juan"></Welcome>
        </div>
    );
 }
}

export default App;