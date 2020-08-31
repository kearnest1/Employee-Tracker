const express = require('express');
const inquire = require('fs');
const mysql = require('mysql');
const app = express();
// const cTable = require('console.table');

const connection = mysql.createConnection({
  host: "localhost",
  user: "kearnest10@gmail.com",
  password: "Adedoyin3!",
  database : 'election.db',
  insecureAuth : true

});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  afterConnection();
});

app.get( function(req, res) {
    connection.query("SELECT * FROM employees")
    if (err) throw err;
  console.log("Connected!");
  afterConnection();
})

app.listen();


  function start() {
    inquirer.prompt([
    {
        type: "list",
        name: "tracker",
        message: "What would you like to do?",
        choices: [ 'view all employees', 'view all roles', 'view all departments', 'add employee', 'add department', 'add role']
      }
    ])

    .then(function(answer) {
        console.log(answer);
        switch (answer.tracker) {
          case "view all employees":
            viewallemployees();
            break;
          case "view all roles":
            viewallroles();
            break;
          case "view all departments":
            viewalldepartments();
            break;
          case "add employee":
            addEmployee();
            break;
          case "add department":
            addDepartment();
            break;
          case "add role":
            addRole();
            break;
        }
      });
  };
 
  function allDepartments() {
    connection.query("SELECT * FROM department", function(err, answer) {
      if (err) throw err;
      console.table(answer);
    });
    start();
  }

  function allRoles() {
    connection.query("SELECT * FROM role", function(err, answer) {
        if (err) throw err;
        console.table(answer);
      });
    start();
  }

  function viewEmployees() {
    connection.query("SELECT * FROM employees", function(err, answer) {
        if (err) throw err;
        console.table(answer);
      });
    start();
  }
