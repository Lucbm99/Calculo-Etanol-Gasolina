import React from 'react';
import './style.css';

export function InputEtanol(props) {
    return (
        <>
            <label title="Preço - litro etanol" aria-label="Preço - litro etanol">Preço - litro etanol (R$):</label>
            <div className="campo-etanol">
                <input 
                    type="number" 
                    step="any"
                    id="etanol"
                    value={props.value}
                    onChange={props.onChange}
                    title="Digite o preço do litro do etanol..."
                    autoFocus
                />
            </div>
        </>
    )
}