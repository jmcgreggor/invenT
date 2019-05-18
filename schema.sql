create table users (
  id serial primary key,
  first_name varchar(20),
  middle_initial varchar(1),
  last_name varchar(40),
  email varchar(60),
  type varchar(20)
  -- assignment
)
create table products (
  id serial primary key,
  name varchar(50),
  sku varchar(100),
  version varchar(20),
  blueprint varchar(10)
)
create table orders (
  id serial primary key,
  product_id integer references products(id),
  license varchar(500),
  -- valid_from
  -- valid_to
  quantity integer,
  notes varchar(200)
)
create table subscriptions (
  id serial primary key,
  product_id integer references products(id),
  subscription varchar(500),
  -- valid_from
  -- valid_to
  quantity integer,
  notes varchar(200)
)
