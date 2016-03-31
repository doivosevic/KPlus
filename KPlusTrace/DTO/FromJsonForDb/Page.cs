using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DTO.FromJsonForDb
{
    [Table("Page")]
    public partial class Page
    {
        public int current { get; set; }
        public int items_per_page { get; set; }
        public int page_count { get; set; }
        public int item_count { get; set; }

        [Key]
        public int IdPage { get; set; }
        public int RootObjectId { get; set; }
    }
}
