require('dotenv').config();
const inquirer = require('inquirer');
const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
	host: process.env.HOST,
	port: process.env.DBPORT,
	user: 'root',
	password: process.env.PASSWORD,
	database: process.env.DB
});
connection.connect(err => {
    if (err) throw err;
    console.log (`HELLO!`);
    promptUser();
});

	function promptUser() {
        return inquirer.prompt(
		{
            type: 'list',
            name: 'tasks',
            message: 'What would you like to do?',
            choices: [  "View all departments", 
                        "View all roles", 
                        "View all employees", 
                        "Add a department", 
                        "Add a role", 
                        "Add an employee", 
                        "Update an employee role", 
                        "Exit" ],
			default: "View all employees",
		},
	).then(data => {
        if (data.tasks == "View all employees" || "View") {
            viewAllEmployees(data);
        } else if (data.tasks == "View all departments") {
            viewAlldepartments(data);
        } else if (data.tasks == "View all roles") {
            viewAllroles(data);
        } else if (data.tasks == "Add a department") {
            addDepartment(data);
        } else if (data.tasks == "Add a role") {
            addRole(data);
        } else if (data.tasks == "Add an employee") {
            addEmployee(data);
        } else if (data.tasks == "Update an employee role") {
            updateEmployeeRole(data);
        } else if (data.tasks == "Exit") {
            console.log("GOOD BYE!");
            connection.end();
            return;
        }
    }).catch(err => {
        if (err) throw err;
    });
};
  
viewAllEmployees = () => {
    
    connection.query("SELECT * FROM employees", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    })
};
        // save to db
// 		const query = connection.query(
// 			'INSERT INTO users SET ?',
// 			[ data ],
// 			(err, res) => {
// 				if (err) throw err;
// 				console.log('Done!');
// 				connection.end();
// 			}
// 		);
// 		console.log(query.sql);
// 	}).catch(err => {if (err)throw err});
// });
// /////////////////////////////////////////////////////
// function displayEmployees() {
//     connection.query()
// }