using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using MysqlCodeFirst.FromJsonForDb;

namespace MysqlCodeFirst
{
    class Program
    {
        //https://msdn.microsoft.com/en-us/data/jj193542.aspx
        //https://msdn.microsoft.com/en-us/data/jj556606.aspx


        static void Main(string[] args)
        {
            KplusOctoberContext dbContext = new KplusOctoberContext();

            Price price = new Price { IdPrice = 1, min = 32, max = 102 };
            dbContext.Prices.Add(price);
            dbContext.SaveChanges();

            var allPrices = dbContext.Prices.ToList();
            allPrices.ForEach(t => Console.WriteLine(t.IdPrice));

            Console.ReadKey();
        }
    }
}
