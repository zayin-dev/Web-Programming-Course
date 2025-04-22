
import React from 'react'

export default function App() {
    let year = 2025;
    const cars = [
        {
            name : "Mercedes",
            model : "Benz",
            year : year,
            color : "black",
        }, 
        
        {
            name : "BMW",
            model : "X5",
            year : year,
            color : "white",
        }, 
        
        {
            name : "Audi",
            model : "A6",
            year : year,
            color : "blue",
        }, 
        
        {
            name : "Toyota",
            model : "Corolla",
            year : year,
            color : "red",
        },
        
        {
            name : "Honda",
            model : "Civic",
            year : year,
            color : "green",
        }
    ];

    const fruits = ["apple", "banana", "orange", "kiwi", "grape"];

    return (
        <>
            <h2 className="Cars">Automoviles</h2>
            <ul classname="carList">
                {cars.map((car, index) => (
                    <li key={index}>
                        {car.name} {car.model} {car.year} {car.color}
                    </li>
                ))}
            </ul>

            <h2 className="Fruits">Frutas</h2>
            <ul classname="fruitList">
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        {fruit}
                    </li>
                ))}
            </ul>
        </>
    )
}
