const User = require('../models/loginModel');
const bcrypt = require('bcrypt');

const loginController = {

    userLogin: (req, res) => {
        const { email, senha } = req.body;

        User.login({ email, senha }, async (err, usuarios) => {
            if (err) {
                return res.status(500).json({ error: err });
            } if (!User) { 
            if (!usuarios) {
                return res.status(401).json({ message: 'Seu e-mail ou senha estão incorretos!' });
            }
            }
            const isValidPassword = await bcrypt.compare(senha, usuarios.senha);
            if (!isValidPassword) {
                return res.status(401).json({ message: 'E-mail ou senha invalidos!' });
            }

            res.redirect('/users/perfil');
        });
    },
    renderLoginForm: (req, res) => {
        res.render('login');
    },
};

module.exports = loginController;