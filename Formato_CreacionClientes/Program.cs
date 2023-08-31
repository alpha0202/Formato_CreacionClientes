using System.Data.SqlClient;
using System.Data;
using Formato_CreacionClientes.Data;
using Formulario_SuministroCredito.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddMvc();
builder.Services.AddHttpClient();



//sqlserver Unoee
var dbConnectionStringUnoee = builder.Configuration.GetConnectionString("conexionUnoee");
//builder.Services.AddSingleton<IDbConnection>((sp) => new SqlConnection(dbConnectionStringUnoee));


//MySql servidor para integraciones signRequest
var dbMySqlConexion = builder.Configuration.GetConnectionString("mySqlConexion");
builder.Services.AddTransient<IDbConnection>((sp) => new MySqlConnector.MySqlConnection(dbMySqlConexion));




//inyectar data creacion clientes
builder.Services.AddScoped<ICreacionClientesRepository, CreacionClientesRepository>();

//inyección servicio de carga archivos al drive
builder.Services.AddScoped<IServiceFileUpload, ServiceFileUpload>();




var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=clientes}/{action=Index}/{id?}");



//carga de paquetes .exe rotativa PDF
IWebHostEnvironment env = app.Environment;
Rotativa.AspNetCore.RotativaConfiguration.Setup(env.WebRootPath, "../Rotativa");


app.Run();
