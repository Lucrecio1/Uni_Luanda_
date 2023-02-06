import React from 'react';

const Tempo = () => {
    return (
        <>
            <h3>Tempo atual</h3>
            <p>Esamos no seguinte hora:
                {new Date().toLocaleTimeString}
            </p>
        </>
    );
    
}

export default Tempo;
