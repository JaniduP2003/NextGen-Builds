using Backend_Resourcely.Data;
using Backend_Resourcely.Helpers;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// EF Core MySQL
var connectionString = builder.Configuration.GetConnectionString("Default");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// CORS for Vite dev server      // this croes is to connecting back and foront
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

// Check for custom commands
if (args.Length > 0 && args[0].ToLower() == "create-admin")
{
    // Parse command-line arguments
    var emailArg = args.FirstOrDefault(a => a.StartsWith("--email"));
    var passwordArg = args.FirstOrDefault(a => a.StartsWith("--password"));

    var email = emailArg?.Split('=')[1];
    var password = passwordArg?.Split('=')[1];

    // Validate input
    if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
    {
        Console.WriteLine("Please provide both --email and --password arguments.");
        return;
    }

    // Create a DI scope to get the DbContext
    using (var scope = app.Services.CreateScope())
    {
        var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        await AdminCreator.CreateAdminUser(dbContext, email, password, password);
    }

    // Exit after command execution
    return;
}


// Ensure DB exists (dev)
//using (var scope = app.Services.CreateScope())
//{
//    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
//    db.Database.EnsureCreated();
//}                         ############## this was used befor in metigrations now cant use must use RAW SQL SCRIPTS

using (var scope = app.Services.CreateScope())
{
    var configuration = scope.ServiceProvider.GetRequiredService<IConfiguration>();
    await DatabaseInitializer.InitializeDatabase(configuration);
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();
app.UseCors();
app.UseAuthorization();
app.MapControllers();
//app.Run();

await app.RunAsync();

//psudo code

//itaration.hash.sult
//we cant equal hash+sult but compair hash+sult

//register   - newuser > run pbk > hash+sult > store hash+sult(combined sting in db one fieald )
// featch the user > hash.string>take the store salt> compair recompile the hash ,use the stored salt and DONT EQUAL BUT COMPAIR
//IF YES 200 OK
//IF NOT 401 NOT AUTHORIZED

//create a DB entity in models
// to get a filterd out/in need seters and geters so use 2 dto login and signup resiter has username,email,password
// login has onnly useremail  and password no user name no need for name
//then create the controller >inject  configrations > use the db