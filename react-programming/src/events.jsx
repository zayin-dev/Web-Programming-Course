
import { useState } from 'react';

const Events = () => {
    const [name, setName] = useState('Dalev');

    const welcome = () => {
        alert('Bienvenido: ' + name);
    }


    return (
        <div>
            <p>Nombre: {name}</p><br />
            <button onClick={welcome}>Bienvenido</button><br />
            <button onClick={() => setName("Tzayin")}>Cambiar Nombre</button>
        </div>
    )
}

export default Events;