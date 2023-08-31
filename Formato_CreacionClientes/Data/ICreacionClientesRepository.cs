using Formato_CreacionClientes.Models;

namespace Formato_CreacionClientes.Data
{
    public interface ICreacionClientesRepository
    {
        Task<IEnumerable<ClientesModel>> GetAll();

        Task<ClientesModel> GetDatail(int id);

        Task<bool> CrearCliente(ClientesModel creacionClientes);

        public ClientesModel GetById(int id);

        public string CountRowDb();

      

    }
}
