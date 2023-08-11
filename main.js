function verificarEdad() {
    var edad = parseInt(prompt("Cuantos años tienes:"));

    if (isNaN(edad)) {
        alert("Por favor, ingresa un valor numérico válido.");
    } else {
        if (edad >= 18) {
            window.location.href = "inicio.html";
        } else {
            alert("Lo siento, nos sos mayor de edad para entrar.");
        }
    }
}

