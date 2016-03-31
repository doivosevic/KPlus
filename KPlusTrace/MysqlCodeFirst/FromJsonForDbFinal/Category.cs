using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MysqlCodeFirst.FromJsonForDb
{
    [Table("Category")]
    public partial class Category
    {
        [Key]
        public int IdCategory { get; set; }

        public int id { get; set; }
        public string name { get; set; }
        public string category_path { get; set; }

        //public int ProductId { get; set; }
    }
}
