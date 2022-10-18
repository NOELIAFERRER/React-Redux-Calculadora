import React from 'react'
import styles from '../styles/clear.module.css'


function Clear ({ limpiar }) {

    return (
        <div 
            className= {styles.boton}
            onClick= {limpiar}> CLEAR
        </div>
    );
}
export default Clear;