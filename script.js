


let titulo = document.getElementById("tituloPrincipal");
titulo.innerHTML = `<h1> bienvenidos a il-volobarber </h1>`;

let tituloAbajo = document.getElementById("tituloSecundario");
tituloAbajo.innerHTML = `<h3> reserva de turnos </h3>`;

let listaHorarios = document.getElementById("horarios-lista");

// Cargar los horarios disponibles desde una URL utilizando Fetch
fetch("./horarios.json")
  .then(response => response.json())
  .then(data => {
  data.forEach(function(item){
    let horariosDisponibles= item.horario;
    let diasDisponibles = item.dia
    let li = document.createElement("li");
    li.textContent=`${diasDisponibles} - ${horariosDisponibles}`
    listaHorarios.appendChild(li);
  
      li.addEventListener("click", function () {
        let cartel = document.createElement("div");
        cartel.textContent = "Completa los datos de reserva:";

        let inputNombre = document.createElement("input");
        inputNombre.placeholder = "Nombre y apellido";
        let inputTelefono = document.createElement("input");
        inputTelefono.placeholder = "Teléfono";

        let botonReservar = document.createElement("button");
        botonReservar.textContent = "Finalizar reserva";
        botonReservar.addEventListener("click", function () {
          let nombre = inputNombre.value;
          let telefono = inputTelefono.value;

          swal.fire({
            title: `reserva confirmada`,
            text: `te esperamos!!`,
            timer: `2200`,
            icon: `success`,
            showConfirmButton: false
          });

          // Guardar los datos en el localStorage
          localStorage.setItem("nombre y apellido", nombre);
          localStorage.setItem("telefono", telefono);

          // Agregar el nombre al elemento de la lista
          li.textContent = item.horario + " - " + nombre;
          li.classList.add("reservado");

          cartel.style.display = "none";
        });

        cartel.appendChild(inputNombre);
        cartel.appendChild(inputTelefono);
        cartel.appendChild(botonReservar);

        document.body.appendChild(cartel);
      });
    });
  })
  .catch(error => {
    console.error("Error al cargar los horarios:", error);
  });

// AGREGAMOS IMAGENES
document.addEventListener("DOMContentLoaded", function () {
  // Array de rutas de imágenes
  let imagePaths = [
    "media/degrade.jpg",
    "media/fotocortando.jpg",
    "media/foto3.avif",
    "media/foto1.jpeg",
    `media/foto2.avif`
  ];

  // Obtener los elementos <img> por su ID
  let imageElements = [
    document.getElementById("image1"),
    document.getElementById("image2"),
    document.getElementById("image3"),
    document.getElementById("image4"),
    document.getElementById("image5")
  ];

  // Asignar las rutas de imágenes a los elementos <img>
  for (let i = 0; i < imagePaths.length; i++) {
    let imagePath = imagePaths[i];
    imageElements[i].src = imagePath;
  }
});


































