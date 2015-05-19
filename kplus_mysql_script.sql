drop table hrana_backup;
create table hrana_backup
(	datum datetime
,	id int
,	code varchar(40)
,	name varchar(400)

,	amount int
,	currency varchar(10)
,	formatted_price varchar(10)

,	description text
,	product_path varchar(200)
,	image_path varchar(200)
,	thumbnail_image_path varchar(200)
,	product_details_path varchar(200)

,	manufacturer varchar(400)
,	sales_unit_of_measure varchar(20)
,	quantity_step double
,	min_order_quantity double
,	netto_weight_factor double
,	sliceable bool
,	catch_weight int
,	has_image bool
,	requires_deposit_packaging bool
,	image_s varchar(200)
,	image_m varchar(200)
,	image_l varchar(200)

,	netto_weight int
,	contact_person varchar(100)
,	contact_person_address varchar(100)
,	allergens_statement text
,	storage_instruction text
,	health_claim text
,	additives_statement text
,	drained_weight varchar(20)

,	active bool
,	price_unit_of_measure varchar(20)
,	statistical_price varchar(20)

,	favorite bool

,	ingredients_statement text
,	manufacturer_address varchar(400)
,	nutritional_claim text
,	origin_statement text
,	preparation_instruction text
,	serving_suggestion text
,	storage_instructions text
,	variant_description text );