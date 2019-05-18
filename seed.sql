-- create users
INSERT into users(first_name, middle_initial, last_name, email, type)
VALUES ('Bob', 'A', 'Roberts', 'bob.rob@email.com', 'engineer'),
('James', 'J', 'Jameson', 'jim.jameson@email.com', 'analyst'),
('Stephanie', 'S', 'Stphens', 'steph.stephens@email.com', 'designer'),
('Mike', '', 'Michaels', 'mike.michaels@email.com', 'lead');

-- create products
INSERT into products(name, sku, version, blueprint)
VALUES ('reactive web stuff', 'bc8e38gvg98c77ggscdy8g', 10, 'DOM-92348'),
('sassy app builder', '100000199112', 17, 'COM-12349'),
('monolithixc db creator', '102-1-12233-0', 30, 'COM-2348'),
('linux maker online', 'ncw24 w9g97 ce79r', 22, 'DOM-98848');

-- create orders
INSERT into orders(product_id, license, quantity)
VALUES (1, 'nwce08hf3r08h0he3f0h', 1),
(2,'0000f0fg0gf3r08he3f0', 1),
(3,'7wdeffghfer8h0he3f0h', 5);

-- create subscriptions
INSERT into subscriptions(product_id, subscription, quantity)
VALUES (4,'999908hfdr08hwhe3f07', 6);
