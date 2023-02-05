import React from 'react';
/*
const tst = (props) => {
    return (
        <> 
         <p>olá, {props.nome} {props.sobre}</p>   
        </>
    );
}
*/
class Props extends React.Component {
    render() {
        return (
            <>
                
         <p>olá, {this.props.nome} {this.props.sobre}</p>   
        
            </>
        );
    }
}

export default Props;


