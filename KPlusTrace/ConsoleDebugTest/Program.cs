using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql;

using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

using DAL.TxtFiles;
using DAL.MysqlCodeFirst;
using DTO.FromJsonForDbFinal;

namespace ConsoleDebugTest
{
    class Program
    {
        static void Main(string[] args)
        {
            //var db = new kplusEntities();
            //var sqlResult = db.products_august.SqlQuery("SELECT * FROM products LIMIT 10;");
            //var result = sqlResult.ToList();
            //foreach (var res in result)
            //{
            //    Console.WriteLine(res.name);
            //}

            var testFilePath = "C:\\Users\\Dito\\Desktop\\dump";
            var realFilePath = "E:\\KPLUS_DUMP\\dump";

            FilesManager fileManager = new FilesManager(testFilePath);
            KplusOctoberContext dbContext = new KplusOctoberContext();

            foreach (string filePath in fileManager.filePathList)
            {

                // Create the dbContext which is to be used
                
                    // First parse the file to get its JObject using Newtownsoft.Json
                    JObject fileJObject = fileManager.GetJSonedFile(filePath);
                    // Convert the JObject to the proper RootObject
                    RootObject root = fileJObject.ToObject<RootObject>();
                    // Parse the file path to get the date of the snapshot
                    string formattedFilePath = filePath.Substring(filePath.LastIndexOf('\\')+1).Substring(0, 16);
                    var dateOfFile = DateTime.ParseExact(formattedFilePath, "yyyy_MM_dd-H_m_s", null);
                    System.Diagnostics.Debug.WriteLine(filePath);
                    // Parse the file path for category name
                    string categoryName = filePath.Substring(filePath.LastIndexOf('_') + 1);
                    // Map the products to modify the DateOfSnapshot property before inserting
                    // it to the database
                    root.products.ForEach(t => t.DateOfSnapshot = dateOfFile);
                    root.products.ForEach(t => t.CategoryName = categoryName);
                    // Insert the RootObject which represents the file
                    dbContext.RootObjects.Add(root);
                    // Save the insertion
                    dbContext.SaveChanges();
                
            }

            KplusOctoberContext dbContext2 = new KplusOctoberContext();
            // This is just used for testing
            var fromDb = dbContext2.Products.ToList();
            fromDb.ForEach(t => Console.WriteLine(t));

            //Console.WriteLine(fileManager.filePathList[0]);

            Console.ReadKey();
        }
    }
}
