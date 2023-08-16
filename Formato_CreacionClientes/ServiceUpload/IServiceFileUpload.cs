namespace Formulario_SuministroCredito.Service
{
    public interface IServiceFileUpload
    {
      
        public string AdjuntarArchivos(IFormFile FileUpload);

        public string SubirArchivoDrive_Firmante();

        public string CrearDirectorio_Firmante();

        //public Tuple<string, string> Resultado();
    }
}
