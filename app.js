const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');// este metodo sirve para las peticiones put y delete que seran utilizadas en la siguiente fase del proyecto

//El método override es una técnica utilizada en las aplicaciones web basadas en HTTP para permitir que los formularios HTML realicen solicitudes HTTP con métodos  distintos de GET y POST, que son los únicos métodos soportados por los formularios HTML por defecto. Este método es comúnmente habilitado por la biblioteca method-override

//Routes Imports

const landingRoutes = require('./src/Routes/landing.routes');
const authRoutes = require('./src/Routes/auth.routes');
const homeRoutes = require('./src/Routes/home.routes');


const PORT = 4000;

// Configurar middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

//configurar vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));


app.use(express.static('public'));

// usar las rutas

app.use('/', landingRoutes);
app.use('/auth', authRoutes);
app.use('/home', homeRoutes);



app.listen(PORT, () => console.log(`Servidor corriendo en 🚀 http://localhost:${PORT}`));

