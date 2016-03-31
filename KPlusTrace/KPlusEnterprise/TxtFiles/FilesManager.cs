using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using DTO;

namespace DAL.TxtFiles
{
    public class FilesManager
    {
        private string _directoryPath;
        public List<string> filePathList = new List<string>();
        public List<string> fileContentList = new List<string>();

        public FilesManager(string directoryPath)
        {
            _directoryPath = directoryPath;
            if (!Directory.Exists(directoryPath)) throw new ArgumentException("Directory at the specified path does not exist.");

            var files = Directory.GetFiles(directoryPath);
            filePathList = new List<string>(files);
        }

        public string GetRawFile(string filePath)
        {
            if (!File.Exists(filePath)) throw new ArgumentException("File at the specified path does not exist.");

            return File.ReadAllText(filePath);
        }

        public JObject GetJSonedFile(string filePath)
        {
            if (!File.Exists(filePath)) throw new ArgumentException("File at the specified path does not exist.");

            using (StreamReader file = File.OpenText(filePath))
            using (JsonTextReader reader = new JsonTextReader(file))
            {
                return (JObject)JToken.ReadFrom(reader);
            }
        }

        public products_august GetParsedFile(string filePath)
        {
            return GetJSonedFile(filePath).ToObject<products_august>();
        }
    }
}
