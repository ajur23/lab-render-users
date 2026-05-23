const express = require('express');
const UserService = require('./userService');

const app = express();
const userService = new UserService();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Servidor funcionando en Render 🚀');
});

app.get('/users', (req, res) => {
    res.json(userService.getUsers());
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});