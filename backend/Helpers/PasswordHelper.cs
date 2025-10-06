using System;
using System.Security.Cryptography;

namespace Backend_Resourcely.Helpers
{
    public static class PasswordHelper
    {
        private const int SaltSize = 16;   // 128 bit
        private const int KeySize = 32;    // 256 bit
        private const int Iterations = 10000;

        public static (string hash, string salt) HashPassword(string password)
        {
            byte[] saltBytes = new byte[SaltSize];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(saltBytes);
            }

            using var pbkdf2 = new Rfc2898DeriveBytes(password, saltBytes, Iterations, HashAlgorithmName.SHA256);
            byte[] hashBytes = pbkdf2.GetBytes(KeySize);

            return (Convert.ToBase64String(hashBytes), Convert.ToBase64String(saltBytes));
        }

        public static bool VerifyPassword(string password, string storedHash, string storedSalt)
        {
            byte[] saltBytes = Convert.FromBase64String(storedSalt);
            using var pbkdf2 = new Rfc2898DeriveBytes(password, saltBytes, Iterations, HashAlgorithmName.SHA256);
            byte[] hashBytes = pbkdf2.GetBytes(KeySize);

            return CryptographicOperations.FixedTimeEquals(hashBytes, Convert.FromBase64String(storedHash));
        }
    }
} 
