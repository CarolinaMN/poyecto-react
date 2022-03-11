import React, { Component } from 'react';
import Welcome from './Welcome';

class Title extends Component{
    constructor(){
        super();
        this.state = {
            comp : false
        }
    }


    changeState = () => {
        this.setState({
            comp : true
        });
     }


    render(){
        return (
            <div>
                { this.state.comp == false ?  <Welcome name="Juan"></Welcome> : <></>}
                <button onClick={this.changeState}>Ocultar</button>
            </div>
        
        )
    }
}

export default Title;