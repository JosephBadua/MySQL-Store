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
   console.log(answers.Welcome);
  });
}
function update(){
  connection.query('UPDATE products SET stock_quantity=' + (values[2] - values[1]) + " WHERE item_id=" + values[0], function (error, results) {
    if (error) throw error;
    console.log('Rows affected:', results.affectedRows);
    console.log("Thanks for shopping with the BLACK MARKET! If anyone asks, you never heard about us!")
});
}