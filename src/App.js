import React, { useState } from 'react';
import './App.css';

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
        <div className="form-combustivel">
          Você sabe com qual combustível compensa mais abastecer seu carro? <br/> 
          Utilize a calculadora abaixo:
        </div>
        <div className="campos-combustiveis">
          <label>Preço etanol:</label>
          <div className="campo-etanol">
            <input 
              type="number" 
              step="any"
              id="etanol"
              placeholder="Digite o preço do etanol..."
              value={precoEtanol}
              onChange={(e) => setPrecoEtanol(e.target.value)}
            />
          </div>

          <label>Preço gasolina:</label>
          <div className="campo-gasolina">
            <input 
              type="number" 
              step="any"
              id="gasolina"
              placeholder="Digite o preço da gasolina..."
              value={precoGasolina}
              onChange={(e) => setPrecoGasolina(e.target.value)}
            />
          </div>

        </div>
        <button onClick={calcularPrecoCombustivel}>Calcular</button>
      </div>
    </>
  );
}

export default App;
