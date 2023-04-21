"use strict";
const TIEMPO_CICLO = 2; // Constante que indica el tiempo de duración de la imagen en el Slider
// Manejador Principal del evento de Elementos de Dom ya cargados
const handlerPrincipal = () => {
  let reloj; // Identificador de temporizador
  const botones = document.getElementsByClassName("boton"); // Elementos radioButton del Slider
  const slider = document.getElementsByClassName("slider")[0]; // Elemento Slider
  // Manejador del evento click del Slider
  const handlerBotones = (evento) => {
    // Si el elemento en donde se produjo el evento es un radioButton...
    if (evento.target.name === "boton") {
      clearInterval(reloj); // Paramos el temporizador, y con ello el scroll automático del Slider
    }
  };
  slider.addEventListener("click", handlerBotones); // Listener del Evento Click en el Slider
  // Se arranca automáticamente el cronómetro y se ejecuta la función de su interior
  reloj = setInterval(() => {
    /*
    Si No es el último radioButton se cambia el Checked al radioButton siguiente, y si no al primero de todos.
    */
    for (let i = 0; i < botones.length; i++) {
      if (botones[i].checked) {
        if (i < botones.length - 1) {
          botones[i + 1].checked = true;
          botones[i].checked = false;
        } else {
          botones[0].checked = true;
          botones[i].checked = false;
        }
      }
    }
  }, TIEMPO_CICLO * 1000); // Se itera según eel tiempo de duración indicado arriba
};
document.addEventListener("DOMContentLoaded", handlerPrincipal);
