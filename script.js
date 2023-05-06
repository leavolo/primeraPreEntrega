// Definimos la cantidad máxima de turnos disponibles
const turnosDisponibles = 5;

// Pedimos el nombre del usuario
const nombreUsuario = prompt("Ingrese su nombre:");

// Mostramos un mensaje de bienvenida
alert(`¡Bienvenido ${nombreUsuario} a nuestro sistema de reserva de turnos!`);

// Creamos un ciclo para que el usuario pueda intentar reservar un turno hasta que haya turnos disponibles
while (turnosDisponibles > 0) {

  // Pedimos al usuario que ingrese el número de turno que desea reservar
  const numeroTurno = prompt(`Quedan ${turnosDisponibles} turnos disponibles. Ingrese el número de turno que desea reserva:\n1\n 2\n 3\n 4\n 5\n`);

  // Verificamos si el número de turno es válido (es decir, está entre 1 y la cantidad máxima de turnos disponibles)
  if (numeroTurno >= 1 && numeroTurno <= turnosDisponibles) {
    
    // Mostramos un mensaje de confirmación de reserva
    alert(`Perfecto, ${nombreUsuario}. Ha reservado el turno número ${numeroTurno}. ¡Nos vemos pronto!`);
    
    // Reducimos la cantidad de turnos disponibles
    turnosDisponibles--;
    
    // Salimos del ciclo
    break;
  
  } else {
    
    // Si el número de turno no es válido, mostramos un mensaje de error y volvemos a pedir al usuario que ingrese un número de turno
    alert(`El número de turno ingresado no es válido. Por favor, ingrese un número entre 1 y ${turnosDisponibles}.`);
  
  }

}

// Si no hay más turnos disponibles, mostramos un mensaje de error
if (turnosDisponibles === 0) {
  alert(`Lo sentimos, ${nombreUsuario}. Ya no quedan turnos disponibles.`);
}
