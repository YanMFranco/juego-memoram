import React from "react";
import './css/Tablero.css'
import Carta from "./Carta";

const Tablero = ({baraja,parejaSeleccionada,seleccionarCarta}) =>{
    let i=0;
    return(
        <div className="tablero">
            {baraja.map((carta)=> {
                const estaSiendoComparada = parejaSeleccionada.indexOf(carta)>-1;
                return <Carta key={i++} icono={carta.icono} estaSiendoComparada={estaSiendoComparada} seleccionarCarta={()=>seleccionarCarta(carta)} fueAdivinada={carta.fueAdivinada}/>
            })}
        </div>
    )
}

export default Tablero;