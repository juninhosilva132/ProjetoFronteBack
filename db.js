const Sequelize = require('sequelize');
//Conexão com o Banco de Dados MYSQL e model de Postagens e Usuarios!!
const sequelize = new Sequelize('postagens', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
}); 

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}