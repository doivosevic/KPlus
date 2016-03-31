using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MysqlCodeFirst.FromJsonForDb
{
    [Table("OriginalPrice")]
    public partial class OriginalPrice
    {
        [Key]
        public int IdOriginalPrice { get; set; }

        public int amount { get; set; }
        public string currency { get; set; }
        public string formatted_price { get; set; }

        //public int OfferId { get; set; }
    }
}
