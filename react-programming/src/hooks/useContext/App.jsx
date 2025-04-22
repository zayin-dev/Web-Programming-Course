// App.jsx
import { useState } from 'react';
import ColorContext from './ColorContext';
import ComponenteA from './ComponenteA';

const App = () => {
  const [color, setColor] = useState("blue");

  return (
    <ColorContext.Provider value={color}>
      <ComponenteA />
      <button onClick={() => setColor("green")}>Cambiar color</button>
    </ColorContext.Provider>
  );
};

export default App;
