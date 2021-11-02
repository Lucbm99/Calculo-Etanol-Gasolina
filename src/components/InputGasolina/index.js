import React from 'react';
import './style.css';

export function InputGasolina(props) {
    return (
        <>
        <label title="Preço - Litro Gasolina" aria-label="Preço - Litro Gasolina">Preço - litro gasolina (R$):</label>
            <div className="campo-gasolina">
                <input 
                type="number" 
                step="any"
                id="gasolina"
                value={props.value}
                onChange={props.onChange}
                title="Digite o preço do litro da gasolina"
                />
            </div>
        </>
    )
}