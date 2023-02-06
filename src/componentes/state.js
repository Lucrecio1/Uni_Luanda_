import React, { Component } from 'react';

class State extends Component {
    constructor(){
        super()
        this.state = {
            nome: "Lucrecio",
            idade:25
        }
    }
    render() {
        return (
            <div>
                <p>Nome: {this.state.nome}</p>
                <p>Idade: {this.state.idade}</p>
            </div>
        );
    }
}

export default State;
