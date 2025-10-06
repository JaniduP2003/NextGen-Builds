using Microsoft.Extensions.Configuration;
using MySqlConnector;
using System.IO;
using System.Threading.Tasks;

namespace Backend_Resourcely.Helpers;

public static class DatabaseInitializer
{
    public static async Task InitializeDatabase(IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("Default");

        // Read SQL script
        var sqlScript = await File.ReadAllTextAsync("SqlScripts/CreateTables.sql");

        await using var connection = new MySqlConnection(connectionString);
        await connection.OpenAsync();

        // Split script by ';' to handle multiple statements
        var commands = sqlScript.Split(';', System.StringSplitOptions.RemoveEmptyEntries);

        foreach (var commandText in commands)
        {
            var trimmedCommand = commandText.Trim();
            if (string.IsNullOrWhiteSpace(trimmedCommand)) continue;

            await using var cmd = new MySqlCommand(trimmedCommand, connection);
            await cmd.ExecuteNonQueryAsync();
        }
    }
}