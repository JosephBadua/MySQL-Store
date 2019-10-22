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
connection.query('SELECT * FROM products', function (error, results) {
    if (error) throw error
    for (var i = 0; i < results.length; i++){
      console.log("------------------------" + "\n ITEM NUMBER: " + results[i].item_id + " \n PRODUCT NAME: " + results[i].product_name + " \n ITEM DEPARTMENT: " + results[i].department_name + " \n PRICE: " + results[i].price + " \n STOCK #: " + results[i].stock_quantity)
    }
    console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
    Manager();
});


function Manager() {
  var questions = [
    {
      name: "Id",
      type: "rawlist",
      choices: "Select the item ID you would like to purchase",
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
    if (error) throw error;
    if (values[1] > results[0].stock_quantity){
      console.log ("We do not have enough of that item for your purchase")
      values = [];
      connection.end();
    } else {
      values.push(results[0].stock_quantity);
      console.log(values)
      console.log("You bought " + values[1] + " " + results[0].product_name + ". Your total will be " + (results[0].price * values[1]).toFixed(2) + " USD")
      update();
    }
});
}
function update(){
  connection.query('UPDATE products SET stock_quantity=' + (values[2] - values[1]) + " WHERE item_id=" + values[0], function (error, results) {
    if (error) throw error;
    console.log('Rows affected:', results.affectedRows);
    console.log("Thanks for shopping with the BLACK MARKET! If anyone asks, you never heard about us!")
});
}