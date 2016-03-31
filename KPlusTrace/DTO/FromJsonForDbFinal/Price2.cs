using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DTO.FromJsonForDbFinal
{
    [Table("Price2")]
    public partial class Price2
    {
        [Key]
        public int IdPrice2 { get; set; }

        //[Index("Price2_Unique", 1, IsUnique = true)]
        public int amount { get; set; }
        [MaxLength(10)]
        //[Index("Price2_Unique", 2, IsUnique = true)]
        public string currency { get; set; }
        [MaxLength(20)]
        //[Index("Price2_Unique", 3, IsUnique = true)]
        public string formatted_price { get; set; }

        //public int OfferId { get; set; }
    }
}
