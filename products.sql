DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER(0) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INTEGER(0) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("ski_mask", "headwear", 5.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("crowbar", "tools", 12.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("rope", "tools", 12.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("lockpick_set", "tools", 29.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("aluminum_bat", "sports", 30.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("hedge_shears", "garden",19.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("masking_tape", "outdoor", 5.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("large_trash_bag", "outdoor", 4.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("large_getaway_van", "automobile", 9999, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("silent_engine_mod", "automobile", 2000, 2);

SELECT * FROM products;




