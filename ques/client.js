const axios = require('axios');
// Replace with your server's URL
const serverUrl = 'http://localhost:3000';
// Replace with your actual credentials for authentication
const credentials = {
username: 'user',
password: 'password',
};
// Log in to get the JWT token
axios.post(`${serverUrl}/login`, credentials)
.then(response => {
const { token } = response.data;
console.log(token)
// Use the token to make a request to the protected route
axios.get(`${serverUrl}/protected-route`, {
headers: {
'Authorization': `Bearer ${token}`
}
})
.then(response => {
console.log(response.data);
})
.catch(error => {
console.error(error.response.data);
});
})
.catch(error => {
console.error(error.response.data);
});