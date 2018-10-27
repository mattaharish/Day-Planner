var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('node-mat', 'root', 'matta', {
    host: 'localhost',
    dialect: 'mysql',
    directory: './models', // prevents the program from writing to disk
    port: '3306',
    tables: ['todos']
    //...
});

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});