import './App.css';
import Boton from './components/boton.jsx'
import Pantalla from './components/pantalla.jsx'
import { useState } from 'react'
import Clear from './components/clear.jsx'
import { evaluate } from 'mathjs'

function App() {

  const[calculo, setCalculo] = useState();

  const agregarInput = (valor) => {
    setCalculo(calculo + valor)
  };

  const calcularResultado = () => {
    setCalculo(evaluate(calculo))
  }

  const limpiar = () => {
    setCalculo('')
};

  return (
    <div className= 'container'>
      <div className= 'calculadora-box'>
        <Pantalla
          calculo = {calculo} />
        <div className= 'botones-fila'> 
          <Boton id= '1' manejarClick= {agregarInput} />  
          <Boton id= '2' manejarClick= {agregarInput} />  
          <Boton id= '3' manejarClick= {agregarInput} />  
          <Boton id= '+' manejarClick= {agregarInput} />  
        </div>  
        <div className= 'botones-fila'>
          <Boton id= '4' manejarClick= {agregarInput} />  
          <Boton id= '5' manejarClick= {agregarInput} />  
          <Boton id= '6' manejarClick= {agregarInput} />  
          <Boton id= '-' manejarClick= {agregarInput} />  
        </div> 
        <div className= 'botones-fila'>
          <Boton id= '7' manejarClick= {agregarInput} />  
          <Boton id= '8' manejarClick= {agregarInput} />  
          <Boton id= '9' manejarClick= {agregarInput} />  
          <Boton id= '*' manejarClick= {agregarInput} />  
        </div>      
        <div className= 'botones-fila'>
          <Boton id= '=' manejarClick= {calcularResultado} />  
          <Boton id= '0' manejarClick= {agregarInput} />  
          <Boton id= '.' manejarClick= {agregarInput} />  
          <Boton id= '/' manejarClick= {agregarInput} />  
        </div>   
        <Clear limpiar = {limpiar} />
      </div>
    </div>
  );
}
export default App;
