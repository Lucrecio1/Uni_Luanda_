import React, { Component } from 'react';

class Botao extends Component {
    constructor(props){
        super()
        this.state ={
            nome: "Wayame"
        }
        this.Trocar = this.Trocar.bind(this)
    }
    Trocar(){
        this.setState({nome: "Lucrecio"})
    }
    render() {
        return (
            <>
             <p>Nome: {this.state.nome} </p>
             <button onClick={this.Trocar}>Clique</button>   
            </>
        );
    }
}

export default Botao;
