function preguntarColorPrimario() {
    var respuesta = prompt("Ingresa un color primario:");

    var coloresPrimarios = ["rojo", "azul", "amarillo"];

    if (coloresPrimarios.includes(respuesta.toLowerCase())) {
        alert("¡Respuesta correcta! " + respuesta + " es un color primario.");
    } else {
        alert(respuesta + " no es un color primario.");
    }
}