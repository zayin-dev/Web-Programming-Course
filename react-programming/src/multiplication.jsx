
import { useState } from "react";

const Multiplication = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState();

    const multiplication = () => {
        setResult(num1 * num2);
    }

    const modifyNum1 = (e) => {
        setNum1(e.target.value);
    }

    const modifyNum2 = (e) => {
        setNum2(e.target.value);
    }

    return (
        <div>
            <br />
                <input type="number" value={num1} onChange={modifyNum1}/>
                <input type="number" value={num2} onChange={modifyNum2}/>
                <input type="number" readOnly value={result}/>
                <button onClick={multiplication}>Multiplicar</button>
            <br />
        </div>
    )
}

export default Multiplication;