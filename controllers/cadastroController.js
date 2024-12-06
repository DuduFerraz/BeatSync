const User = require('../models/cadastroModel');

const cadastroController = {
    // Função para cadastrar um usuário
    userCadastro: (req, res) => {
        const newUser = {
            nome: req.body.nome,
            email: req.body.email,
            data_nasc: req.body.dataNasc,
            genero: req.body.genero,
            senha: req.body.senha,
        };

        User.Cadastro(newUser, (err, userId) => {
            if (err) {
                if (err.message === 'E-mail já cadastrado.') {
                    // Mensagem de erro para o usuário em caso de e-mail duplicado
                    return res.status(400).render('cadastro', { 
                        error: 'E-mail já registrado. Tente outro.',
                        data: newUser // Passa os dados preenchidos para não perder o que o usuário digitou
                    });
                }
                return res.status(500).render('cadastro', { 
                    error: 'Erro ao cadastrar. Tente novamente mais tarde.',
                    data: newUser 
                });
            }
<<<<<<< HEAD
=======

>>>>>>> 15614a6d740f4c151c7474df2fbea76496f6e5ad
            // Redireciona para a página de login após o cadastro bem-sucedido
            res.redirect('/login');
        });
    },

    // Renderiza o formulário de cadastro
    renderCadastroForm: (req, res) => {
        res.render('cadastro', { error: null, data: {} }); // Define erro e dados iniciais como nulos/vazios
    },

    // Renderiza a página de playlist (se necessário)
    renderPlaylist: (req, res) => {
        res.render('users/playlist');
    },

    // Renderiza a página de treino (se necessário)
    rendertreino: (req, res) => {
        res.render('users/treino');
    },

    // Renderiza a página de perfil do usuário (se necessário)
    renderPerfil: (req, res) => {
        res.render('users/perfil');
    },
};

module.exports = cadastroController;
