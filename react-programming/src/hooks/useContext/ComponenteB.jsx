
// ComponenteB.jsx
import { useContext } from 'react';
import ColorContext from './ColorContext';

const ComponenteB = () => {
  const color = useContext(ColorContext);
  return <h1 style={{ color }}>Soy Componente B con color dinámico</h1>;
};
export default ComponenteB
