
// Definimos la cantidad máxima de turnos disponibles
const MAX_TURNOS_DISPONIBLES = 5;

// Función para reservar un turno
function reservarTurno() {
  // Pedimos al usuario que ingrese el número de turno que desea reservar
  const numeroTurno = prompt(`Quedan ${MAX_TURNOS_DISPONIBLES} turnos disponibles. Ingrese el número de turno que desea reservar:\n1\n 2\n 3\n 4\n 5\n`);

  // Verificamos si el número de turno es válido (es decir, está entre 1 y la cantidad máxima de turnos disponibles)
  if (numeroTurno >= 1 && numeroTurno <= MAX_TURNOS_DISPONIBLES) {
    // Mostramos un mensaje de confirmación de reserva
    alert(`Perfecto, ${nombreUsuario}. Ha reservado el turno número ${numeroTurno}. ¡Nos vemos pronto!`);

    // Reducimos la cantidad de turnos disponibles
    MAX_TURNOS_DISPONIBLES;
  } else {
    // Si el número de turno no es válido, mostramos un mensaje de error y volvemos a llamar a la función
    alert(`El número de turno ingresado no es válido. Por favor, ingrese un número entre 1 y ${MAX_TURNOS_DISPONIBLES}.`);
    reservarTurno();
  }
}

// Pedimos el nombre del usuario
const nombreUsuario = prompt("Ingrese su nombre:");

// Mostramos un mensaje de bienvenida
alert(`¡Bienvenido ${nombreUsuario} a nuestro sistema de reserva de turnos!`);

// Ejecutamos la función para reservar un turno
reservarTurno();

// Si no hay más turnos disponibles, mostramos un mensaje de error
if (MAX_TURNOS_DISPONIBLES === 0) {
  alert(`Lo sentimos, ${nombreUsuario}. Ya no quedan turnos disponibles.`)
  
};


const herramientas= ["maquina","tijera","peine"]
console.log (herramientas)

herramientas.push("cepillo")
console.log(herramientas);



const estudiantes={
  nombre:"lea",
  apellido:"volo",
  comision:"10"
}
console.log (estudiantes.apellido)









const arrayNotas =[
  8,9,3 
]
let promedio=(arrayNotas[0] + arrayNotas[1]+ arrayNotas[2])/3
console.log(promedio)



