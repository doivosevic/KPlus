using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DTO.FromJsonForDb
{
    [Table("Price3")]
    public partial class Price3
    {
        public int amount { get; set; }
        public string currency { get; set; }
        public string formatted_price { get; set; }

        [Key]
        public int IdPrice3 { get; set; }
        public int ProductId { get; set; }

        public override string ToString()
        {
            return formatted_price;
        }
    }
}
