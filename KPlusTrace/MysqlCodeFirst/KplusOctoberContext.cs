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
    [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
    public class KplusOctoberContext : DbContext
    {
        public KplusOctoberContext() : base("kplusEntities")
        {
            Database.SetInitializer<KplusOctoberContext>(new DropCreateDatabaseAlways<KplusOctoberContext>());
        }
        static KplusOctoberContext()
        {
            DbConfiguration.SetConfiguration(new MySql.Data.Entity.MySqlEFConfiguration());
        }

        public DbSet<Category> Category { get; set; }
        public DbSet<Offer> Offers { get; set; }
        public DbSet<OriginalPrice> OriginalPrices { get; set; }
        public DbSet<Page> Pages { get; set; }
        public DbSet<Price> Prices { get; set; }
        public DbSet<Price2> Price2s { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductUom> ProductUoms { get; set; }
        public DbSet<RootObject> RootObjects { get; set; }
        public DbSet<Show> Shows { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
