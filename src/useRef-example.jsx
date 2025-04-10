
import { useRef } from 'react';

const UseRefExample = () => {
    const inputValue = useRef(null);

    const showInputvalue = () => {
        alert('El valor de la caja mágica es: ' + inputValue.current.value);
    }
    
    return (
        <>
            <h2>Referencia</h2>
            <input ref={inputValue} placeholder='Escribe algo... '/>
            <button onClick={showInputvalue}>Mostrar Valor</button>
        </>
    )
}

export default UseRefExample;