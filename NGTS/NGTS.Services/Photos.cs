using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Net.Http.Headers;
namespace NGTS.Services
{
    
    public static class Photos
    {
        static HttpClient client = new HttpClient();
        public static async Task<IEnumerable<Photo>> GetPhotosAsync()
        {
            IEnumerable<Photo> model = null;
            string path = @"https://jsonplaceholder.typicode.com/photos";
            HttpResponseMessage response = await client.GetAsync(path);
            if (response.IsSuccessStatusCode)
            {
                model = await response.Content.ReadAsJsonAsync<IEnumerable<Photo>>();
            }
            return model;
        }

    }
    


}


