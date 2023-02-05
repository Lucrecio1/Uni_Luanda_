import React from 'react';
import UsandoProps from './componentes/usando_props';
import Function from './componentes/function';
import Classe from './componentes/classe';

import './App.css';
function App() {
  return (
    <>
    <div className='container'>
      O que famos fazer ham Jão?
      <UsandoProps nome="lucrécio" apelido="Barnabé"/>
      <Function />
      <Classe/>
    </div>

    </>
  );
}

export default App;
