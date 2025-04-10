import React from 'react';

const Example = () => {
    let nombre = "Juan";

    return (
        <div className="YourName">
            <h1>Hola {nombre}</h1>
            <p>Bienvenido a mi aplicación</p>
        </div>
    );
}

export default Example;