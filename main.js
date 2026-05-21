const express = require('express');

const UserService =
require('./userService');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

const userService =
new UserService();

userService.addUser({
id: 4,
username: "AlanJesusUzedaRivera",
password: "123456"
});

app.get('/', (req, res) => {

res.send(
'API USERS FUNCIONANDO'
);

});

app.get('/users',
(req, res) => {

res.json(
userService.getUsers()
);

});

app.post('/users',
(req, res) => {

const {
username,
password
}
=
req.body;

const newUser = {

id:
userService
.getUsers()
.length
+ 1,

username,

password

};

userService
.addUser(
newUser
);

res
.status(201)
.json(newUser);

});

app.listen(
port,
() => {

console.log(
`Server running at port ${port}`
);

}
);
