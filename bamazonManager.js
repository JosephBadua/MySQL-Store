var mysql = require("mysql");
var inquirer = require("inquirer");
var values = [];
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

connection.connect()
Manager();

function Manager() {
  var questions = [
    {
      name: "Welcome",
      message: "What would you like to do?",
      type: "list",
      choices: [
      "View Products for Sale",
      "View Low Inventory",
      "Add to Inventory",
      "Add New Inventory"
      ]
    },
  ]
  inquirer.prompt(questions).then(answers => {
   if (answers.Welcome == "View Products for Sale"){
     showProducts();
   }
   if (answers.Welcome == "View Low Inventory"){
     showLowProducts();
   }
   if (answers.Welcome == "Add to Inventory"){
    AddInventory();
  }
   if (answers.Welcome == "Add New Inventory"){
     AddNewInventory();
   }
  });
}

function showProducts(){
  connection.query('SELECT * FROM products', function (error, results) {
    if (error) throw error
    for (var i = 0; i < results.length; i++){
      console.log("------------------------" + "\n ITEM NUMBER: " + results[i].item_id + " \n PRODUCT NAME: " + results[i].product_name + " \n ITEM DEPARTMENT: " + results[i].department_name + " \n PRICE: " + results[i].price + " \n STOCK #: "  + results[i].stock_quantity + " \n TOTAL SALES: " + results[i].product_sales)
    }
});
}
function showLowProducts(){
  connection.query('SELECT * FROM products where stock_quantity < 5', function (error, results) {
    if (error) throw error
    console.log("We are low on these items")
    for (var i = 0; i < results.length; i++){
      console.log("------------------------" + "\n ITEM NUMBER: " + results[i].item_id + " \n PRODUCT NAME: " + results[i].product_name + " \n ITEM DEPARTMENT: " + results[i].department_name + " \n PRICE: " + results[i].price + " \n STOCK #: "  + results[i].stock_quantity + " \n TOTAL SALES: " + results[i].product_sales)
    }
});
}
function AddInventory() {
  var questions = [
    {
      name: "Id",
      message: "Select the item ID you would like to Add to?",
      type: "number"
    },
    {
      name: "Quantity",
      message: "How many would you like to add?",
      type: "number"
    },
  ]
  inquirer.prompt(questions).then(answers => {
    var count = (answers.Id);
    var quantity = (answers.Quantity);
    values.push(count);
    values.push(quantity);
    console.log(values);
    checkBack();
  });
}
function checkBack(){
  connection.query('SELECT * FROM products where item_id=' + values[0], function (error, results) {
    if (error) {
      console.log("That item ID is not in our inventory");
      throw (error);
    } else {
      values.push(results[0].stock_quantity);
      console.log(values)
      update();
    }
});
}
function update(){
  connection.query('UPDATE products SET stock_quantity=' + (values[2] + values[1]) + " WHERE item_id=" + values[0], function (error, results) {
    if (error) throw error;
    console.log('We have changed the inventory for:' + results.affectedRows + " Row");
});
}
function AddNewInventory() {
  var questions = [
    {
      name: "Name",
      message: "What is the Name of the Product?",
      type: "input"
    },
    {
      name: "Department",
      message: "What item department should we categorize it in?",
      type: "input"
    },
    {
      name: "Price",
      message: "How much should we sell it for?",
      type: "number"
    },
    {
      name: "Quantity",
      message: "How many do we currently have to sell?",
      type: "number"
    }
  ]
  inquirer.prompt(questions).then(answers => {
    var Name = (answers.Name);
    var Department = (answers.Department);
    var Price = (answers.Price);
    var Quantity = (answers.Quantity);
    values.push(Name);
    values.push(Department);
    values.push(Price);
    values.push(Quantity);
    console.log(values);
    AddProduct()
  });
}
function AddProduct(){
  connection.query("INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES (" + ("\""+ values[0] +"\"") + " , " + ("\""+ values[1] +"\"")+ " , " + values[2] + " , " + values[3] + " )", function (error, results) {
    if (error) throw error;
    console.log('We have added ' + results.affectedRows + " New Product");
});
}