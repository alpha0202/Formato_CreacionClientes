// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


//habilitar las secciones del representante legal
const tipo_persona = document.querySelector("#tipoPersona");
const seccion_Legal = document.querySelector("#seccionLegal");

tipo_persona.addEventListener("change", () => {
    if (tipo_persona.value === "Jurídica") {
        seccion_Legal.classList.remove("invisible");
        seccion_firma_legal.classList.remove("invisible");
    } else {
        seccion_Legal.classList.add("invisible");
        seccion_firma_legal.classList.add("invisible");
    }
});



//copia representante legal, al campo representate legal de la sección firma.
document.getElementById("repLegalName").addEventListener('keyup', autoCompleteNew);

function autoCompleteNew(e) {
    
    var value = $(this).val();
    $("#representaLegal_firma").val(value);

}

//$("#consecutivo").val('2');

//$(function() {
//    $('#datepicker').datepicker();
//});


//var fecha = new Date();
//document.getElementById("fecha_reg").value = fecha.toJSON().slice(0, 10);


//function inicio() {
//    document.suministros.consec.consecutivo.value = 1
//};
//window.onload = inicio;



//let contador = 1;
//function generarNumero() {
//    contador++;
//    document.getElementById('consecutivo') == contador;
//    console.log(contador);
//}
//window.onload = generarNumero;