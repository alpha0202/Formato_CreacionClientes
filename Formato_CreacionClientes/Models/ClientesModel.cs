using System.ComponentModel.DataAnnotations;


namespace Formato_CreacionClientes.Models
{
    public class ClientesModel
    {
        public int Id_Cliente { get; set; }
        public DateTime Fecha_Diligenciamiento { get; set; }
        [Required(ErrorMessage = "Ingrese el dato requerido.")]
        public string Tipo_Operacion { get; set; }
        [Required(ErrorMessage = "Ingrese el dato requerido.")]
        public string Tipo_Solicitud { get; set; }

        [Required(ErrorMessage = "Ingrese el dato requerido.")]
        [DataType(DataType.Text)]
        [RegularExpression(@"^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$", ErrorMessage = "Utilice solo letras")]
        public string Nombre_Persona_Contacto_Compannia { get; set; }
        [Required(ErrorMessage = "Seleccione el dato requerido.")]
        public string Tipo_Actualizacion { get; set; }
        [Required(ErrorMessage = "Seleccione el dato requerido.")]
        public string Tipo_Persona { get; set; }
        [Required(ErrorMessage = "Seleccione el dato requerido.")]
        public string Tipo_Identificacion { get; set; }

        [Required(ErrorMessage ="Ingrese el número de identificación")]
        public string Numero_Identificacion { get; set; }

        [Required(ErrorMessage = "Ingrese el dato requerido.")]
        [DataType(DataType.Text)]
        [RegularExpression(@"^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$", ErrorMessage = "Utilice solo letras")]
        public string Nombre_Completo_RazonSocial { get; set; }
        [Required(ErrorMessage = "Ingrese el dato requerido.")]
        [DataType(DataType.Text)]
        [RegularExpression(@"^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$", ErrorMessage = "Utilice solo letras")]
        public string Representante_Legal { get; set; }
        [Required(ErrorMessage = "Ingrese el dato requerido.")]
        [DataType(DataType.Text)]
        [RegularExpression(@"^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$", ErrorMessage = "Utilice solo letras")]
        public string Nombres_Persona_Natural { get; set; }
        [Required(ErrorMessage = "Ingrese el dato requerido.")]
        [DataType(DataType.Text)]
        [RegularExpression(@"^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$", ErrorMessage = "Utilice solo letras")]
        public string Apellidos_Persona_Natural { get; set; }
        [Required(ErrorMessage = "Ingrese el dato requerido.")]
        [DataType(DataType.Text)]
        [RegularExpression(@"^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$", ErrorMessage = "Utilice solo letras")]
        public string Razon_Social { get; set; }
        public string Direccion_Tercero { get; set; }
        public string Barrio_Tercero { get; set; }
        public string Departamento_Tercero { get; set; }
        public string Ciudad_Tercero { get; set; }
        public string Numero_Celular_Tercero { get; set; }
        public string Telefono_Fijo_Tercero { get; set; }


        [Required(ErrorMessage = "Debe ingresar un correo electrónico")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "Email incorrecta")]
        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Formato incorrecto.")]
        public string Email_Tercero { get; set; }
        public string Desempenna_Funciones_Publicas { get; set; }
        public string Administra_Recursos_Publicos { get; set; }
        public string Cargo_Publico { get; set; }
        public string Anno_Vinculacion { get; set; }
        public string Anno_Desvinculacion { get; set; }
       

        [Required(ErrorMessage = "Ingrese el dato requerido.")]
        [DataType(DataType.Text)]
        [RegularExpression(@"^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$", ErrorMessage = "Utilice solo letras")]
        public string Persona_Contacto { get; set; }

        [Required(ErrorMessage = "Ingrese el dato requerido.")]
        [DataType(DataType.Text)]
        [RegularExpression(@"^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$", ErrorMessage = "Utilice solo letras")]
        public string Cargo_Contacto { get; set; }

        [Required(ErrorMessage = "Debe ingresar un correo electrónico")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "Email incorrecta")]
        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Formato incorrecto.")]
        public string Email_Contacto { get; set; }

        [Required(ErrorMessage = "Ingrese el celular")]
        public string Celular_Contacto { get; set; }


        [Required(ErrorMessage = "Ingrese el dato requerido.")]
        [DataType(DataType.Text)]
        [RegularExpression(@"^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$", ErrorMessage = "Utilice solo letras")]
        public string Razon_Social_Nombre_SocioA { get; set; }
        public string Tipo_Persona_SocioA { get; set; }
        public string Tipo_Id_SocioA { get; set; }
        public string Num_Doc_SocioA { get; set; }
        public string Porcentaje_SocioA { get; set; }
        public string Desempenna_Func_Publica_SocioA { get; set; }
        public string Maneja_Recurso_Publico_SocioA { get; set; }
        public IFormFile Carga_Accionistas { get; set; }
        public string Ruta_Url_Carga_Accionistas { get; set; }



        public string Cantidad_Sucursal_Despacho { get; set; }
        public string Direccion_Anterior_Despacho { get; set; }
        public string Direccion_Nueva_Despacho { get; set; }
        public string Barrio_Despacho { get; set; }
        public string Ciudad_Despacho { get; set; }
        public string Departamento_Despacho { get; set; }
        public string Celular_Despacho { get; set; }
        public string Telefono_Despacho { get; set; }

        [Required(ErrorMessage = "Debe ingresar un correo electrónico")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "Email incorrecta")]
        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Formato incorrecto.")]
        public string Email_FactElectronica_Despacho { get; set; }



        public string Nombre_Apellido_Firmante { get; set; }
        public string Num_Id_Firmante { get; set; }
        public string Observaciones_Firmante { get; set; }
        public string Representa_Firmante { get; set; }

    
    }
}
