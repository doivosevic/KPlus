using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DTO.FromJsonForDb
{
    [Table("Offer")]
    public partial class Offer
    {
        public int id { get; set; }
        public int offer_category_id { get; set; }
        public string type { get; set; }
        public string start_on { get; set; }
        public string end_on { get; set; }
        public int order_of { get; set; }
        public int offer_percentage { get; set; }
        //public OriginalPrice original_price { get; set; }
        public object shop_types_supported { get; set; }
        public bool web_available_only { get; set; }
        //public Price2 price { get; set; }

        [Key]
        public int IdOffer;
        public int ProductId;

        public virtual OriginalPrice original_price { get; set; }
        public virtual Price2 price { get; set; }
    }
}
