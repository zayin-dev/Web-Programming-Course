
import { useState }  from "react";

const Factorial = () => {
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState(1);

    const factorial = (e) => {
        let number = parceInt(e.target.value);

        if (isNaN(number) || number < 0) {
            setResult(1);
            return;
        } else {
            let fact = 1;
            for (let i = 1; i <= setNumber(number); i++) {
                fact *= i;
            }
            setResult(fact);
        }
        
    }

    return (
        <div>
            <p>Factorial de un numero</p>
            <input type="number" value={number} onChange={factorial} />
            <input readOnly value={fact} />
        </div>
    )
}

export default Factorial;