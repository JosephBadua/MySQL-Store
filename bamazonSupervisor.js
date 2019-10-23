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
Supervisor();


function Supervisor() {
    var questions = [
      {
        name: "Welcome",
        message: "What would you like to do?",
        type: "list",
        choices: [
        "View Product Sales by Department",
        "Create New Department"
        ]
      },
    ]
    inquirer.prompt(questions).then(answers => {
     if (answers.Welcome == "View Product Sales by Department"){
       Departments();
     }
     if (answers.Welcome == "Create New Department"){
       showLowProducts();
     }
    });
  }

  function Departments(){
    connection.query('SELECT departments.department_id, departments.department_name, departments.over_head_costs, products.product_sales, departments.total_profit FROM departments INNER JOIN products ON departments.department_name = products.department_name ORDER BY department_id', function (error, results) {
      if (error) throw error;
      for (var i = 0; i < results.length; i++){
       console.log(results);
      }
  });
  }
