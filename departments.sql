USE bamazon;
DROP TABLE IF EXISTS departments
CREATE TABLE departments (
  department_id INTEGER(0) AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(100) NULL,
  over_head_costs INTEGER(0) NULL,
  product_sales INTEGER(0) NULL,
  total_profit INTEGER(0) NULL,
  PRIMARY KEY (department_id)
);


INSERT INTO departments (department_name, over_head_costs, total_profit)
VALUES("headwear", 1000, 0);

INSERT INTO departments (department_name, over_head_costs, total_profit)
VALUES("tools", 3000, 0);

INSERT INTO departments (department_name, over_head_costs, total_profit)
VALUES("sports", 500, 0);


INSERT INTO departments (department_name, over_head_costs, total_profit)
VALUES("garden", 200, 0);


INSERT INTO departments (department_name, over_head_costs, total_profit)
VALUES("outdoor", 2000, 0);

INSERT INTO departments (department_name, over_head_costs, total_profit)
VALUES("automobile", 9000, 0);


SELECT * FROM departments;




