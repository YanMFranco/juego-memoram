import './App.css'
import Header from './componentes/Header'
import Tablero from './componentes/Tablero'
import Baraja from './utils/Baraja'
import { useState } from 'react'



function App() {

  const getEstadoInicial = () => {
    const baraja = Baraja();
    return baraja;
  }

  const [estado, setEstado] = useState({
    baraja: getEstadoInicial(),
    parejaSeleccionada: [],
    estaComparando: false,
    numeroDeIntentos: 0,
  });

  const seleccionarCarta = (carta) => {
    if (estado.estaComparando || estado.parejaSeleccionada.indexOf(carta) > -1 || carta.fueAdivinada) {
      return;
    }

    const nuevaParejaSeleccionada = [...estado.parejaSeleccionada, carta];
    setEstado({ ...estado, parejaSeleccionada: nuevaParejaSeleccionada });

    if (nuevaParejaSeleccionada.length === 2) {
      compararPareja(nuevaParejaSeleccionada);
    }
  }



  const compararPareja = (nuevaParejaSeleccionada) => {
    setEstado((estadoAnterior) => ({
      ...estadoAnterior,
      estaComparando: true,
    }));

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = nuevaParejaSeleccionada;
      let baraja = estado.baraja;

      if (primeraCarta.icono === segundaCarta.icono) {
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {
            return carta;
          }

          return { ...carta, fueAdivinada: true };
        });
      }

      verificarSiHayGanador(baraja);
      setEstado({
        parejaSeleccionada: [],
        baraja,
        estaComparando: false,
        numeroDeIntentos: estado.numeroDeIntentos + 1,
      })
    }, 1000)
  }

  const verificarSiHayGanador = (baraja) => {
    if (
      baraja.filter((carta) => !carta.fueAdivinada).length === 0
    ) {
      alert(`Ganaste en ${baraja.numeroDeIntentos} intentos!`);
    }
  }

  const resetearPartida = () => {
    setEstado({
      baraja: getEstadoInicial(),
      parejaSeleccionada: [],
      estaComparando: false,
      numeroDeIntentos: 0,
    });
  }


  return (
    <>
      <Header numeroDeIntentos={estado.numeroDeIntentos} resetearPartida={() => resetearPartida()} />
      <Tablero baraja={estado.baraja} parejaSeleccionada={estado.parejaSeleccionada} seleccionarCarta={(carta) => seleccionarCarta(carta)} />
    </>
  )

}

export default App
