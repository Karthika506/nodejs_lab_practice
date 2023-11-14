const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const secretKey = 'yourSecretKey';
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Middleware to validate JWT tokens
const validateToken = (req, res, next) => {
const token = req.header('Authorization');
// Remove 'Bearer ' from the token if present
const tokenWithoutBearer = token.replace(/^Bearer /, '');
if (!tokenWithoutBearer) {
return res.status(401).json({ error: 'Access denied. Token not provided.' });
}
try {
const decoded = jwt.verify(tokenWithoutBearer, secretKey);
req.user = decoded;
next();
} catch (err) {
console.log(err)
return res.status(401).json({ error: 'Invalid token.' });
}
};
// Protected route example
app.get('/protected-route', validateToken, (req, res) => {
res.json({ message: 'Access granted. This is a protected route.', user: req.user });
});
// Login route to generate a JWT (replace this with your actual authentication logic)
app.post('/login', (req, res) => {
const { username, password } = req.body;
console.log(req.body)
// Replace this with your actual user authentication logic
if (username === 'user' && password === 'password') {
const payload = { username };
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
res.json({ token });
} else {
res.status(401).json({ error: 'Invalid credentials.' });
}
});
// Start the server
const port = 3000;
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}/`);
});