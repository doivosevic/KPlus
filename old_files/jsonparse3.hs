{-# LANGUAGE DeriveDataTypeable #-}
import Text.JSON.Generic

data Response = Response 
	{ _page :: String
	, _price :: String
	, _show :: String
	, products :: [Product]
	} deriving (Show, Data, Typeable)

data Product = Product
	{ active :: Bool
	, additives_statement :: Maybe String
	, allergens_statement :: Maybe String
	, barcodes:: [String]
	, brand :: String
	, catch_weight :: Integer
	, categories :: [String]
	, code :: String
	, contact_person :: String
	, contact_person_address :: String
	, description :: Maybe String
	, drainged_weight :: Maybe Integer
	, favorite :: Bool
	, has_image :: Bool
	, health_claim :: Maybe String
	, icon :: String
	, id :: Integer
	, image_l :: String
	, image_m :: String
	, image_path :: String
	, image_s :: String
	, ingredients_statement :: String
	, lifetime :: null, ne znam
	, manufacturer :: String
	, manufacturer_address :: String
	, min_order_quantity :: Integer
	, name :: String
	, netto_weight :: Integer
	, netto_weight_factor :: Maybe Bool
	, nutrients :: String
	, nutritional_claim :: Maybe String
	, origin_statement :: String
	, preparation_instruction :: String
	, price :: String
	, price_unit_of_measure :: String
	, product_details_path :: String
	, product_path :: String
	, product_uoms :: String
	, quantity_step:: Integer
	, requires_deposit_packaging:: Bool
	, sales_unit_of_measure:: String
	, serving_suggestion:: Maybe String
	, sliceable:: Bool
	, statistical_price:: String
	, storage_instruction:: String
	, thumbnail_image_path:: String
	, variant_description:: Maybe String
	} deriving (Show, Data, Typeable)