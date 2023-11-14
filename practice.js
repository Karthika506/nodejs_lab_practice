// 	Implement URL parameter routing to display specific content based on the URL.(Eg: ‘/’, ‘/home’, ‘/profile’, etc.,)

// const http = require('http');
// const url = require('url');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const path = parsedUrl.pathname;

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');

//   if (path === '/') {
//     res.end('Hello, this is the home page!\n');
//   } else if (path === '/home') {
//     res.end('Welcome to the home page!\n');
//   } else if (path === '/profile') {
//     res.end('This is the profile page!\n');
//   } else {
//     res.end('Page not found!\n');
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// 4.	Implement a route that accepts POST requests and logs the request data to the console.

// 4. Implement a route that accepts POST requests and logs the request data to the console.
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
//   });

// app.post('/submit', (req, res) => {
    
//  console.log('Name:', req.body.name);
//  console.log('Email:', req.body.email);
//  res.send('Form submitted successfully!');
// });

// app.listen(3000, () => {
//  console.log('Server is running on port 3000');
// });



// 8.

const express = require('express');
const auth = require('express-basic-auth');
const authenticate = auth({
    users: { 'user': 'password' },
    challenge: true,
    realm: 'Private Area'
   });
   const app = express();

app.get('/secure', authenticate, (req, res) => {
 res.send('Access granted to the secure route');
});

app.listen(3000, () => {
 console.log('Server is running on port 3000');
});

