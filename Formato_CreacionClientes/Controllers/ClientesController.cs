﻿using Formato_CreacionClientes.Data;
using Formato_CreacionClientes.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static Microsoft.AspNetCore.Razor.Language.TagHelperMetadata;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Data;
using Formato_CreacionClientes.CapaData;
using Dapper;
using Formulario_SuministroCredito.Service;
using Rotativa.AspNetCore;

namespace Formato_CreacionClientes.Controllers
{
    public class ClientesController : Controller
    {
        private readonly ICreacionClientesRepository _creacionClientes;
        private readonly HttpClient _httpClient;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly IConfiguration _configuration;
        private readonly IDbConnection _dbconnection;
        private readonly IServiceFileUpload _serviceFileUpload;

        public ClientesController(ICreacionClientesRepository creacionClientes, 
                                  HttpClient httpClient, IWebHostEnvironment webHostEnvironment, 
                                  IConfiguration configuration, IDbConnection dbconnection, IServiceFileUpload serviceFileUpload)
        {
            _creacionClientes = creacionClientes;
            _httpClient = httpClient;
            _webHostEnvironment = webHostEnvironment;
            _configuration = configuration;
            _dbconnection = dbconnection;
            _serviceFileUpload = serviceFileUpload;
        }





        // GET: ClientesController/Create
        public ActionResult Index()
        {

            ViewData["combo"] = new Microsoft.AspNetCore.Mvc.Rendering.SelectList(GetDpto(), "Value", "Descripcion");

            return View();
        }



        //POST: clientescontroller/CrearCliente
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Index(IFormCollection formCollection)
        {
            if(ModelState.IsValid)
            {
                try
                {

                    var creacionCliente = new ClientesModel()
                    {
                        Fecha_Diligenciamiento = DateTime.Now,
                        Tipo_Operacion = formCollection["Tipo_Operacion"],
                        Tipo_Solicitud = formCollection["Tipo_Solicitud"],
                        Nombre_Persona_Contacto_Compannia = formCollection["Nombre_Persona_Contacto_Compannia"],
                        Tipo_Actualizacion = formCollection["Tipo_Actualizacion"],
                        Tipo_Persona = formCollection["Tipo_Persona"],
                        Tipo_Identificacion = formCollection["Tipo_Identificacion"],
                        Numero_Identificacion = formCollection["Numero_Identificacion"],
                        Nombre_Completo_RazonSocial = formCollection["Nombre_Completo_RazonSocial"],
                        Representante_Legal = formCollection["Representante_Legal"],
                        Nombres_Persona_Natural = formCollection["Nombres_Persona_Natural"],
                        Apellidos_Persona_Natural = formCollection["Apellidos_Persona_Natural"],
                        Razon_Social = formCollection["Razon_Social"],
                        Direccion_Tercero = formCollection["Direccion_Tercero"],
                        Barrio_Tercero = formCollection["Barrio_Tercero"],
                        Departamento_Tercero = formCollection["Departamento_Tercero"],
                        Ciudad_Tercero = formCollection["Ciudad_Tercero"],
                        Numero_Celular_Tercero = formCollection["Numero_Celular_Tercero"],
                        Telefono_Fijo_Tercero = formCollection["Telefono_Fijo_Tercero"],
                        Email_Tercero = formCollection["Email_Tercero"],
                        Desempenna_Funciones_Publicas = formCollection["Desempenna_Funciones_Publicas"],
                        Administra_Recursos_Publicos = formCollection["Administra_Recursos_Publicos"],
                        Cargo_Publico = formCollection["Cargo_Publico"],
                        Anno_Vinculacion = formCollection["Anno_Vinculacion"],
                        Anno_Desvinculacion = formCollection["Anno_Desvinculacion"],
                        Persona_Contacto = formCollection["Persona_Contacto"],
                        Cargo_Contacto = formCollection["Cargo_Contacto"],
                        Email_Contacto = formCollection["Email_Contacto"],
                        Celular_Contacto = formCollection["Celular_Contacto"],
                        Razon_Social_Nombre_SocioA = formCollection["Razon_Social_Nombre_SocioA"],
                        Tipo_Persona_SocioA = formCollection["Tipo_Persona_SocioA"],
                        Tipo_Id_SocioA = formCollection["Tipo_Id_SocioA"],
                        Num_Doc_SocioA = formCollection["Num_Doc_SocioA"],
                        Porcentaje_SocioA = formCollection["Porcentaje_SocioA"],
                        Desempenna_Func_Publica_SocioA = formCollection["Desempenna_Func_Publica_SocioA"],
                        Maneja_Recurso_Publico_SocioA = formCollection["Maneja_Recurso_Publico_SocioA"],
                        Carga_Accionistas = formCollection.Files["Carga_Accionistas"],
                        Nombre_Apellido_Firmante = formCollection["Nombre_Apellido_Firmante"],
                        Num_Id_Firmante = formCollection["Num_Id_Firmante"],
                        Observaciones_Firmante = formCollection["Observaciones_Firmante"],
                        Representa_Firmante = formCollection["Representa_Firmante"]

                    };


                    bool resulCreacion = await _creacionClientes.CrearCliente(creacionCliente);

                    if (resulCreacion)
                        TempData["ConfirmaCreacion"] = "Creación Correcta!";


                    return View();
                }
                catch (Exception)
                {

                    return View();
                }
            }
            return View();
        }



        [HttpPost]
        public ActionResult GuardarDatos([FromBody] SucursalesModel[] inputs)
        {
           

            if (inputs != null && inputs.Length > 0)
            {
                //using IDbConnection dbConnection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection"));
                //dbConnection.Open();

                foreach (var inputValue in inputs)
                {
                    
                    var sql = @"INSERT INTO n97eed5_MaestrosProcesos.Sucursales_Clientes
                                                                                        ( CANTIDAD_SUCURSAL_DESPACHO,
                                                                                          DIRECCION_ANTERIOR_DESPACHO,
                                                                                          DIRECCION_NUEVA_DESPACHO,
                                                                                          BARRIO_DESPACHO,
                                                                                          CIUDAD_DESPACHO,
                                                                                          DEPARTAMENTO_DESPACHO,
                                                                                          CELULAR_DESPACHO,
                                                                                          TELEFONO_DESPACHO,
                                                                                          EMAIL_FACTELECTRONICA_DESPACHO,
                                                                                          IDCREACION_CLIENTE
                                                                                          )
                                                                                         value(
                                                                                               null,
                                                                                               @Direccion_anterior_despacho ,
                                                                                               @Direccion_nueva_despacho ,
                                                                                               @Barrio_despacho ,
                                                                                               @Ciudad_despacho ,
                                                                                               @Departamento_despacho ,
                                                                                               @Ciudad_despacho,
                                                                                               @Celular_despacho ,
                                                                                               @Telefono_despacho ,
                                                                                               @Email_factelectronica_despacho ,
                                                                                               null)
                                                                                                    ";


                    _dbconnection.Execute(sql, inputValue);
                    
                }

                return Ok(new { message = "Datos guardados exitosamente" });
            }
            else
            {
                return BadRequest(new { error = "No se encontraron datos válidos en el JSON" });
            }
        }




        public List<Combo> GetDpto()
        {
            List<Combo> respuesta = new List<Combo>();
            DataTable dt = new DataTable();
            string sql = "SELECT UPPER(f012_descripcion) AS Ciudad" +
                         "  FROM UNOEEALIAR.dbo.t012_mm_deptos" +
                         " WHERE f012_id_pais = '169'" +
            " ORDER BY f012_descripcion";

            dt = Datos.ObtenerDataTable(sql);

            foreach (DataRow dr in dt.Rows)
            {
                Combo res = new Combo();
                res.Value = dr[0].ToString();
                res.Descripcion = dr[0].ToString();
                respuesta.Add(res);

            }
            return respuesta;
        }





        [HttpPost]
        public ActionResult GetCiudades(string Dpto)
        {

            List<Combo> respuesta = new List<Combo>();
            DataTable dt = new DataTable();
            string sql = "SELECT UPPER(f013_descripcion) AS Ciudad FROM UNOEEALIAR.dbo.t013_mm_ciudades INNER JOIN UNOEEALIAR.dbo.t012_mm_deptos on f013_id_depto = f012_id  WHERE f013_id_pais = '169' and UPPER(f012_descripcion) = '" + Dpto + "'" +
                          " ORDER BY f013_descripcion";

            dt = Datos.ObtenerDataTable(sql);
            //dt.Rows.RemoveAt(0);    

            foreach (DataRow dr in dt.Rows)
            {
                Combo res = new Combo();
                res.Value = dr[0].ToString();
                res.Descripcion = dr[0].ToString();
                respuesta.Add(res);

            }

            return Json(respuesta);
        }




        // GET: ClientesController1/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ClientesController1/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ClientesController1/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                var crearCliente = new ClientesModel(); 

                

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ClientesController1/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ClientesController1/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ClientesController1/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ClientesController1/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }


        public IActionResult pdf_firma_solicita(int id)
        {
            var contador = _creacionClientes.CountRowDb();
            var detalle = _creacionClientes.GetById(id);

            var creacionCliente  = new ClientesModel()
            {
               

            };


            string fileName = "DocumentoFirma.pdf";
            string path_docFirma = _serviceFileUpload.CrearDirectorio_Firmante();


            TempData["MensajeAccion"] = "Documento PDF creado correctamente...!";

            return new ViewAsPdf("pdf_firma_solicita", creacionCliente)

            {
                PageSize = Rotativa.AspNetCore.Options.Size.A4,
                PageOrientation = Rotativa.AspNetCore.Options.Orientation.Portrait,
                FileName = fileName,
                SaveOnServerPath = path_docFirma

            };


            //.BuildFile(this.ControllerContext);
            //bool enviarDrive = _serviceFileUpload.SubirArchivoDrive(path);

            //var myPDF = new ViewAsPdf("PdfNew", suministroCredito)
            //{
            //    FileName = fileName,
            //    PageSize = Rotativa.AspNetCore.Options.Size.A4,
            //    PageOrientation = Rotativa.AspNetCore.Options.Orientation.Portrait,
            //    SaveOnServerPath = path
            //};
            //var enviarToDrive = _serviceFileUpload.SubirArchivoDrive(fullPath);
            //return View("PdfNew", suministroCredito);
        }

    }
}
