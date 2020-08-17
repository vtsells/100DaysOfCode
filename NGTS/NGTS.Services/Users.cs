using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Net.Http.Headers;
namespace NGTS.Services
{
    
    public static class Users
    {
        static HttpClient client = new HttpClient();
        public static async Task<IEnumerable<User>> GetUsersAsync()
        {
            IEnumerable<User> model = null;
            string path = @"https://jsonplaceholder.typicode.com/users";
            HttpResponseMessage response = await client.GetAsync(path);
            if (response.IsSuccessStatusCode)
            {
                model = await response.Content.ReadAsJsonAsync<IEnumerable<User>>();
            }
            return model;
        }

    }
    
    public class User
    {
        public int id { get; set; }
        public string name { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public Address address { get; set; }
        public string phone { get; set; }
        public string website { get; set; }
        public Company company { get; set; }
    }
    public class Address
    {
        public string street { get; set; }
        public string suite { get; set; }
        public string city { get; set; }
        public string zipcode { get; set; }
        public Geo geo { get; set; }
    }
    public class Geo
    {
        public string lat { get; set; }
        public string lng { get; set; }
    }
    public class Company
    {
        public string name { get; set; }
        public string catchPhrase { get; set; }
        public string bs { get; set; }
    }
}


