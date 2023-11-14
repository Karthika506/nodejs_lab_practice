// 1. Create a Node Js server that listens to port 6001.


// const { request } = require("express");

// const http = require("http");

// const server = http.createServer((req, res)=>{
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/plain');
//     res.end('Hello world');
// });

// server.listen(6001, ()=>{
//     console.log("Server is running on port 6001")
// })




// 2. Implement URL parameter routing to display specific content based on the URL.(Eg: ‘/’, ‘/home’, ‘/profile’, etc.,)


// const express = require("express");

// const app = express();
// app.get('/', (req,res)=>{
//     res.send('Welcome to home page')
// })

// app.get('/user',(req,res)=>{
//     const details = {
//         id: 6,
//         name: "John Doe",
//         age: 65,
//         mail: "john@email.com"
//     }
//     res.send(details)
// })

// app.get('/user/:id',(req,res)=>{
//     const userId = req.params.id;
//     res.send(`displaying the details of user id: ${userId}`)
// })

// app.get('/profile',(req,res)=>{
//     res.send("welcome to profile page");
// })

// app.listen(3000, ()=>{
//     console.log('sever is running on port 3000');
// })



// 3. 


// const express = require("express");

// const app = express();

// app.get('/info/me', (req,res)=>{
//     const info = {
//         name: "John Doe",
//         age: 45,
//         email: "johndoe@email.com"
//     }
//     res.send(info);
// })

// app.listen(3000,()=>{
//     console.log('server is running on port 3000')
// });



// 4.  Implement a route that accepts POST requests and logs the request data to the console.


// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(express.json());
// app.use(bodyParser.json());

// app.post('/log-request',(req,res)=>{
//     console.log("received post request : ", req.body);
//     res.json({message: "Request logged successfully"});
// });

// app.listen(3000, ()=>{
//     console.log("server is running on port 3000");
// });



// 5.  Set up a static file server to serve HTML, CSS, and JavaScript files.
//include public folder

// const express = require("express");

// const app = express();
// const path = require("path");

// app.use(express.static(path.join(__dirname,'public')));

// app.get('/index', (req,res)=>{
//     res.sendFile(path.join(__dirname,'/public','index.html'));
// });

// app.get('/css', (req,res)=>{
//     res.sendFile(path.join(__dirname+'/public/style.css'));
// });

// app.get('/script', (req,res)=>{
//     res.sendFile(path.join(__dirname+'/public/script.js'));
// });

// app.listen(3000, ()=>{
//     console.log("server is running on port 3000");
// });



// 6.  Use the Express.js framework to create a basic web application with routing.


// const express = require("express");

// const app = express();
// app.get('/',(req,res)=>{
//     res.send('Welcome!');
// });
// app.get('/home',(req,res)=>{
//     res.send('Welcome to home page');
// });

// app.get('/profile',(req,res)=>{
//     res.send('Welcome to profile page');
// });

// app.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })



//  7.  Create a custom 404 error page for handling undefined routes.


// const express = require("express");

// const app = express();

// app.get('/',(req,res)=>{
//     res.send("Welcome!");
// });
// app.get('/home',(req,res)=>{
//     res.send("Welcome home!");
// });

// app.use((req,res,next)=>{
//     res.status(404).send("sorry can't find page!");
// })
// app.listen(3000,()=>{
//     console.log("server is running on port 3000");
// })



//  8.  Secure your routes with basic authentication using middleware.


// const express = require("express");

// const app = express();

// app.use(express.json());

// const user="admin";
// const password = "admin@123";

// const middleware = (req,res,next)=>{
//     if(req.body.user === user && req.body.password === password){
//         next();
//     } else{
//         res.send("invalid credentials");
//     }
// };

// app.post('/admin',middleware,(req,res)=>{
//     res.send("Welcome to admin page");
// });

// app.listen(3000, ()=>{
//     console.log('Server started');
// })



//  9.  Create a RESTful API that returns data in JSON format.


// const express = require("express");
// const mysql = require("mysql");

// const app = express();

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: "student"
// });

// db.connect((err)=>{
//     if (err) throw err;
//     console.log('connected to database');
// });

// app.get('/api/users', (req,res)=>{
//     db.query('SELECT * FROM student', (err, rows)=>{
//         if (err) throw err;
//         console.log("data received : ");
//         console.log(rows);
//         res.json(rows);
//     });
// });

// app.listen(3000, ()=>{
//     console.log('server started');
// });



//  10.  Create a custom error handler to format and send error responses.


// const express = require("express");
// const app = express();

// app.use(express.json());

// app.get('/error-400', (req,res,next)=>{
//     const error = new Error('Simulated error-400');
//     error.status = 400;
//     next(error);
// });

// app.get('/error-200', (req,res,next)=>{
//     const error = new Error('Simulated error-200');
//     error.status = 200;
//     next(error);
// });

// app.get('/error-500', (req,res,next)=>{
//     const error = new Error('Simulated error-500');
//     error.status = 500;
//     next(error);
// });

// app.use((req,res,next)=>{
//     statusCode = 404;
//     message = 'Not Found';
//     res.status(statusCode).json({statusCode, error:true, message});
// });

// app.use((err,req,res, next)=>{
//     let statusCode = 500;
//     let message = "Internal server error";
//     let error = true;

//     if(err.status == 400){
//         statusCode = 400;
//         message = "Bad request";
//     } if(err.status == 200){
//         statusCode = 200;
//         message = "ok";
//         error = false;
//     }
//     console.error(err);
//     res.status(statusCode).json({statusCode, error, message});
// });

// app.listen(3000, ()=>{
//     console.log("server started");
// });



//  11.  Implement Web Sockets for real-time communication in your application (Implement Socket.io library).
// also include socket.html file

// const express = require("express");
// const http = require("http");
// const socketIO = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// const port = 3000;

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// io.on("connection", (socket) => {
//   console.log("A user connected");

//   socket.on("chat message", (msg) => {
//     io.emit("chat message", msg); // Broadcast the message to all connected clients
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected");
//   });
// });

// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



//  12.  Enhance security by hashing and salting user passwords before storing them in the database. (use bcrypt).


// const bcrypt = require("bcrypt");

// async function hashPassword(password){
//     try{
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password,salt);
//         return hashedPassword;
//     } catch(error){
//         console.log(error);
//     }
// }

// const password = "karthi@123";
// hashPassword(password).then((hashedPassword)=>{
//     console.log(`password: ${password}`);
//     console.log(`hasheed password: ${hashedPassword}`);
// }) .catch((error)=>{
//     console.log(error);
// });



//  13.  JWT Token Validation: Implement token validation middleware to ensure the integrity of JSON Web Tokens (JWT).



//  14.  Develop the backend server application for an authentication system (login, register).


// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const cors = require("cors");

// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb+srv://karthika:karthika@cluster0.guuzjnf.mongodb.net/?retryWrites=true&w=majority")
//     .then(() =>{
//         console.log("database connected successfully");
//     }) .catch((err)=>{
//         console.log("error occured", err);
//     });

// const Employee = mongoose.model("Employee", {
//     name: String,
//     password: String,
// });

// //Register
// app.post("/register",(req,res)=>{
//     const {name,password, confirmPassword} = req.body;
//     if (password !== confirmPassword){
//         res.status(400).send("Passwords do not match");
//     } else{
//         const employee = new Employee({name, password});
//         employee.save().then(()=>{
//             res.send("employee registered successfully");
//         }) .catch((err)=>{
//             console.log("error occured", err);
//         });
//     }
// });


// //Login

// app.post('/login', (req,res)=>{
//     const {name, password} = req.body;
//     Employee.findOne({name, password})
//         .then((employee)=>{
//             if(employee){
//                 console.log(employee);
//                 res.send("login Successfully");
//             } else{
//                 res.status(400).send("invalid Credentials");
//             }
//         });
// });

// app.listen(3000, ()=>{
//     console.log('server started on port 3000');
// })



//  15.  Read and parse a JSON file, then display its contents in a structured format.



//  16.  File system in Node js: Create a new text file and perform read, write, and append operations.


// const fs = require('fs');
// fs.writeFile("write.txt", "Hey, How are you?",function(err){
//     console.log("writeFile executed successfully");
// });

// fs.readFile("write.txt", "utf-8",function(err,data){
//     console.log("readFile executed successfully");
//     console.log(data);
// });

// fs.appendFile("append.txt","how are you?", function(err){
//     console.log("appendFile executed successfully");
// });



//  17.  File system in Node js: Perform rename a file and copy a file to another file, delete file operations. 


const fs = require('fs');

fs.writeFile('copied.txt','',function(err){
    console.log("File created");
});
fs.copyFile('append.txt','copied.txt',function(err){
    console.log("Copying has been done successfully");
});
fs.writeFile('rename.txt','',function(err){
    console.log("File created");
});
fs.rename('rename.txt','renamed.txt',function(err){
    console.log("Renaming has been done successfully");
});
fs.writeFile('delete.txt','',function(err){
    console.log("File created");
});
fs.unlink('delete.txt',function(err){
    console.log("Deleting has been done successfully");
});