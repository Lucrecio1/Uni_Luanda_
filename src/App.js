import React from 'react';
import UsandoProps from './componentes/usando_props';
import Function from './componentes/function';
import Classe from './componentes/classe';
import Props from './componentes/props';
import ComA from './componentes/ComA';
import './App.css';
import Adicao from './componentes/adicao';
import UsandoCss from './componentes/usando_css';

function App() {
  return (
    <>
    <div className='container'>
      O que famos fazer ham Jão?
      <hr/>
      <UsandoProps nome="lucrécio" apelido="Barnabé"/>
      <Function />
      <hr/>
      <Classe/>
      <hr/>
      <Props nome="Regina" sobre="Saluana"/>
      <hr/>
      <ComA nome="Barnabé"/>
      <ComA nome="Lucrecio"/>
      <ComA nome="Alice"/>
      <ComA nome="Wayame"/>
      <hr/>
      <Adicao a={3} b={3}/>
      <hr/>
      <UsandoCss />
    </div>

    </>
  );
}

export default App;
