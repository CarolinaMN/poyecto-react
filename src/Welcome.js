import React, { Component } from 'react';


class Welcome extends Component{
    constructor(){
        super();

        this.state = {
            title : "Hola Mundo",
            title2: "Hola Compañeros",
            count: 0
        }
    }

    change = () =>{
        this.setState({title: "Hola"});


        this.setState({count: 1});
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({title: "Esto es una prueba"})
            // alert("Monstrando un did Mount");
        }, 3000);
    }

    componentDidUpdate() {
        // alert("Se cambió el estado Title");
    }

    componentWillUnmount(){
        alert("Se desmonto el componente Welcome")
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