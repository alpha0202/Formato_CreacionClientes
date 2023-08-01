// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})



//declarar secciones 
const tipo_persona = document.querySelector("#tipoPersona");
const tipo_operacion = document.querySelector("#tipoOperacion");
const seccionTipo_actualizacion = document.querySelector("#seccionTipoActualizacion");
const tipo_actualizacion = document.querySelector("#TipoActualizacion");
const seccionCambio_direccion = document.querySelector("#seccionCambioDir");
const seccion_Legal = document.querySelector("#seccionLegal");
const seccion_RepLegal = document.querySelector("#seccionRepLegal");
const seccion_Natural = document.querySelector("#seccionPerNatural");
const seccion_InfoSocial = document.querySelector("#seccionInfoSocial");
const tipo_identificacion = document.querySelector("#tipoIdentificacion");


tipo_persona.addEventListener("change", () => {
    if (tipo_persona.value === "Juridica") {

        seccion_Legal.classList.remove("d-none");
        seccion_RepLegal.classList.remove("d-none");
        seccion_InfoSocial.classList.remove("d-none");
        seccion_Legal.classList.add("required");
        seccion_RepLegal.classList.add("required");
        EstablecerOpcionJuridica();
       
        //document.querySelector('#estados_file').required = true;
        //document.querySelector('#existencias_file').required = true;
        //document.querySelector('#repLegalName').required = true;
        //document.querySelector('#cargoRepLegal').required = true;
        //document.querySelector('#email_reprLegal').required = true;

    }
    else {
        seccion_Legal.classList.add("d-none");
        seccion_RepLegal.classList.add("d-none");
        seccion_InfoSocial.classList.add("d-none");
        seccion_Legal.classList.remove("required");
        seccion_RepLegal.classList.remove("required");
        RestablecerOpciones();
        //document.getElementById('sociedadAccionistasSi').checked = false;
        //document.querySelector('#estados_file').required = false;
        //document.querySelector('#existencias_file').required = false;
        //document.querySelector('#repLegalName').required = false;
        //document.querySelector('#cargoRepLegal').required = false;
        //document.querySelector('#email_reprLegal').required = false;
    }
    if (tipo_persona.value === "Natural") {
        seccion_Natural.classList.remove("d-none");
        EstablecerOpcionesNatural();
        //document.querySelector('#certIngr_file').required = true;
        //document.querySelector('#tarjPro_file').required = true;
        //document.querySelector('#antec_file').required = true;
        //document.querySelector('#estadoFinanciero').classList.add("invisible");
        //document.querySelector('#certificadoExistencia').classList.add("invisible");
    }
    else {
        seccion_Natural.classList.add("d-none");
       
        //document.querySelector('#certIngr_file').required = false;
        //document.querySelector('#tarjPro_file').required = false;
        //document.querySelector('#antec_file').required = false;
        //document.querySelector('#estadoFinanciero').classList.remove("invisible");
        //document.querySelector('#certificadoExistencia').classList.remove("invisible");
    }

});


tipo_operacion.addEventListener("change", () => {

    if (tipo_operacion.value === "actualizacion") {
        seccionTipo_actualizacion.classList.remove("d-none");
        seccionCambio_direccion.classList.remove("d-none");
        tipo_actualizacion.required = true;
    }
    else {

        seccionTipo_actualizacion.classList.add("d-none");
        seccionCambio_direccion.classList.add("d-none");
        tipo_actualizacion.required = false;
    }
});



const EstablecerOpcionJuridica = () => {
    tipo_identificacion.value = "Nit";

    var opciones = tipo_identificacion.options;
    for (var i = 0; i < opciones.length; i++) {
       if(i !== 1)
        {
            opciones[i].style.display = "none";
        }
    }
};

const EstablecerOpcionesNatural = () => {
    var opciones = tipo_identificacion.options;
    opciones[1].style.display = "none";

}




const RestablecerOpciones = () => {
    var defaultOption = tipo_identificacion.options[0];
    tipo_identificacion.value = defaultOption.value;

    var opciones = tipo_identificacion.options;
    for (var i = 0; i < opciones.length; i++) {


        opciones[i].style.display = "block";

    }
}







$(document).ready(function() {

    $('input[type=radio][name=inlineRadioOptions]').change(function()  {
        if (this.value == "si")
            $("#seccionCargoPublico").removeClass("invisible");
        else
            $("#seccionCargoPublico").addClass("invisible");


    });

    $('input[type=radio][name=inlineRadioOptions2]').change(function () {
        if (this.value == "si")
            $("#seccionCargoPublico").removeClass("invisible");
        else
            $("#seccionCargoPublico").addClass("invisible");


    });

    $('input[type=radio][name=inlineRadioAccionistas]').change(function () {
        if (this.value == "si")
            $("#cargaAccionistas").removeClass("d-none");
        else
            $("#cargaAccionistas").addClass("d-none");
        if (this.value == "no")
            $("#tablaAccionistas").removeClass("d-none");
        else
            $("#tablaAccionistas").addClass("d-none");

    });






});



//limpiar options select tipoIdentificación
const limpiarOptions = () => {
    for (let i = tipo_identificacion.options.length; i >= 0; i--) {
        tipo_identificacion.remove(i);
    }
};



//agregar elemento select tipoIdentificación
const agregarOptionNew = () => {
    const option = document.createElement('option');
    /*const valor = new Date().getTime();*/
    //const valor = "Nit"
    //option.value = valor;
    option.disabled = true;
    //option.text = valor;
    tipo_identificacion.appendChild(option);
};

////copia representante legal, al campo representate legal de la sección firma.
//document.getElementById("repLegalName").addEventListener('keyup', autoCompleteNew);

//function autoCompleteNew(e) {

//    var value = $(this).val();
//    $("#representaLegal_firma").val(value);

//}



