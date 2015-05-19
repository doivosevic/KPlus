{-# LANGUAGE OverloadedStrings #-}

import Data.Aeson ((.:), (.:?), decode, FromJSON(..), Value(..))
import Control.Applicative ((<$>), (<*>))
import qualified Data.ByteString.Lazy.Char8 as BS

dump = readFile "kplus_test.dump"

dump_bs = dump >>= return . BS.pack

data Item11 = Item11 { getLines    :: Integer
                   , getDate     :: String
                   , getID       :: String
                   , getLanguage :: String
                   , getPrivate  :: Bool
                   , getURL      :: String
                   , getUser     :: Maybe String
                   , getBody     :: String
                   } deriving (Show)

data Item = Item { id                            :: String
                 , code                          :: String
                 , name                          :: String
                 , description                   :: String
                 , product_path                  :: String
                 , image_path                    :: String
                 , thumbnail_image_path          :: String
                 , product_details_path          :: String
                 , categories                    :: String
                 , manufacturer                  :: String
                 , sales_unit_of_measure         :: String
                 , quantity_step                 :: String
                 , min_order_quantity            :: String
                 , netto_weight_factor           :: String
                 , sliceable                     :: String
                 , catch_weight                  :: String
                 , has_image                     :: String
                 , requires_deposit_packaging    :: String
                 , image_s                       :: String
                 , image_m                       :: String
                 , image_l                       :: String
                 , brand                         :: String
                 , icons                         :: String
                 , lifetime                      :: String
                 , product_uoms                  :: String
                 , barcodes                      :: String
                 , active                        :: String
                 , price_unit_of_measure         :: String
                 , statistical_price             :: String
                 , price                         :: String
                 , netto_weight                  :: String
                 , drained_weight                :: String
                 , manufacturer_address          :: String
                 , contact_person                :: String
                 , contact_person_address        :: String
                 , ingredients_statement         :: String
                 , allergens_statement           :: String
                 , additives_statement           :: String
                 , variant_description           :: String
                 , origin_statement              :: String
                 , storage_instruction           :: String
                 , preparation_instruction       :: String
                 , serving_suggestion            :: String
                 , health_claim                  :: String
                 , nutritional_claim             :: String
                 , nutrients                     :: String
                 , favorite                      :: String
} deriving (Show)

instance FromJSON Item where
  parseJSON (Object v) =
    Item <$>
        (v .: "id"                           ) <*>
        (v .: "code"                         ) <*>
        (v .: "name"                         ) <*>
        (v .: "description"                  ) <*>
        (v .: "product_path"                 ) <*>
        (v .: "image_path"                   ) <*>
        (v .: "thumbnail_image_path"         ) <*>
        (v .: "product_details_path"         ) <*>
        (v .: "categories"                   ) <*>
        (v .: "manufacturer"                 ) <*>
        (v .: "sales_unit_of_measure"        ) <*>
        (v .: "quantity_step"                ) <*>
        (v .: "min_order_quantity"           ) <*>
        (v .: "netto_weight_factor"          ) <*>
        (v .: "sliceable"                    ) <*>
        (v .: "catch_weight"                 ) <*>
        (v .: "has_image"                    ) <*>
        (v .: "requires_deposit_packaging"   ) <*>
        (v .: "image_s"                      ) <*>
        (v .: "image_m"                      ) <*>
        (v .: "image_l"                      ) <*>
        (v .: "brand"                        ) <*>
        (v .: "icons"                        ) <*>
        (v .: "lifetime"                     ) <*>
        (v .: "product_uoms"                 ) <*>
        (v .: "barcodes"                     ) <*>
        (v .: "active"                       ) <*>
        (v .: "price_unit_of_measure"        ) <*>
        (v .: "statistical_price"            ) <*>
        (v .: "price"                        ) <*>
        (v .: "netto_weight"                 ) <*>
        (v .: "drained_weight"               ) <*>
        (v .: "manufacturer_address"         ) <*>
        (v .: "contact_person"               ) <*>
        (v .: "contact_person_address"       ) <*>
        (v .: "ingredients_statement"        ) <*>
        (v .: "allergens_statement"          ) <*>
        (v .: "additives_statement"          ) <*>
        (v .: "variant_description"          ) <*>
        (v .: "origin_statement"             ) <*>
        (v .: "storage_instruction"          ) <*>
        (v .: "preparation_instruction"      ) <*>
        (v .: "serving_suggestion"           ) <*>
        (v .: "health_claim"                 ) <*>
        (v .: "nutritional_claim"            ) <*>
        (v .: "nutrients"                    ) <*>
        (v .: "favorite"                     )

decoded = dump_bs >>= return . decode :: IO (Maybe [Item])