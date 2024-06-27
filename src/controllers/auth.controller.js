const path = require('path');

module.exports = {
    login: (req, res)=> res.render(path.resolve(__dirname, '../views/auth/login.ejs')),
    doLogin: (req, res)=> res.send('esta es la vista de landing page'),
    register: (req, res)=> res.render(path.resolve(__dirname, '../views/auth/register.ejs')),
    doRegister: (req, res)=> res.send('esta es la vista de landing page'),
    logout:(req, res)=> res.send('esta es la vista de landing page'),
}