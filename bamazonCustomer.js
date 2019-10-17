var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Tomatokki1!",
  database: "bamazon"
});

connection.connect();
 
connection.query('SELECT * FROM products', function (error, results) {
  if (error) throw error;
  console.log("------------------------" + "\n WELCOME TO THE BLACK MARKET")
  for (var i = 0; i < results.length; i++){
    console.log("------------------------" + "\n ITEM NUMBER: " + results[i].item_id + " \n PRODUCT NAME: " + results[i].product_name + " \n ITEM DEPARTMENT: " + results[i].department_name + " \n PRICE: " + results[i].price + " \n STOCK #: " + results[i].stock_quantity)
  }
});
 
connection.end();