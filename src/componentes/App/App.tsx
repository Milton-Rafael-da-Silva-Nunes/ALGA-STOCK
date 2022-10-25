import React from 'react';
import './App.css';
import Header from '../Header';
import Button from '../Button';

function TestComponent() {
  return <img width="16" src="https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-archaeological-research-magnifying-glass-illustration-image_1213916.jpg" 
  alt="Lupa de pesquisa" 
  />
}

function App() {
  return (
    <div className="App">
      <Header title={"AlgaStock"} />

      <div className='Conteiner'>
        <Button
         onClick={() => window.alert('Clicouuu!!!')}
         appendIcon={<TestComponent />} 
         >
          Alert
        </Button>
      </div>
    </div>
  );
}

export default App;
