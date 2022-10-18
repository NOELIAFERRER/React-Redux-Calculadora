import React from 'react';
import styles from '../styles/boton.module.css'


function Boton ({ id, manejarClick }) {

      return (
        <div 
            className= {styles.botonClick} 
            onClick= {() => manejarClick(id)}> 
            {id} 
        </div>
    );
}
export default Boton;
