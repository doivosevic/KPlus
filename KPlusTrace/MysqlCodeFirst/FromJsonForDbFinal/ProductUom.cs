using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MysqlCodeFirst.FromJsonForDb
{
    [Table("ProductUom")]
    public partial class ProductUom
    {
        [Key]
        public int IdProductUom { get; set; }

        public int id { get; set; }
        public string name { get; set; }
        public int? netto_weight { get; set; }
        public int? gross_weight { get; set; }
        public string smaller_unit { get; set; }
        public int? smaller_unit_factor { get; set; }
        public object dimensions { get; set; }
        public object volume { get; set; }
        public object barcode { get; set; }

        //public int ProductId { get; set; }
    }
}
