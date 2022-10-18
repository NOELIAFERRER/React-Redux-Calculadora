import React from 'react'
import styles from '../styles/pantalla.module.css'

function Pantalla ({calculo}) {
 
     return (
        <div 
          className = {styles.container}
          onChange = {calculo}
          >
          {calculo}
        </div>
    );
}
export default Pantalla;