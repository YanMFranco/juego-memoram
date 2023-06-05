import React from "react";
import './css/Carta.css';
import ReactCardFlip from "react-card-flip"


const Carta = ({ icono, estaSiendoComparada, seleccionarCarta, fueAdivinada }) => {

    return (
        <div className="carta" onClick={seleccionarCarta}>
            <ReactCardFlip isFlipped={estaSiendoComparada || fueAdivinada}>
                <div className="portada" key="front"></div>
                <div className="contenido" key="back">
                    <i className={`fa ${icono} fa-5x`}></i>
                </div>
            </ReactCardFlip>

        </div>
    )
}

export default Carta;