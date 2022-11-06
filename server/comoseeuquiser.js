const Sequelize = require('sequelize');

const sequelize = new Sequelize("BD_BENERGY_P5", "root", "", {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;