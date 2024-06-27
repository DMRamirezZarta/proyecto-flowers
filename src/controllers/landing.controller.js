const path = require('path');

module.exports = {
    landing: (req, res)=> {
        res.render(path.resolve(__dirname, '../views/landing/index.ejs'));
    },
    about: (req, res)=> {
        res.render(path.resolve(__dirname, '../views/landing/about.ejs'));
    }

}