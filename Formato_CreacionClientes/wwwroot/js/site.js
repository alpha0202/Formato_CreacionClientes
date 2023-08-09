﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
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
const selectCambio_dir = document.querySelector("#cambioDireccion");
const cantidades_sucursales = document.querySelector("#cantidadSucursales");
const seccionDireccion_Ant = document.querySelector("#seccionDirAnterior");
const secciones_Sucursales_Despacho = document.querySelector("#secciones_SucursalesDespacho");
const seccion_cantidadSucursales = document.querySelector("#secc_cantidadesSucursales");
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
        seccionDireccion_Ant.classList.add("d-none");
        selectCambio_dir.value = "";
        tipo_actualizacion.required = false;
    }
});


selectCambio_dir.addEventListener("change", () => {
    if (selectCambio_dir.value === "si") {
        seccionDireccion_Ant.classList.remove("d-none");
    }
    else {
        seccionDireccion_Ant.classList.add("d-none");
    }
});

cantidades_sucursales.addEventListener("change", () => {

   
    var numeroVeces = $('#cantidadSucursales').val();
    ClonarElementos(seccion_cantidadSucursales, numeroVeces);


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


    SumarPorcentajes();


    $("#cboDepartamento").change(function () {

        //cargarCiudades();
        LLamarCiudad();
    });

    $("#cboDptoSucursal").change(function () {

        
        LLamarCiudadSucursales();
    });

    //document.querySelectorAll('input').forEach(input => {
    //    input.addEventListener('change', event => {
    //        console.log(event.target);
    //    });
    //});

    //$(".addButton").on("click", addRow);
    

});


function addRow(event) {
    var rowId = $(event.target).attr("id");
    //var $row = $("id", rowId);
    var row =  document.querySelector("#secc_cantidadesSucursales1");
    var $newRow = $(row).clone(true, true);


    var newId = "row_" + Math.random().toString(36).substring(2, 15);

    $newRow.attr("id", newId);
    $newRow.find(".addButton").attr("id", newId);
    $newRow.find("input").val("");

    row.after($newRow);
}



function ClonarElementos(elemento, veces) {

    //nroAjustado = veces - 1;
    nroAjustado = veces;
    //seccion_cantidadSucursales.classList.remove("d-none");

    var idCambioDireccion = $('.cambioDirSucursal').attr('id');
    const selectCambioDir = $('select.cambioDirSucursal');

    var idDireccAnterior = $('.dirAnteriorSuc').attr('id');
    const inputDirAnterior = $('input.dirAnteriorSuc');

    var idDireccNueva = $('.direccNuevaSuc').attr('id');
    const inputDirNueva = $('input.direccNuevaSuc');

    var idBarrioSucursal = $('.barrioDespSucursal').attr('id');
    const inputBarrioSucursal = $('input.barrioDespSucursal');

    var idCboDpto = $('.comboDepartamentoSucursales').attr('id');
    const selectDpto = $('select.comboDepartamentoSucursales');

    var idCboCiudad = $('.comboCiudadSucursales').attr('id');
    const selectCiudad = $('select.comboCiudadSucursales');

    var idCelularSucursal = $('.celSucursal').attr('id');
    const inputCelular = $('input.celSucursal');

    var idTelefonoSucursal = $('.telSucursal').attr('id');
    const inputTelefono = $('input.telSucursal');

    var idEmailSucursalFac = $('.emailSucursal').attr('id');
    const inputEmailSucursal = $('input.emailSucursal');


    for (let i = 0; i < nroAjustado; i++) {
        var newId = "secc_cantidadesSucursales_" + i;
        var newIdCD = idCambioDireccion + i;
        var newIdDA = idDireccAnterior + i;
        var newIdDN = idDireccNueva + i;
        var newIdBarrio = idBarrioSucursal + i;
        var newIdCboDpto = idCboDpto + i;
        var newIdCboCiudad = idCboCiudad + i;
        var newIdCelular = idCelularSucursal + i;
        var newIdTelefono = idTelefonoSucursal + i;
        var newIdEmail = idEmailSucursalFac + i;


        $(elemento).clone(true, true).appendTo("#destinoClone");
        //$(elemento).attr("id", newId);
        $("#destinoClone").find("#secc_cantidadesSucursales").attr("id", newId);
        //$(elemento).removeClass("d-none");
        $(elemento).find(selectCambioDir).attr("id", newIdCD);
        $(elemento).find(inputDirAnterior).attr("id", newIdDA);
        $(elemento).find(inputDirNueva).attr("id", newIdDN);
        $(elemento).find(inputBarrioSucursal).attr("id", newIdBarrio);
        $(elemento).find(selectDpto).attr("id", newIdCboDpto);
        $(elemento).find(selectCiudad).attr("id", newIdCboCiudad);
        $(elemento).find(inputCelular).attr("id", newIdCelular);
        $(elemento).find(inputTelefono).attr("id", newIdTelefono);
        $(elemento).find(inputEmailSucursal).attr("id", newIdEmail);
        //if (veces == 1) {

        //    //seccion_cantidadSucursales.classList.remove("d-none");
        //}
        //else {
        //}
    }



}



function SumarPorcentajes() {
    // Obtener los elementos input
    const inputs = $('input.porcentaje');

    // Agregar un event listener a cada input
    inputs.on('input', () => {
        // Sumar los valores de los inputs
        const total = Array.from(inputs).reduce((acc, input) => acc + Number(input.value), 0);

        // Verificar si la suma es igual a 100
        if (total === 100) {
            alert('La suma es igual a 100');
        }
    });
}

function cargarCiudades() {

    //var html = '<label>Ciudad*</label> <select class="form-control" id="cboCiudad" onchange="cargarBarrio();"></select>';
    //$("#DivCiudadC").html("");
    //$("#DivCiudadC").append(html);


    $("#cboCiudad option").remove();
    $("#cboCiudad").append('<option value=""></option>');

    var departamento = $("#cboDepartamento option:selected").val();

    if (departamento != "") {
        $.ajax({
            url: '/Clientes/GetCiudades',
            data: { "departamento": departamento },
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {

                jQuery.each(data, function (index, itemData) {

                    $("#cboCiudad").append('<option value="' + itemData.value + '">' + itemData.descripcion + '</option>');

                });



                //$('#cboCiudad').combobox({
                //    clearIfNoMatch: true
                //});

                /* $('#cboCiudad').combobox({
                     clearIfNoMatch: true
                 });*/

            },

            error: function (request, message, error) {

                alert('error' + message.status);
            }
        });
    }

}

function cargarDeparamentos() {
    //var pais = $("#cboPais option:selected").val();
    $("#cboDepartamento option").remove();
    $("#cboDepartamento").append('<option value=""></option>');

    $.ajax({
        url: '@Url.Action("GetDepartamento", "Clientes")',
        data: {},
        crossDomain: true,
        type: 'POST',
        processData: false,
        contentType: false,
        success: function (data) {

            jQuery.each(data, function (index, itemData) {

                $("#cboDepartamento").append('<option value="' + itemData.value + '">' + itemData.descripcion + '</option>');

            });

            $('#cboDepartamento').combobox({
                clearIfNoMatch: true
            });

            /* $('#cboCiudad').combobox({
                 clearIfNoMatch: true
             });*/

        },

        error: function (request, message, error) {

            alert(message);
        }
    });


}

function cargarPaises() {

    $("#cboPais option").remove();
    $("#cboPais").append('<option value=""></option>');

    $.ajax({
        url: '@Url.Action("GetPaises", "Home")',
        data: {},
        crossDomain: true,
        type: 'POST',
        processData: false,
        contentType: false,
        success: function (data) {

            jQuery.each(data, function (index, itemData) {

                $("#cboPais").append('<option value="' + itemData.value + '">' + itemData.descripcion + '</option>');

            });

            $('#cboPais').combobox({
                clearIfNoMatch: true
            });

            /* $('#cboCiudad').combobox({
                 clearIfNoMatch: true
             });*/

        },

        error: function (request, message, error) {

            alert(message);
        }
    });


}

function LLamarCiudad() {

    $("#cboCiudad option").remove();
    $("#cboCiudad").append('<option value=""></option>');
    var dpto = $("#cboDepartamento option:selected").val();
    //var dpto = "SANTANDER";

    $.ajax({
        //url: '@Url.Action("GetCiudades", "Clientes")',
        //data: JSON.stringify({ "departamento": departamento }),
        //crossDomain: true,
        //contentType: 'application/json; charset=utf-8',
        //dataType: 'json',
        url: '/Clientes/GetCiudades',
        data: { Dpto: dpto },
        type: 'POST',
        success: function (data) {
            jQuery.each(data, function (index, itemData) {

                $("#cboCiudad").append('<option value="' + itemData.value + '">' + itemData.descripcion + '</option>');

            });

          


        },
        error: function (request, message, error) {

            alert(message);
        }
    });

}

function LLamarCiudadSucursales() {

    $("#cboCiudadSucursal option").remove();
    $("#cboCiudadSucursal").append('<option value=""></option>');
    var dpto = $("#cboDptoSucursal option:selected").val();
    //var dpto = "SANTANDER";

    $.ajax({
        //url: '@Url.Action("GetCiudades", "Clientes")',
        //data: JSON.stringify({ "departamento": departamento }),
        //crossDomain: true,
        //contentType: 'application/json; charset=utf-8',
        //dataType: 'json',
        url: '/Clientes/GetCiudades',
        data: { Dpto: dpto },
        type: 'POST',
        success: function (data) {
            jQuery.each(data, function (index, itemData) {

                $("#cboCiudadSucursal").append('<option value="' + itemData.value + '">' + itemData.descripcion + '</option>');

            });




        },
        error: function (request, message, error) {

            alert(message);
        }
    });

}


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



