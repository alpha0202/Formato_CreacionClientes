namespace Formato_CreacionClientes.Models
{
    public class ClientesModel
    {
        public int Id { get; set; }

        public string TipoOperacion { get; set; }

        public string Nombre_PersonaCompañia { get; set; }

        public string TipoActualizacion { get; set; }

        public string TipoPersona { get; set; }

        public string TipoIdentificacion { get; set; }

        public string NumeroIdentificacion { get; set; }

        public string NombresPersona { get; set; }
        public string ApellidosPersona { get; set; }
        public string RazonSocial { get; set; }
        public string DireccionTercero { get; set; }
        public string BarrioTercero { get; set; }
        public string DepartamentoTercero { get; set; }
        public string CiudadTercero { get; set; }
        public string NumeroCelularTercero { get; set; }
        public string TelefonoFijoTercero { get; set; }
        public string EmailTercero { get; set; }
        public string NombreRepresentanteLegal { get; set; }
        public string NroIdentificacionRLegal { get; set; }

        public string TipoIdentificacionRLegal { get; set; }
    }
}
