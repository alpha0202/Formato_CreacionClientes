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
    }
    else {
        seccion_Legal.classList.add("d-none");
        seccion_RepLegal.classList.add("d-none");
        seccion_InfoSocial.classList.add("d-none");
        seccion_Legal.classList.remove("required");
        seccion_RepLegal.classList.remove("required");
        RestablecerOpciones();

    }
    if (tipo_persona.value === "Natural") {
        seccion_Natural.classList.remove("d-none");
        EstablecerOpcionesNatural();

    }
    else {
        seccion_Natural.classList.add("d-none");


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

//cantidades_sucursales.addEventListener("change", () => {



//    var numeroVeces = $('#cantidadSucursales').val();
//    //if ($('#destinoClone').length) {
//    //    $('#destinoClone').remove();

//    //}
//    //else {
//    //    $('#secc_cantidadesSucursales').after('<div id="destinoClone"></div>')
//    //}

//    ClonarElementos(seccion_cantidadSucursales, numeroVeces);


//});





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




$(document).ready(function () {

    let selected_CboDpto_Id;
    let selectedDpto;
    let selected_CboCiudad_Id;
    let selectedCiudad;

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

       
        LLamarCiudad();
    });

    $("#cboDptoSucursal").change(function () {

        
        //LLamarCiudadSucursales();
    });

   

    //verificar los input de secciones clonadas
    //$('#secc_cantidadesSucursales input').on('change',function () {
    //    var selectedInputId = $(this).attr('id');
    //    var valorInput = $('#'+selectedInputId).val();
    //    console.log('Selected ID:',selectedInputId);
    //    console.log(valorInput);
    //})


  
    //detectar cambio departamento sección clonados
    //$('.comboDepartamentoSucursales').on('change', function () {
    //    selected_CboDpto_Id = $(this).attr('id');
    //    selectedDpto = $("#" + selected_CboDpto_Id).val();
    //    console.log('Selected ID:', selected_CboDpto_Id);
    //    console.log(selectedDpto);

    //});

    //detectar combo seleccionado sección clonados
    //$(".comboCiudadSucursales").click( function () {
    //    selected_CboCiudad_Id = $(this).attr('id');
    //    selectedCiudad = $("#" + selected_CboCiudad_Id).val();
    //    console.log('Selected ID:', selected_CboCiudad_Id);
    //    console.log(selectedCiudad);
    //    //$(selected_CboCiudad_Id).val('');
    //    LLamarCiudadSucursalesClone(selectedDpto,selected_CboCiudad_Id);

    //});


   

    //////////////////////////////////////////////////////////////////////////////
    var iCnt = 0;


    var container = document.createElement('div');
    container.classList.add('container-fluid', 'mx-0', 'px-0');
    $(container).attr("id","SeccionCantidad_Sucursales");

    var containerSucursal = document.createElement('div');
    $(containerSucursal).attr("id", "tb");
   



    $("#btAdd").click(function () {
        if (iCnt <= 4) {
            iCnt = iCnt + 1;


            const filaUno = `<div class="tb${iCnt}" id="tb${iCnt}">
                             <div class="card-body mx-2 px-0">
                              <div class="row bg-light cambioDirSucursal">
                                <div class="col-sm-6 bg-light " id="seccionCambioDir${iCnt}">
                                  <div class="form-floating ">
                                    <select class="form-select cambioDirSucursalCbo" id="cambioDireccion${iCnt}">
                                      <option selected></option>
                                      <option value="si">Si</option>
                                      <option value="no">No</>
                                    </select>
                                    <label for="floatingSelect"><strong>¿Requiere cambio de dirección de despacho?</strong></label>
                                  </div>
                                </div>
                                <div class="col-sm-6  bg-light direccionAnterior" id="seccionDirAnterior${iCnt}">
                                  <div class="form-floating">
                                    <input asp-for=Direccion_Anterior_Despacho type="text" class="form-control dirAnteriorSuc" id="dirAnteSucursal${iCnt}" disabled>
                                    <label for="floatingInputGrid"><strong>Dirección despacho Anterior</strong></label>
                                  </div>
                                </div>
                              </div>
                            </div>`


            const filaDos = `<div class="tb${iCnt}" id="tb${iCnt}">
                            <div class="row bg-light">
                               <div class="card-body mx-2 px-0">
                                <div class="input-group mb-2 datosSucursales">                          
                                 <span class="input-group-text" style="font-size:13px"><strong>Dirección despacho</strong></span>
                                 <input asp-for=Direccion_Nueva_Despacho type="text" class="form-control direccNuevaSuc" id="dirNuevaSucursal${iCnt}">
                                
                                 <span class="input-group-text" style="font-size:13px"><strong>Barrio</strong></span>
                                 <input asp-for="Barrio_Despacho" type="text" class="form-control barrioDespSucursal" id="barrioSucursal${iCnt}">
                                </div>
                             </div>
                            </div>`


            const filaTres = `<div class="tb${iCnt}" id="tb${iCnt}">
                            <div class="row bg-light">
                            <div class="card-body mx-2 px-0">
                             <div class="input-group mb-2 datosSucursales">
                                <label class="input-group-text" for="" style="font-size:13px"><strong>Departamento</strong></label>
                                <input asp-for=Departamento_Despacho type="text" class="form-control comboDepartamentoSucursales" id="cboDptoSucursal${iCnt}">

                             
                             <label class="input-group-text" for="" style="font-size:13px"><strong>Ciudad</strong></label>
                             <input asp-for=Ciudad_Despacho type="text" class="form-control comboDepartamentoSucursales" id="cboCiudadSucursal${iCnt}">
                               
                            </div>
                     </div>
                     </div>`


            const filaCuatro = `<div class="tb${iCnt}" id="tb${iCnt}">
                                <div class="row bg-light border-bottom">
                                    <div class="card-body mx-2 px-0">
                                    <div class="input-group mb-2 datosSucursales">
                                        
                                        <span class="input-group-text" style="font-size:13px"><strong>Celular</strong></span>
                                        <input asp-for=Celular_Despacho type="number" min="0" maxlength="10" class="form-control celSucursal" id="celularSucursal${iCnt}">
                                        
                                        <span class="input-group-text" style="font-size:13px"><strong>Teléfono</strong></span>
                                        <input asp-for="Telefono_Despacho" type="number" min="0" maxlength="12" class="form-control telSucursal" id="telefonoSucursal${iCnt}">
                                       
                                        <span class="input-group-text" style="font-size:13px"><strong>Email factura electrónica</strong></span>
                                        <input asp-for=Email_FactElectronica_Despacho type="email" class="form-control emailSucursal" id="emailFactSucursal${iCnt}">
                                      </div>
                                     </div>
                                    </div>
                               </div>
                               </div>`


            


            // Añadir caja de texto.
            $(container).append(filaUno).append(filaDos).append(filaTres).append(filaCuatro);
            //'<select type=text class="form-select" id=tb' + iCnt + " " + 'value="Elemento de Texto ' + iCnt +'" ></select>'

            if (iCnt == 1) {
                var divSubmit = $(document.createElement("div"));
                $(divSubmit).append(
                    '<input type=button class="bt btn btn-outline-success" onclick="GetTextValue()"' + "id=btSubmit value=Enviar />"
                );
            }

            $("#main").after(container, divSubmit);
            $("#cantidadSucursalesID").val(iCnt);
        } else {
            //se establece un limite para añadir elementos, 20 es el limite

            $(container).append("<label>Limite Alcanzado</label>");
            $("#btAdd").attr("class", "disabled");
            $("#btAdd").attr("disabled", "disabled");
        }
    });

    $("#btRemove").click(function () {
        // Elimina un elemento por click
        if (iCnt != 0) {
            $(".tb" + iCnt).remove();
            iCnt = iCnt - 1;
            $("#cantidadSucursalesID").val(iCnt);

        }

        if (iCnt == 0) {
            //$(container).empty();

            //$(container).remove();
            $("#btSubmit").remove();
            $("#btAdd").removeAttr("disabled");
            $("#btAdd").attr("class", "enabled");
            $("#btAdd").attr("class", "btn btn-outline-primary");
        }
    });

    $("#btRemoveAll").click(function () {
        // Elimina todos los elementos del contenedor

        $(container).empty();
        $(container).remove();
        $("#btSubmit").remove();
        $("#destinoClone").empty();
        iCnt = 0;
        $("#btAdd").removeAttr("disabled");
        $("#btAdd").attr("class", "bt");
        $("#btAdd").attr("class", "btn");
        $("#btAdd").attr("class", "btn btn-outline-primary");
        $("#cantidadSucursalesID").val("");
       
       
    });

    BuscarInputs();


   
  
});


//detectar cambio dirección sucursal-sección clonada
$('.cambioDirSucursalCbo').on('change',function () {
    var selected_CboId = $(this).attr('id');
    var valCboCambio = $("#" + selected_CboId).val();
    const seccionDireAnterior = $('div.direccionAnterior').attr('id');
    console.log('Selected ID:', selected_CboId);
    console.log(valCboCambio);

    if (valCboCambio.value === "si") {
        $("#" + seccionDireAnterior).removeClass("d-none");
    }
    else {
        $("#" + seccionDireAnterior).addClass("d-none");
    }

});



/// Obtiene los valores de los textbox al dar click en el boton "Enviar"
var divValue,
    values = "";

function GetTextValue() {
    BuscarInputs();
    const inputs = $('datosSucursales input');
    $(divValue).empty();
    $(divValue).remove();
    values = "";
    $(inputs).each(function () {
        divValue = $(document.createElement("div")).css({
            padding: "5px",
            width: "200px",
        });
        values += this.value + "<br />";
    });

    $('datosSucursales input').each(function () {
        console.log($(this).val());
    });

    $('datosSucursales select').each(function () {
        console.log($(this).val());
    });



    $(divValue).append("<p><b>Tus valores añadidos</b></p>" + values);
    $("#destinoClone").append(divValue);
}


function BuscarInputs() {
    var columnas = [];

    $('.datosSucursales').find('input').each(function () {
        //console.log($(this).val());
        var inputValue = $(this).val();
        columnas.push(inputValue);
        console.log(columnas);
    })
};


/////////////////////////////////

function RecorrerInputs() {
    const inputs = $('input.' + `tb${iCnt}`);
    console.log(inputs);
}


function ClonarElementos(elemento, veces) {

    //nroAjustado = veces - 1;
    nroAjustado = veces;
    //seccion_cantidadSucursales.classList.remove("d-none");

    var idCambioDireccion = $('.cambioDirSucursal').attr('id');
    const selectCambioDir = $('select.cambioDirSucursal');

    var idDireccAnterior = $('.dirAnteriorSuc').attr('id');
    const inputDirAnterior = $('input.dirAnteriorSuc');
    const seccionDireAnterior = $('direccionAnterior').attr('id');

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


        $(elemento).clone(true,true).appendTo("#destinoClone");
        //$(elemento).attr("id", newId);
        $("#destinoClone").find("#secc_cantidadesSucursales").attr("id", newId);
        //$(elemento).removeClass("d-none");
        $(elemento).find(selectCambioDir).attr("id", newIdCD);
        $(elemento).find(inputDirAnterior).attr("id", newIdDA);
        $(elemento).find(seccionDireAnterior).attr("id", newIdDA);
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
    $(elemento).remove();


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

function LLamarCiudadSucursalesClone(dptoSelected, cboCiudadId) {

    //var dpto = $("#cboDptoSucursal option:selected").val();
    $("#" + cboCiudadId + " option").remove();
    $("#" + cboCiudadId).append('<option value=""></option>');
    var dpto = dptoSelected;

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

                $("#" + cboCiudadId).append('<option value="' + itemData.value + '">' + itemData.descripcion + '</option>');

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

function cargarDepartamentos(idCbo) {
    //var pais = $("#cboPais option:selected").val();

    //if ($("#" + idCbo).has('option').length) {
    //    // El select no tiene opciones
    //    console.log(`tiene datos las opciones del combo: ${idCbo}`)
    //    $("#" + idCbo + " option").remove();
    //    $("#" + idCbo + " option").append('<option value=""></option>');
    //} else {
    //    console.log(`sin datos el combo: ${idCbo}`)
    //}

    $("#" + idCbo + " option").remove();
    $("#" + idCbo + " option").append('<option value=""></option>');


    $.ajax({
        url: '/Clientes/GetDepartamento',
        data: {},
        type: 'POST',
        processData: false,

        success: function (data) {

            jQuery.each(data, function (index, itemData) {

                $("#" + idCbo).append('<option value="' + itemData.value + '">' + itemData.descripcion + '</option>');

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









//function addRow(event) {
//    var rowId = $(event.target).attr("id");
//    //var $row = $("id", rowId);
//    var row = document.querySelector("#secc_cantidadesSucursales1");
//    var $newRow = $(row).clone(true, true);


//    var newId = "row_" + Math.random().toString(36).substring(2, 15);

//    $newRow.attr("id", newId);
//    $newRow.find(".addButton").attr("id", newId);
//    $newRow.find("input").val("");

//    row.after($newRow);
//}


