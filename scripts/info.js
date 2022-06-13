let archivado = localStorage.getItem("destino");
let archivoParseado = JSON.parse(archivado);

let placeImage = document.getElementById("image");
placeImage.src = archivoParseado.ubicacion;

let titulo = document.getElementById("lugar");
titulo.textContent = archivoParseado.nombre;

let infoDescripcion = document.getElementById("descripcion");
infoDescripcion.textContent = archivoParseado.descripcion;

let continent = document.getElementById("continente");
let placeLugar = document.getElementById("campoLugar");
placeLugar.setAttribute("disabled", "");
placeLugar.setAttribute("placeholder", archivoParseado.nombre);

let placePais = document.getElementById("pais");
placePais.setAttribute("disabled", "");
placePais.setAttribute("placeholder", archivoParseado.pais);

let fechaIn = document.getElementById("fechaPartida");
let fechaOut = document.getElementById("fechaRetorno");
let campoMensaje = document.getElementById("mensaje");
let formulario = document.getElementById("formulario");

let back = document.getElementById("back");

back.addEventListener("click", () => {
    localStorage.removeItem("destino");
    location.href = "../index.html";
})

let enviar = document.getElementById("enviar");

enviar.addEventListener("click", (e) => {
    e.preventDefault();
    if( fechaIn.value == "" || fechaOut.value == "" || campoMensaje == "" ){
        Swal.fire({
            icon: 'error',
            title: 'Faltan campos por llenar, porfavor complete los campos'
        })
    }else{
        sessionStorage.setItem("fecha ida", fechaIn.value);
        sessionStorage.setItem("fecha regreso", fechaOut.value);
        sessionStorage.setItem("informacion", campoMensaje.value);
        if( fechaIn.value > fechaOut.value ){
            Swal.fire({
                icon: 'error',
                title: 'La fecha de ida no puede ser mayor a la de regreso'
            })
        }else{
            formulario.reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    
})

switch (archivoParseado.continente) {
    case "africa":
        continent.src = "/src/img/AFRICA.PNG";
    break;
    case "asia":
        continent.src = "/src/img/ASIA.PNG";
    break;
    case "europa":
        continent.src = "/src/img/EUROPA.PNG";
    break;
    case "oceania":
        continent.src = "/src/img/OCEANIA.PNG";
    break;
    case "america":
        continent.src = "/src/img/AMERICA.PNG";
    break;
    default:
    break;
}
