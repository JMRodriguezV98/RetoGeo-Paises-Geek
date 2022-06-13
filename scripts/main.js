import { data } from "../modules/data.js";

document.addEventListener( "click",( {target} ) => {
    switch (target.id){
        case "africa":
            recorrido(target.id);
        break;
        case "asia":
            recorrido(target.id);
        break;
        case "europa":
            recorrido(target.id);
        break;
        case "oceania":
            recorrido(target.id);
        break;
        case "america":
            recorrido(target.id);
        break;
        default:
        break;
    }
});

function recorrido(busqueda){
    let opciones = document.getElementById("muestras");
    const filtrado = data.filter(element => element.continente === busqueda);
    opciones.innerHTML = `<div id="contentOpcions"></div>`
    filtrado.forEach( ( element ) => {
        const { id, nombre, pais } = element;
        let newFichas = document.getElementById("contentOpcions");
        newFichas.innerHTML += `<div id="moreOpcions">
                                    <img src=${element.ubicacion} alt=${element.nombre} width="100%" height="70%">
                                    <div id="places" >${nombre} - ${pais}</div>
                                    <div id="contentBtn">
                                        <button id=${id} class="more" >Ver más</button>
                                    </div>
                                </div>` 
    })

    document.addEventListener("click", ( {target} ) => {
        let infor = data.find(element => element.id == target.id);
        if( infor != undefined ){
            localStorage.setItem("destino",JSON.stringify(infor));
            location.href = "/pages/info.html";
        }
    })
}