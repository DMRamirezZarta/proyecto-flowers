const path = require('path');
const fs = require('fs');

// Ruta relativa para acceder a users.json desde auth.controller.js
const usersPath = path.join(__dirname, '../data/users.json');

module.exports = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/auth/login.ejs'));
    },
    doLogin: (req, res) => {
        const { username, password } = req.body;

        try {
            // Leer datos de usuarios actuales desde users.json
            const usersData = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

            // Verificar las credenciales
            const user = usersData.users.find(user => user.username === username && user.password === password);
            if (user) {
                req.session.user = user; // Guardar usuario en sesión
                return res.redirect('/home'); // Redireccionar a /home si las credenciales son válidas
            } else {
                return res.render(path.resolve(__dirname, '../views/auth/login.ejs'), { error: 'Credenciales incorrectas. Inténtalo de nuevo.' });
            }
        } catch (error) {
            console.error('Error al leer o parsear users.json:', error);
            return res.status(500).send('Error interno al procesar la autenticación.');
        }
    },
    register: (req, res) => {
        res.render(path.resolve(__dirname, '../views/auth/register.ejs'));
    },
    doRegister: (req, res) => {
        const { username, password, email } = req.body;

        try {
            // Leer datos de usuarios actuales desde users.json
            const usersData = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

            // Verificar si el usuario ya existe
            const existingUser = usersData.users.find(user => user.username === username);
            if (existingUser) {
                return res.render(path.resolve(__dirname, '../views/auth/register.ejs'), { error: 'El usuario ya existe.' });
            } else {
                // Agregar el nuevo usuario al array users
                usersData.users.push({ username, password, email });

                // Guardar los datos actualizados en users.json
                fs.writeFileSync(usersPath, JSON.stringify(usersData, null, 2));

                // Redireccionar a /home después del registro exitoso
                return res.redirect('/home');
            }
        } catch (error) {
            console.error('Error al leer, parsear o escribir users.json:', error);
            return res.status(500).send('Error interno al procesar el registro de usuario.');
        }
    },
    logout: (req, res) => {
        try {
            // Limpiar la sesión del usuario
            req.session.destroy(err => {
                if (err) {
                    console.error('Error al destruir sesión:', err);
                    return res.status(500).send('Error interno al cerrar sesión.');
                }
                res.clearCookie('session-id'); // Limpiar cookie de sesión si se usa
                res.redirect('/landing?message=Cierre%20de%20sesión%20exitoso'); // Redireccionar al inicio de sesión después del cierre de sesión
            });
        } catch (error) {
            console.error('Error al procesar el cierre de sesión:', error);
            res.status(500).send('Error interno al cerrar sesión.');
        }
    }
};


