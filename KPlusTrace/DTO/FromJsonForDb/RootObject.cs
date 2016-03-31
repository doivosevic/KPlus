using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DTO.FromJsonForDb
{
    [Table("RootObject")]
    public partial class RootObject
    {
        [Key]
        public int IdRootObject { get; set; }

        public virtual Page _page { get; set; }
        public virtual Price _price { get; set; }
        public virtual Show _show { get; set; }
        public virtual List<Product> products { get; set; }
    }
}
