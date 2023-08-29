using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace DiskStoreAPI.Models
{
    public class Track
    {
        [Key]
        [JsonIgnore]
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public string ImagePath { get; set; }
        public int AuthorId { get; set; }
    }
}
