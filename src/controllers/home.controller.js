const path = require('path');

module.exports = {
    home: (req, res)=> {
        res.render(path.resolve(__dirname, '../views/landing/index.ejs'));
    }
}