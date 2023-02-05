import React, { Component } from 'react';

class Adicao extends Component {
    render() {
        return (
            <div>
                <p>O resultado de {this.props.a}+{this.props.b}= {this.props.a+this.props.b}</p>
            </div>
        );
    }
}

export default Adicao;
