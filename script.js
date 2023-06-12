let titulo=document.getElementById("tituloPrincipal")
titulo.innerHTML=`<h1> bienvenidos  il-volobarber </h1>
<h3> reserva de turnos </h3>`

const newLocal = "lunes 9:00 am";
let horariosDisponibles = [
  "09:00 am",
  "10:00am",
  " 11:00am",
  " 12:00am",
  " 13:00pm",
  " 14:00pm",
  " 15:00pm",
  " 16:00pm",
  "17:00pm",
  "18:00 pm",
  "19:00pm",
  "20:00pm"
];

let listaHorarios = document.getElementById("horarios-lista");

horariosDisponibles.forEach(function(horario) {
  let li = document.createElement("li");
  li.textContent = horario;
  listaHorarios.appendChild(li);

  li.addEventListener("click", function() {
    let cartel = document.createElement("div");
    cartel.textContent = "Completa los datos de reserva:";

    let inputNombre = document.createElement("input");
    inputNombre.placeholder = "Nombre y apellido";
    let inputTelefono = document.createElement("input");
    inputTelefono.placeholder = "Teléfono";

    let botonReservar = document.createElement("button");
    botonReservar.textContent = "Finalizar reserva";
    botonReservar.addEventListener("click", function() {
      let nombre = inputNombre.value;
      let telefono = inputTelefono.value;

      // Guardar los datos en el localStorage
      localStorage.setItem("nombre y apellido", nombre);
      localStorage.setItem("telefono", telefono);

      // Agregar el nombre al elemento de la lista
      li.textContent = horario + " - " + nombre;
      li.classList.add("reservado");

      cartel.style.display = "none";
    });

    cartel.appendChild(inputNombre);
    cartel.appendChild(inputTelefono);
    cartel.appendChild(botonReservar);

    document.body.appendChild(cartel);
  });
});


