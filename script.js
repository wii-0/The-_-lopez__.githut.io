// Seleccionamos el botón y el body
const themeSwitcher = document.getElementById("theme-switcher");
const body = document.body;

// Escuchamos el clic en el botón
themeSwitcher.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    // Cambiar el texto del botón según el tema
    if (body.classList.contains("light-theme")) {
        themeSwitcher.textContent = "Modo Oscuro";
    } else {
        themeSwitcher.textContent = "Modo Claro";
    }
});








// Seleccionar todos los enlaces del <nav>
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
      event.preventDefault(); // Evita el comportamiento por defecto

      // Obtener el ID al que apunta el enlace
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Desplazarse suavemente hasta el elemento
      targetElement.scrollIntoView({
          behavior: 'smooth', // Desplazamiento suave
          block: 'start'     // Alinear al inicio de la sección
      });
  });
});



const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const toggle = document.querySelector('.toggle')


const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]


const normalizeNumber = (number) => {
  return number.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
}


document.querySelector('.toggle').addEventListener('click', () => {
  document.querySelector('.div-esquina').classList.toggle('dark');
});



function setTime () {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours >= 13 ? hours % 12 : hours
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  hourElement.style.transform = `translate(-50%, -100%) rotate(${ scale(hoursForClock, 0, 12, 0, 360) }deg)`
  minuteElement.style.transform = `translate(-50%, -100%) rotate(${ scale(minutes, 0, 60, 0, 360) }deg)`
  secondElement.style.transform = `translate(-50%, -100%) rotate(${ scale(seconds, 0, 60, 0, 360) }deg)`

  timeElement.innerHTML = `${ normalizeNumber(hoursForClock) }:${ minutes < 10 ? `0${ minutes }` : minutes }:${ normalizeNumber(seconds) } ${ ampm }`
  dateElement.innerHTML = `${ days[ day ] }, ${ months[ month ] } <span class="circle">${ date }</span>`
}


const scale = (num, inMin, inMax, outMin, outMax) => {
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}


setTime()


setInterval(setTime, 1000)







document.addEventListener("DOMContentLoaded", () => {
  const toggleRowsButton = document.getElementById("toggle-rows");
  const projectRows = document.querySelectorAll(".project-row");

  let currentVisibleRow = 0;

  // Mostrar más o menos filas al hacer clic en el botón
  toggleRowsButton.addEventListener("click", () => {
    if (currentVisibleRow < projectRows.length - 1) {
      // Mostrar la siguiente fila
      currentVisibleRow++;
      projectRows[currentVisibleRow].classList.add("visible");

      // Cambiar el texto a "Mostrar menos" si es la última fila
      if (currentVisibleRow === projectRows.length - 1) {
        toggleRowsButton.textContent = "Mostrar menos";
      }
    } else {
      // Ocultar todas las filas excepto la primera
      for (let i = 1; i < projectRows.length; i++) {
        projectRows[i].classList.remove("visible");
      }
      currentVisibleRow = 0;

      // Cambiar el texto de nuevo a "Mostrar más"
      toggleRowsButton.textContent = "Mostrar más";
    }
  });
});
