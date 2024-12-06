const db = require('../config/db');

const User = {
    // Função para cadastrar um novo usuário
    Cadastro: (usuarios, callback) => {
        // Verifica se o e-mail já existe no banco
        const checkEmailQuery = 'SELECT email FROM usuarios WHERE email = ?';
        db.query(checkEmailQuery, [usuarios.email], (err, results) => {
            if (err) {
                return callback(err); 
            }
            if (results.length > 0) {
                return callback(new Error('E-mail já cadastrado.')); 
            }

            // Caso o e-mail não exista, prossegue com o cadastro
            const insertQuery = 'INSERT INTO usuarios (nome, email, data_nasc, genero, senha) VALUES (?, ?, ?, ?, ?)';
            db.query(insertQuery, [usuarios.nome, usuarios.email, usuarios.data_nasc, usuarios.genero, usuarios.senha], (err, results) => {
                if (err) {
                    return callback(err); // Erro ao inserir o usuário
                }
                callback(null, results.insertId); // Retorna o ID do novo usuário
            });
        });
    },

    // Função para buscar o perfil de um usuário (se necessário)
    perfil: (usuarios, callback) => {
        const query = 'SELECT * FROM usuarios WHERE nome = ? AND email = ? AND data_nasc = ? AND genero = ?';
        db.query(query, [usuarios.nome, usuarios.email, usuarios.data_nasc, usuarios.genero], (err, results) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback(null, false); // Usuário não encontrado
            }
            callback(null, results[0]); // Retorna os dados do usuário
        });
    },
};

module.exports = User;
