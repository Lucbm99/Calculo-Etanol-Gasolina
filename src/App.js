import React, { useState } from 'react';
import './App.css';

import { Descricao } from './components/Description';
import { ImageCombustivel } from './components/ImageCombustivel';
import { InputEtanol } from './components/InputEtanol';
import { InputGasolina } from './components/InputGasolina';

function App() {
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [precoEtanol, setPrecoEtanol] = useState('');

  const calcularPrecoCombustivel = (e) => {
    e.preventDefault();
    let calculo = (precoEtanol / precoGasolina);

    if(!precoEtanol || !precoGasolina || precoGasolina === 0 || precoEtanol === 0) {
      alert("Valores não numéricos ou zero. Verifique e tente novamente.")
    } else if(calculo > 0.7) {
      alert(`O cálculo será igual a ${calculo.toFixed(2)}. Portanto, compensa mais abastecer com gasolina.`);
    } else {
      alert(`O cálculo será igual a ${calculo.toFixed(2)}. Portanto, compensa mais abastecer com etanol.`);
    }

    setPrecoEtanol('');
    setPrecoGasolina('');
  }
  
  return (
    <>
      <div className="area-geral">
          <ImageCombustivel />
          <Descricao />

          <div className="campos-combustiveis">
            <InputEtanol 
              value={precoEtanol} 
              onChange={(e) => setPrecoEtanol(e.target.value)} 
            />

            <InputGasolina 
              value={precoGasolina}
              onChange={(e) => setPrecoGasolina(e.target.value)} 
            />
          </div>
          <button onClick={calcularPrecoCombustivel} title="Fazer cálculo">Calcular</button>
        </div>
    </>
  );
}

export default App;
