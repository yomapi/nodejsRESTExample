var path= require('path');
var Sequelize=require('sequelize');

const ENV="development";
var config=require(path.join(__dirname,'..','.config','db_config.json'))[ENV];
var db={};

var sequelize=new Sequelize(config.database,config.username,config.password,config);
db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.User=require('./user')(sequelize,Sequelize);
db.Post=require('./post')(sequelize,Sequelize);
module.exports =db;