using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DTO.FromJsonForDb
{
    [Table("Category")]
    public partial class Category
    {
        public int id { get; set; }
        public string name { get; set; }
        public string category_path { get; set; }

        [Key]
        public int IdCategory { get; set; }
        public int ProductId { get; set; }
    }
}
