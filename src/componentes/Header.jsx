import React from "react";
import './css/Header.css';

const Header = ({numeroDeIntentos,resetearPartida}) =>{
    return(
        <header>
            <div className="titulo">Juego de Parejas
                <button className="boton-reiniciar" onClick={resetearPartida}>Reiniciar</button>
            </div>
            <div className="titulo">
                Intentos:{numeroDeIntentos}
            </div>
        </header>
    )
}

export default Header