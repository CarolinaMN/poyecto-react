import React, { Component } from 'react';


class Welcome extends Component{
    constructor(){
        super();

        this.state = {
            title : "Hola Mundo",
            title2: "Hola Compañeros"
        }
    }

    change = () =>{
        this.setState({title: "Hola"});
    }
    
    componentDidMount() {
        
        setTimeout(() => {
            this.setState({title: "Esto es una prueba"})
            alert("Monstrando un did Mount");
        }, 3000);
        
    }

    render() {
        return (
            <div>
                <h1>Hola {this.props.name}</h1>
                <p>{this.state.title}</p>
                <p>{this.state.title2}</p>
                <button onClick={this.change}>Cambiar</button>
            </div>
        );
    }
}

export default Welcome;