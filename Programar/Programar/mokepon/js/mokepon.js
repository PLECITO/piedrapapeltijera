function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-macota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    alert("SELECCIONASTE TU MASCOTA")
}

window.addEventListener("load", iniciarJuego)