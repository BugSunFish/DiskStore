using DiskStoreAPI.Data;
using DiskStoreAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DiskStoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TracksController : ControllerBase
    {
        public DataDbContext db;
        public TracksController(DataDbContext db)
        {
            this.db = db;
        }

        // GET: api/<TracksController>
        [HttpGet]
        public IEnumerable<TrackView> GetTracks() => TrackView();

        // GET api/<TracksController>/5
        [HttpGet("{id}")]
        public TrackView GetTrackById(int id) => TrackView().First(track => track.Id == id);

        // POST api/<TracksController>
        [HttpPost]
        public IActionResult PostTrack(Track track)
        {
            if (db.Users.Find(track.AuthorId) == null)
            {
                return StatusCode(500, "No user exists.");
            }
            db.Tracks.Add(track);
            db.SaveChanges();
            return Ok();
        }

        // PUT api/<TracksController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TracksController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        private IEnumerable<TrackView> TrackView()
        {
            IEnumerable<Track> tracks = db.Tracks;
            return tracks.Select(track => new TrackView
            {
                Id = track.Id,
                Name = track.Name,
                Price = track.Price,
                ImagePath = track.ImagePath,
                AuthorName = db.Users.FirstOrDefault(x => x.Id + 1 == track.Id)?.Name ?? string.Empty
            }).ToList();
        }
    }

    public class TrackView
    {
        [JsonIgnore]
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public string ImagePath { get; set; }
        public string AuthorName { get; set; }
    }
}
