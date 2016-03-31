using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DTO.FromJsonForDb
{
    [Table("Price")]
    public partial class Price
    {
        public int min { get; set; }
        public int max { get; set; }

        [Key]
        public int IdPrice { get; set; }
        public int RootObjectId { get; set; }
    }
}
