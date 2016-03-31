using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DTO.FromJsonForDb
{
    [Table("Product")]
    public partial class Product
    {
        public int id { get; set; }
        public string code { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string product_path { get; set; }
        public string image_path { get; set; }
        public string thumbnail_image_path { get; set; }
        public string product_details_path { get; set; }
        //public virtual List<Category> categories { get; set; }
        public string manufacturer { get; set; }
        public string sales_unit_of_measure { get; set; }
        public double quantity_step { get; set; }
        public double min_order_quantity { get; set; }
        public double? netto_weight_factor { get; set; }
        public bool sliceable { get; set; }
        public int catch_weight { get; set; }
        public bool has_image { get; set; }
        public bool requires_deposit_packaging { get; set; }
        public string image_s { get; set; }
        public string image_m { get; set; }
        public string image_l { get; set; }
        //public virtual List<object> icons { get; set; }
        public string lifetime { get; set; }
        //public virtual List<ProductUom> product_uoms { get; set; }
        //public virtual List<string> barcodes { get; set; }
        public bool active { get; set; }
        public string price_unit_of_measure { get; set; }
        public string statistical_price { get; set; }
        //public virtual Offer offer { get; set; }
        //public virtual Price3 price { get; set; }
        public bool favorite { get; set; }

        /// <summary>
        /// // from products_august
        /// </summary>
        public string my_category { get; set; }
        public System.DateTime datum { get; set; }
        public Nullable<int> amount { get; set; }
        public string currency { get; set; }
        public string formatted_price { get; set; }
        public Nullable<int> netto_weight { get; set; }
        public string contact_person { get; set; }
        public string contact_person_address { get; set; }
        public string allergens_statement { get; set; }
        public string storage_instruction { get; set; }
        public string health_claim { get; set; }
        public string additives_statement { get; set; }
        public string drained_weight { get; set; }
        public string ingredients_statement { get; set; }
        public string manufacturer_address { get; set; }
        public string nutritional_claim { get; set; }
        public string origin_statement { get; set; }
        public string preparation_instruction { get; set; }
        public string serving_suggestion { get; set; }
        public string storage_instructions { get; set; }
        public string variant_description { get; set; }
        public Nullable<int> package_id { get; set; }
        /// <summary>
        /// ////////////////////////////////////////////////////
        /// </summary>

        public virtual List<Category> categories { get; set; }
        public virtual List<object> icons { get; set; }
        public virtual List<ProductUom> product_uoms { get; set; }
        public virtual List<string> barcodes { get; set; }
        public virtual Offer offer { get; set; }
        public virtual Price3 price { get; set; }

        [Key]
        public int IdProduct { get; set; }

        public int RootObjectId { get; set; }

        public override string ToString()
        {
            return id.ToString() + " -> " + name + " .. " + price.ToString();
        }
    }

}
