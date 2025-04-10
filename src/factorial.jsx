
import { useState } from "react";

const Factorial = () => {
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState();

    const factorial = () => {
        let fact = 1;
        for (let i = 1; i <= number; i++) {
            fact *= i;
        }
        setResult(fact);
    }

    const handleChange = (e) => {
        setNumber(e.target.value);
    }

    return (
        <div className="grid-container">
            <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
            </script>
            <div className="title">
                <h1><span>Factorial</span> Calculator</h1>
                <p>Calculate the factorial of a number.</p>
            </div>
            <div className="description">
                <p>
                In mathematics, the factorial of a non-negative integer \(n\), denoted by \(n!\), is the 
                product of all positive integers less than or equal to \(n\). The factorial of n also equals 
                the product of \(n\) with the next smaller factorial

                    \[ n! = n \times (n-1) \times (n-2) \times \ldots \times 3 \times 2 \times 1 \]
                or recursively as

                    \[ n! = n \times (n-1)! \]

                For example, the factorial of 5 is

                    \[ 5! = 5 \times 4! = 5 \times 4 \times 3 \times 2 \times 1 = 120 \]
                    
                The value of \(0!\) is \(1\), according to the convention for an empty product.
                </p>
            </div>
            <div className="factorial-calculator">
                <input type="number" value={number} onChange={handleChange} />
                <input type="number" readOnly value={result}/>
                <button onClick={factorial}>Factorial</button>
            </div>
        </div>
    )
}

export default Factorial;

