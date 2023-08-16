using Dapper;
using Formato_CreacionClientes.Models;
using Formulario_SuministroCredito.Service;
using System.Data;

namespace Formato_CreacionClientes.Data
{
    public class CreacionClientesRepository : ICreacionClientesRepository
    {
        private readonly IDbConnection _dbconnection;
        private readonly IWebHostEnvironment _webHostEnvironment;
		private readonly IServiceFileUpload _serviceFileUpload;
        private readonly HttpClient _httpClient;



        public CreacionClientesRepository(IDbConnection dbConnection, IWebHostEnvironment webHostEnvironment, HttpClient httpClient, IServiceFileUpload serviceFileUpload)
        {
            _dbconnection = dbConnection;
            _webHostEnvironment = webHostEnvironment;
            _httpClient = httpClient;
			_serviceFileUpload = serviceFileUpload;

        }




        public async Task<IEnumerable<ClientesModel>> GetAll()
        {
            var sql = @"SELECT * FROM n97eed5_MaestrosProcesos.Creacion_Clientes";

            var resultado = await _dbconnection.QueryAsync<ClientesModel>(sql, new { });
            return resultado;
        }



        public async Task<ClientesModel> GetDatail(int id)
        {
            var sql = @"SELECT      
                                ID_CLIENTE,
			                    FECHA_DILIGENCIAMIENTO,
			                    TIPO_OPERACION,
			                    TIPO_SOLICITUD,
			                    NOMBRE_PERSONA_CONTACTO_COMPANNIA,
			                    TIPO_ACTUALIZACION,
			                    TIPO_PERSONA,
			                    TIPO_IDENTIFICACION,
			                    NUMERO_IDENTIFICACION,
			                    NOMBRE_COMPLETO_RAZONSOCIAL,
			                    REPRESENTANTE_LEGAL,
			                    NOMBRES_PERSONA_NATURAL,
			                    APELLIDOS_PERSONA_NATURAL,
			                    RAZON_SOCIAL,
			                    DIRECCION_TERCERO,
			                    BARRIO_TERCERO,
			                    DEPARTAMENTO_TERCERO,
			                    CIUDAD_TERCERO,
			                    NUMERO_CELULAR_TERCERO,
			                    TELEFONO_FIJO_TERCERO,
			                    EMAIL_TERCERO,
			                    DESEMPENNA_FUNCIONES_PUBLICAS,
			                    ADMINISTRA_RECURSOS_PUBLICOS,
			                    CARGO_PUBLICO,
			                    ANNO_VINCULACION,
			                    ANNO_DESVINCULACION,
			                    PERSONA_CONTACTO,
			                    CARGO_CONTACTO,
			                    EMAIL_CONTACTO,
			                    CELULAR_CONTACTO,
			                    RUTA_URL_CARGA_ACCIONISTAS,
			                    CANTIDAD_SUCURSAL_DESPACHO,
			                    NOMBRE_APELLIDO_FIRMANTE,
			                    NUM_ID_FIRMANTE,
			                    OBSERVACIONES_FIRMANTE,
			                    REPRESENTA_FIRMANTE
                        FROM n97eed5_MaestrosProcesos.Creacion_Clientes
                        WHERE ID_CLIENTE = @ID_CLIENTE";

            return await _dbconnection.QueryFirstOrDefaultAsync<ClientesModel>(sql, new { Id_Cliente = id });
                        

        }




        public ClientesModel GetById(int id)
        {
            var sql = @"SELECT      
                                ID_CLIENTE,
			                    FECHA_DILIGENCIAMIENTO,
			                    TIPO_OPERACION,
			                    TIPO_SOLICITUD,
			                    NOMBRE_PERSONA_CONTACTO_COMPANNIA,
			                    TIPO_ACTUALIZACION,
			                    TIPO_PERSONA,
			                    TIPO_IDENTIFICACION,
			                    NUMERO_IDENTIFICACION,
			                    NOMBRE_COMPLETO_RAZONSOCIAL,
			                    REPRESENTANTE_LEGAL,
			                    NOMBRES_PERSONA_NATURAL,
			                    APELLIDOS_PERSONA_NATURAL,
			                    RAZON_SOCIAL,
			                    DIRECCION_TERCERO,
			                    BARRIO_TERCERO,
			                    DEPARTAMENTO_TERCERO,
			                    CIUDAD_TERCERO,
			                    NUMERO_CELULAR_TERCERO,
			                    TELEFONO_FIJO_TERCERO,
			                    EMAIL_TERCERO,
			                    DESEMPENNA_FUNCIONES_PUBLICAS,
			                    ADMINISTRA_RECURSOS_PUBLICOS,
			                    CARGO_PUBLICO,
			                    ANNO_VINCULACION,
			                    ANNO_DESVINCULACION,
			                    PERSONA_CONTACTO,
			                    CARGO_CONTACTO,
			                    EMAIL_CONTACTO,
			                    CELULAR_CONTACTO,
			                    RUTA_URL_CARGA_ACCIONISTAS,
			                    CANTIDAD_SUCURSAL_DESPACHO,
			                    NOMBRE_APELLIDO_FIRMANTE,
			                    NUM_ID_FIRMANTE,
			                    OBSERVACIONES_FIRMANTE,
			                    REPRESENTA_FIRMANTE
                        FROM n97eed5_MaestrosProcesos.Creacion_Clientes
                        WHERE ID_CLIENTE = @ID_CLIENTE";

            var detalle =  _dbconnection.QueryFirstOrDefault<ClientesModel>(sql, new { Id_Cliente = id });
			return detalle;
        }




		//INSERTAR REGISTRO FORMULARIO
        public async Task<bool> CrearCliente(ClientesModel creacionClientes)

        {
			//cargar el adjunto con el servicio upload a drive, recibe url de archivo adjuntado.
			var rutaUrl_FileAccionistas = _serviceFileUpload.AdjuntarArchivos(creacionClientes.Carga_Accionistas);
			creacionClientes.Ruta_Url_Carga_Accionistas = rutaUrl_FileAccionistas.ToString();

            try
            {
                var sql = @" INSERT INTO n97eed5_MaestrosProcesos.Creacion_Clientes
								(	
										FECHA_DILIGENCIAMIENTO,
										TIPO_OPERACION,
										TIPO_SOLICITUD,
										NOMBRE_PERSONA_CONTACTO_COMPANNIA,
										TIPO_ACTUALIZACION,
										TIPO_PERSONA,
										TIPO_IDENTIFICACION,
										NUMERO_IDENTIFICACION,
										NOMBRE_COMPLETO_RAZONSOCIAL,
										REPRESENTANTE_LEGAL,
										NOMBRES_PERSONA_NATURAL,
										APELLIDOS_PERSONA_NATURAL,
										RAZON_SOCIAL,
										DIRECCION_TERCERO,
										BARRIO_TERCERO,
										DEPARTAMENTO_TERCERO,
										CIUDAD_TERCERO,
										NUMERO_CELULAR_TERCERO,
										TELEFONO_FIJO_TERCERO,
										EMAIL_TERCERO,
										DESEMPENNA_FUNCIONES_PUBLICAS,
										ADMINISTRA_RECURSOS_PUBLICOS,
										CARGO_PUBLICO,
										ANNO_VINCULACION,
										ANNO_DESVINCULACION,
										PERSONA_CONTACTO,
										CARGO_CONTACTO,
										EMAIL_CONTACTO,
										CELULAR_CONTACTO,
										RUTA_URL_CARGA_ACCIONISTAS,
										CANTIDAD_SUCURSAL_DESPACHO,
										NOMBRE_APELLIDO_FIRMANTE,
										NUM_ID_FIRMANTE,
										OBSERVACIONES_FIRMANTE,
										REPRESENTA_FIRMANTE)
								VALUES
									(	
										@FECHA_DILIGENCIAMIENTO ,
										@TIPO_OPERACION ,
										@TIPO_SOLICITUD ,
										@NOMBRE_PERSONA_CONTACTO_COMPANNIA ,
										@TIPO_ACTUALIZACION ,
										@TIPO_PERSONA ,
										@TIPO_IDENTIFICACION ,
										@NUMERO_IDENTIFICACION ,
										@NOMBRE_COMPLETO_RAZONSOCIAL ,
										@REPRESENTANTE_LEGAL ,
										@NOMBRES_PERSONA_NATURAL ,
										@APELLIDOS_PERSONA_NATURAL ,
										@RAZON_SOCIAL ,
										@DIRECCION_TERCERO ,
										@BARRIO_TERCERO ,
										@DEPARTAMENTO_TERCERO ,
										@CIUDAD_TERCERO ,
										@NUMERO_CELULAR_TERCERO ,
										@TELEFONO_FIJO_TERCERO ,
										@EMAIL_TERCERO ,
										@DESEMPENNA_FUNCIONES_PUBLICAS ,
										@ADMINISTRA_RECURSOS_PUBLICOS ,
										@CARGO_PUBLICO ,
										@ANNO_VINCULACION ,
										@ANNO_DESVINCULACION ,
										@PERSONA_CONTACTO ,
										@CARGO_CONTACTO ,
										@EMAIL_CONTACTO ,
										@CELULAR_CONTACTO ,
										@RUTA_URL_CARGA_ACCIONISTAS ,
										@CANTIDAD_SUCURSAL_DESPACHO ,
										@NOMBRE_APELLIDO_FIRMANTE ,
										@NUM_ID_FIRMANTE ,
										@OBSERVACIONES_FIRMANTE ,
										@REPRESENTA_FIRMANTE );
															";

                var res_creacion = await _dbconnection.ExecuteAsync(sql, new
                {

                    creacionClientes.Fecha_Diligenciamiento,
                    creacionClientes.Tipo_Operacion,
                    creacionClientes.Tipo_Solicitud,
                    creacionClientes.Nombre_Persona_Contacto_Compannia,
                    creacionClientes.Tipo_Actualizacion,
                    creacionClientes.Tipo_Persona,
                    creacionClientes.Tipo_Identificacion,
                    creacionClientes.Numero_Identificacion,
                    creacionClientes.Nombre_Completo_RazonSocial,
                    creacionClientes.Representante_Legal,
                    creacionClientes.Nombres_Persona_Natural,
                    creacionClientes.Apellidos_Persona_Natural,
                    creacionClientes.Razon_Social,
                    creacionClientes.Direccion_Tercero,
                    creacionClientes.Barrio_Tercero,
                    creacionClientes.Departamento_Tercero,
                    creacionClientes.Ciudad_Tercero,
                    creacionClientes.Numero_Celular_Tercero,
                    creacionClientes.Telefono_Fijo_Tercero,
                    creacionClientes.Email_Tercero,
                    creacionClientes.Desempenna_Funciones_Publicas,
                    creacionClientes.Administra_Recursos_Publicos,
                    creacionClientes.Cargo_Publico,
                    creacionClientes.Anno_Vinculacion,
                    creacionClientes.Anno_Desvinculacion,
                    creacionClientes.Persona_Contacto,
                    creacionClientes.Cargo_Contacto,
                    creacionClientes.Email_Contacto,
                    creacionClientes.Celular_Contacto,
                    creacionClientes.Ruta_Url_Carga_Accionistas,
                    creacionClientes.Cantidad_Sucursal_Despacho,
                    creacionClientes.Nombre_Apellido_Firmante,
                    creacionClientes.Num_Id_Firmante,
                    creacionClientes.Observaciones_Firmante,
                    creacionClientes.Representa_Firmante,

                });
                return res_creacion > 0;
            }
            catch (Exception)
            {

                throw;
            }

        }








        public string CountRowDb()
        {
            throw new NotImplementedException();
        }

      
    }
}
