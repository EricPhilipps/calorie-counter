const loginFormHandler = async (event) => {
	event.preventDefault();
  
	// Collect values from the login form
	const email = document.querySelector('#email-login').value.trim();
	const password = document.querySelector('#password-login').value.trim();
  
	if (email && password) {
	  // Send a POST request to the API endpoint
	  const response = await fetch('/api/users/login', {
		method: 'POST',
		body: JSON.stringify({ email, password }),
		headers: { 'Content-Type': 'application/json' },
	  });
  
	  if (response.ok) {
		// If successful, redirect the browser to the profile page
		document.location.replace('/profile');
	  } else {
		alert(response.statusText);
	  }
	}
  };
  
  const signupFormHandler = async (event) => {
	event.preventDefault();
  
	const email = document.querySelector('#email-signup').value.trim();
	const password = document.querySelector('#password-signup').value.trim();
  
	if (email && password) {
	  const response = await fetch('/api/users', {
		method: 'POST',
		body: JSON.stringify({ email, password }),
		headers: { 'Content-Type': 'application/json' },
	  });
  
	  if (response.ok) {
		document.location.replace('/profile');
	  } else {
		alert(response.statusText);
	  }
	}
  };
  
  document
	.querySelector('.login-form')
	.addEventListener('submit', loginFormHandler);
  
  document
	.querySelector('.signup-form')
	.addEventListener('submit', signupFormHandler);






// const mysql = require('mysql');
// const express = require('express');
// const session = require('express-session');
// const path = require('path');

// const connection = mysql.createConnection({
// 	host     : 'localhost',
// 	user     : 'root',
// 	password : '',
// 	database : 'calorielogin'
// });

// const app = express();

// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'static')));

// // http://localhost:3006/
// app.get('/', function(request, response) {
// 	// Render login template
// 	response.sendFile(path.join(__dirname + '/homepage.handlebars'));
// });

// // http://localhost:3006/auth
// app.post('/auth', function(request, response) {
// 	// Capture the input fields
// 	let username = request.body.username;
// 	let password = request.body.password;
// 	// Ensure the input fields exists and are not empty
// 	if (username && password) {
// 		// Execute SQL query that'll select the account from the database based on the specified username and password
// 		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			// If there is an issue with the query, output the error
// 			if (error) throw error;
// 			// If the account exists
// 			if (results.length > 0) {
// 				// Authenticate the user
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				// Redirect to home page
// 				response.redirect('/homepage.handlebars');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });

// // http://localhost:3006/home
// app.get('/home', function(request, response) {
// 	// If the user is loggedin
// 	if (request.session.loggedin) {
// 		// Output username
// 		response.send('Welcome back, ' + request.session.username + '!');
// 	} else {
// 		// Not logged in
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });

// app.listen(3006);