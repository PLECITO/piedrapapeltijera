function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-macota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    
    if (inputHipodoge.cheked) {
        alert("Seleccinaste a Hipodoge")
    } else if (inputCapipepo.cheked) {
        alert("Seleccionaste a Capipepo")
    } else if (inputRatigueya.cheked) {
        alert("Seleccionaste a Ratigueya")
    } else {
        alert("Selecciona una mascota")
    }
}

window.addEventListener("load", iniciarJuego)