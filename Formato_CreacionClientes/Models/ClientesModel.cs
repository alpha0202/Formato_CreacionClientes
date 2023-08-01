namespace Formato_CreacionClientes.Models
{
    public class ClientesModel
    {
        public int Id { get; set; }

        public string Tipo_Operacion { get; set; }

        public string Nombre_PersonaCompañia { get; set; }

        public string Tipo_Actualizacion { get; set; }

        public string Tipo_Persona { get; set; }

        public string Tipo_Identificacion { get; set; }

        public string Numero_Identificacion { get; set; }

        public string Nombres_Persona { get; set; }
        public string Apellidos_Persona { get; set; }
        public string Razon_Social { get; set; }
        public string Direccion_Tercero { get; set; }
        public string Barrio_Tercero { get; set; }
        public string Departamento_Tercero { get; set; }
        public string Ciudad_Tercero { get; set; }
        public string Numero_CelularTercero { get; set; }
        public string Telefono_FijoTercero { get; set; }
        public string Email_Tercero { get; set; }
        public string Nombre_RepresentanteLegal { get; set; }
        public string Nro_IdentificacionRLegal { get; set; }

        public string Tipo_IdentificacionRLegal { get; set; }
    }
}
