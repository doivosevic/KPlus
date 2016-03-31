using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.FromJson
{
    public class Page
    {
        public int current { get; set; }
        public int items_per_page { get; set; }
        public int page_count { get; set; }
        public int item_count { get; set; }
    }

    public class Price
    {
        public int min { get; set; }
        public int max { get; set; }
    }

    public class Show
    {
        public int all { get; set; }
        public int offers { get; set; }
        public int @new { get; set; }
        public int favorites { get; set; }
    }

    public class Category
    {
        public int id { get; set; }
        public string name { get; set; }
        public string category_path { get; set; }
    }

    public class ProductUom
    {
        public int id { get; set; }
        public string name { get; set; }
        public int? netto_weight { get; set; }
        public int? gross_weight { get; set; }
        public string smaller_unit { get; set; }
        public int? smaller_unit_factor { get; set; }
        public object dimensions { get; set; }
        public object volume { get; set; }
        public object barcode { get; set; }
    }

    public class OriginalPrice
    {
        public int amount { get; set; }
        public string currency { get; set; }
        public string formatted_price { get; set; }
    }

    public class Price2
    {
        public int amount { get; set; }
        public string currency { get; set; }
        public string formatted_price { get; set; }
    }

    public class Offer
    {
        public int id { get; set; }
        public int offer_category_id { get; set; }
        public string type { get; set; }
        public string start_on { get; set; }
        public string end_on { get; set; }
        public int order_of { get; set; }
        public int offer_percentage { get; set; }
        public OriginalPrice original_price { get; set; }
        public object shop_types_supported { get; set; }
        public bool web_available_only { get; set; }
        public Price2 price { get; set; }
    }

    public class Price3
    {
        public int amount { get; set; }
        public string currency { get; set; }
        public string formatted_price { get; set; }

        public override string ToString()
        {
            return formatted_price;
        }
    }

    public class Product
    {
        public int id { get; set; }
        public string code { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string product_path { get; set; }
        public string image_path { get; set; }
        public string thumbnail_image_path { get; set; }
        public string product_details_path { get; set; }
        public List<Category> categories { get; set; }
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
        public List<object> icons { get; set; }
        public object lifetime { get; set; }
        public List<ProductUom> product_uoms { get; set; }
        public List<string> barcodes { get; set; }
        public bool active { get; set; }
        public string price_unit_of_measure { get; set; }
        public string statistical_price { get; set; }
        public Offer offer { get; set; }
        public Price3 price { get; set; }
        public bool favorite { get; set; }

        public override string ToString()
        {
            return id.ToString() + " -> " + name + " .. " + price.ToString();
        }
    }

    public class RootObject
    {
        public Page _page { get; set; }
        public Price _price { get; set; }
        public Show _show { get; set; }
        public List<Product> products { get; set; }
    }
}
