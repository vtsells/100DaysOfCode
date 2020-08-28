using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Net.Http.Headers;
using System.Linq;

namespace NGTS.Services
{
    
    public static class Albums
    {
        static HttpClient client = new HttpClient();
        public static async Task<IEnumerable<Album>> GetAlbumsAsync()
        {
            IEnumerable<Album> model = null;
            string path = @"https://jsonplaceholder.typicode.com/albums?_start=1&_limit=16";
            HttpResponseMessage response = await client.GetAsync(path);
            if (response.IsSuccessStatusCode)
            {
                model = await response.Content.ReadAsJsonAsync<IEnumerable<Album>>();
            }
            foreach(var album in model)
            {
             
                path = @"https://jsonplaceholder.typicode.com/albums/"+album.id+ "/photos?_start=1&_limit=1";
                response = await client.GetAsync(path);
                if (response.IsSuccessStatusCode)
                {
                    var photo = await response.Content.ReadAsJsonAsync<IEnumerable<Photo>>();
                    album.firstPhoto = photo.FirstOrDefault();
                }
            }
            return model;
        }

    }
    
    public class Album
    {
        public int id { get; set; }
        public int userId { get; set; }
        public string title { get; set; }
        public Photo firstPhoto { get; set; }
    }
    public class Photo
    {
        public int id { get; set; }
        public int albumId { get; set; }
        public string title { get; set; }
        public string url { get; set; }
        public string thumbnailUrl { get; set; }

    }
}


