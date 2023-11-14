// 1.	Create a Node Js server that listens to port 6001.

// const http = require('http');
// const PORT = 6001;

// const server = http.createServer((req,res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, Node.js Server!\n');
// });

// server.listen(PORT, () =>{
//     console.log(`Server is running on Port ${PORT}`);
// });
// 


// 3. 	Create a route that returns a JSON response containing your name and email.



// const http = require('http');
// const url = require('url');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const path = parsedUrl.pathname;

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');

//   if (path === '/') {
//     res.end('Hello, this is the home page!\n');
//   } else if (path === '/home') {
//     res.end('Welcome to the home page!\n');
//   } else if (path === '/profile') {
//     res.end('This is the profile page!\n');
//   } else if (path === '/info') {
//     const userInfo = {
//       name: 'Your Name',
//       email: 'your.email@example.com',
//     };
//     res.end(JSON.stringify(userInfo));
//   } else {
//     res.end('Page not found!\n');
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// 5. 

// var express = require('express');
// var app = express();
// var path = require('path');

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/css', function(req, res){
//   res.sendFile(path.join(__dirname,'public', 'style.css'))
// });

// app.get('/script', function(req, res){
//   res.sendFile(path.join(__dirname,'public', 'scrip.js'))
// });

// app.listen(3000, function() {
//     console.log('App listening on port 3000!');
// });



//7.

// const express = require('express');
// const path = require('path');

// const app = express();

// // Define all your other routes here...
// app.get('/',(req,res)=>{
//     res.send('Hello world');
// })
// // Custom 404 error page middleware
// app.use(function(req, res, next) {
//  res.status(404).send("sorry can't find page")
// });

// app.listen(3000, function() {
//  console.log('Server is running on port 3000');
// });



// 9. Create a RESTful API that returns data in JSON format.

// const express = require('express');
// const mysql = require('mysql');

// const app = express();

// // Set up MySQL connection
// const db = mysql.createConnection({
//  host: 'localhost',
//  user: 'root',
//  password: '',
//  database: 'student'
// });

// db.connect((err) => {
//  if (err) throw err;
//  console.log('Connected to the database');
// });

// // Define the GET /api/users route
// app.get('/data', (req, res) => {
//  db.query('SELECT * FROM student', (err, rows) => {
//     if (err) throw err;
//     console.log('Data received from the database:');
//     console.log(rows);
//     res.json(rows);
//  });
// });

// // Start the server
// app.listen(3000, () => {
//  console.log('Server is running on port 3000')});

//10.Create a custom error handler to format and send error responses
// const express = require('express'); 
// const app = express(); 
// const port = 3004; 
// // Middleware to parse JSON data in the request body
// app.use(express.json()); 
// // Example route that triggers an error
// app.get('/simulate-400-error', (req, res, next) => { 
//  // Simulate an error (e.g., database query error)
//  const error = new Error('Simulated error'); 
//  error.status = 400; 
//  next(error); 
// }); 
// app.get('/simulate-200', (req, res, next) => { 
//  // Simulate an error (e.g., database query error)
//  const error = new Error('Simulated error'); 
//  error.status = 200; 
//  next(error); 
// }); 
// app.get('/simulate-500', (req, res, next) => { 
//  // Simulate an error (e.g., database query error)
//  const error = new Error('Simulated error'); 
//  next(error); 
// }); 
// app.use((req, res, next) => { 
//  statusCode = 404; 
//  message = 'Not Found'; 
//  res.status(statusCode).json({ statusCode, error: true, message
// }); 
// }) 
// app.use((err, req, res, next) => { 
//  // Default error status code
//  let statusCode = 500; 
//  // Default error message
//  let message = 'Internal Server Error'; 
//  let error = true; 
//  if (err.status == 400) { 
//  statusCode = 400; 
//  message = 'Bad Request'; 
//  } 
//  if (err.status == 200) { 
//  statusCode = 200; 
//  message = 'OK'; 
//  error = false; 
//  } 
//  // Log the error
//  console.error(err); 
//  // Send the error response
//  res.status(statusCode).json({ statusCode, error, message }); 
// }); 
// // Start the server
// // Start the server
// app.listen(port, () => { 
//  console.log(`Server is running at http://localhost:${port}`); 
// }); 

//12.

// const bcrypt = require('bcrypt');
// const { error } = require('console');

// async function hashPassword(password){
//   try{
//     const saltRounds = 10;
//     const salt = await bcrypt.genSalt(saltRounds);

//     const hashedPassword = await bcrypt.hash(password, salt);

//     return hashedPassword;
//   } catch (error){
//     console.error("Error hashing password: ",error);
//     throw error;
//   }

// }

// const userPassword = "MySecurePassword123";

// hashPassword(userPassword)
//   .then(hashed => {
//     console.log("Original PAssword: ", userPassword);
//     console.log("Hashed and Salted password: ", hashed);
//   })
//   .catch(error => {
//     //Handle Errors
//   });



//8.
// const express = require("express");

// const app = express();

// app.use(express.json());

// const user = "admin";
// const password = "admin@123";

// const middleware = (req, res, next) => {
//   if (req.body.user === user && req.body.password === password) {
//     next();
//   } else {
//     res.send("invalid credentials");
//   }
// };

// app.post("/admin", middleware, (req, res) => {
//   res.send("Welcome to admin page!");
// });

// app.listen(3000, () => {
//   console.log("server started on port 3000");
// });