{-# LANGUAGE DeriveDataTypeable #-}
import Text.JSON.Generic

data Response = Response 
	{ _page :: Page
	, _price :: Price
	, _show :: Showy
	, products :: [Product]
	} deriving (Show, Data, Typeable)

data Page = Page
	{ current :: Integer
	, item_count :: Integer
	, items_per_page :: Integer
	, page_count :: Integer
	} deriving (Show, Data, Typeable)

data Price = Price
	{ min :: Integer
	, max :: Integer
	} deriving (Show, Data, Typeable)

data Category = Category
	{ category_path :: String
	, id :: Integer
	, name :: String
	} deriving (Show, Data, Typeable)

data Brand = Brand
	{ image_path :: String
	, name :: String
	} deriving (Show, Data, Typeable)

data Image = Image
	{ media_device :: String
	, mobile :: String
	} deriving (Show, Data, Typeable)

data Icon = Icon
	{ image :: String
	, type :: String
	} deriving (Show, Data, Typeable)

data Product = Product
	{ active :: Bool
	, additives_statement :: Maybe String
	, allergens_statement :: Maybe String
	, barcodes:: [String]
	, brand :: Brand
	, catch_weight :: Integer
	, categories :: [Category]
	, code :: String
	, contact_person :: String
	, contact_person_address :: String
	, description :: Maybe String
	, drainged_weight :: Maybe Integer
	, favorite :: Bool
	, has_image :: Bool
	, health_claim :: Maybe String
	, icon ::
		[
			0::
				image::
					media_device:: String
					mobile:: String
				type:: String
		]
	, id:: Integer
	, image_l:: String
	, image_m:: String
	, image_path:: String
	, image_s:: String
	, ingredients_statement:: String
	, lifetime:: null, ne znam
	, manufacturer:: String
	, manufacturer_address:: String
	, min_order_quantity:: Integer
	, name:: String
	, netto_weight:: Integer
	, netto_weight_factor:: Maybe Bool
	, nutrients::
		[
			0::
				code:: String
				value::
					100:: String
		]
	, nutritional_claim:: Maybe String
	, origin_statement:: String
	, preparation_instruction:: String
	, price::
		ammount:: Integer
		currency:: String
		formatted_price:: String
	, price_unit_of_measure:: String
	, product_details_path:: String
	, product_path:: String
	, product_uoms::
		[
			0::
				barcode:: Maybe String
				dimensions:: Maybe Integer
				gross_weight:: Maybe Integer
				id:: Integer
				name:: String
				netto_weight:: Maybe Integer
				smaller_unit:: Maybe Integer
				smaller_unit_factor:: Maybe Bool
				volume:: Maybe Integer
		]
	, quantity_step:: Integer
	, requires_deposit_packaging:: Bool
	, sales_unit_of_measure:: String
	, serving_suggestion:: Maybe String
	, sliceable:: Bool
	, statistical_price:: String
	, storage_instruction:: String
	, thumbnail_image_path:: String
	, variant_description:: Maybe String
		]