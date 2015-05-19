select count(distinct id), count(id), count(distinct code), count(code) from hrana;
select distinct datum from hrana;

select distinct name from hrana_backup;

select name, count(*) from hrana_backup group by name having count(*) > 34;

update hrana set manufacturer_address = replace(manufacturer_address, 'Ć', 'C') where name is not null;


SET collation_connection = 'utf8_general_ci';
ALTER DATABASE kplus CHARACTER SET utf8 COLLATE utf8_general_ci;
ALTER TABLE hrana CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci;

insert into hrana_backup select * from hrana;


select * from hrana where name like '%Tijesto k plus spirali premium 500g%';

select id, datum, count(*) from hrana group by id having count(*) = 34;

alter table hrana add constraint pk_dateID primary key (id, datum);

select h.id, h.name, sum(abs(avg_prices.avg_price - h.formatted_price))/34.0 as deviation
	from hrana h join 
		(select h2.id , avg(amount) avg_price 
			from hrana h2 group by id having count(*) = 34) avg_prices 
	on h.id = avg_prices.id
    group by h.id;
    
select h.id, h.name, stddev_samp(amount) samp, stddev_pop(amount) pop from hrana h 
	group by id, name 
    having stddev_pop(amount) > 0 and count(id) = 34;
    
select h.id, h.amount, h.name from hrana h where id = 50002533;