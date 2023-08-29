using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DiskStoreAPI.Models
{
    public class User
    {
        [Key]
        [JsonIgnore]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Hash { get; set; }
        public string Salt { get; set; }
    }
}
