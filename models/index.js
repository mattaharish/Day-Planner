'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('./../config/db-config')['default'];
const db = {};


let sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
    .readdirSync(__dirname)
    .filter(file => {
        console.log(file);
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        let model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        console.log(db[modelName].associate)
        db[modelName].associate(db);
    }
});

sequelize.sync({force: true}).then(res => {
    console.log(res);
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
});


module.exports = db;