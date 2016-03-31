using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DTO.FromJsonForDb
{
    [Table("Show")]
    public partial class Show
    {
        public int all { get; set; }
        public int offers { get; set; }
        public int @new { get; set; }
        public int favorites { get; set; }

        [Key]
        public int IdShow { get; set; }
        public int RootObjectId { get; set; }
    }
}
