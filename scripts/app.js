console.log("Funciona");
window.addEventListener("load", function () {
    //Captura de elementos HTML
    const btnUnirse = this.document.querySelector("#botonUnirse");
    btnUnirse.addEventListener("click", function () {
        console.log("Se presiono le boton unirse");
        swal({
            title: "¡GRACIAS POR SUMARTE!",
            text: "Para completar tu inscripción completá el formulario."
        });
    })
})