//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class hrana
    {
        public System.DateTime datum { get; set; }
        public int id { get; set; }
        public string code { get; set; }
        public string name { get; set; }
        public Nullable<int> amount { get; set; }
        public string currency { get; set; }
        public string formatted_price { get; set; }
        public string description { get; set; }
        public string product_path { get; set; }
        public string image_path { get; set; }
        public string thumbnail_image_path { get; set; }
        public string product_details_path { get; set; }
        public string manufacturer { get; set; }
        public string sales_unit_of_measure { get; set; }
        public Nullable<double> quantity_step { get; set; }
        public Nullable<double> min_order_quantity { get; set; }
        public Nullable<double> netto_weight_factor { get; set; }
        public Nullable<bool> sliceable { get; set; }
        public Nullable<int> catch_weight { get; set; }
        public Nullable<bool> has_image { get; set; }
        public Nullable<bool> requires_deposit_packaging { get; set; }
        public string image_s { get; set; }
        public string image_m { get; set; }
        public string image_l { get; set; }
        public Nullable<int> netto_weight { get; set; }
        public string contact_person { get; set; }
        public string contact_person_address { get; set; }
        public string allergens_statement { get; set; }
        public string storage_instruction { get; set; }
        public string health_claim { get; set; }
        public string additives_statement { get; set; }
        public string drained_weight { get; set; }
        public Nullable<bool> active { get; set; }
        public string price_unit_of_measure { get; set; }
        public string statistical_price { get; set; }
        public Nullable<bool> favorite { get; set; }
        public string ingredients_statement { get; set; }
        public string manufacturer_address { get; set; }
        public string nutritional_claim { get; set; }
        public string origin_statement { get; set; }
        public string preparation_instruction { get; set; }
        public string serving_suggestion { get; set; }
        public string storage_instructions { get; set; }
        public string variant_description { get; set; }
    }
}