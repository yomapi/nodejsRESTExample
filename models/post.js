const { sequelize } = require(".");

module.exports = (sequelize,DataTypes)=>{
    return sequelize.define('post',{
        title:{
            type:DataTypes.STRING(50),
            allowNull:false,
            unique:false,
        },
        content:{
            type:DataTypes.STRING(1000),
            allowNull:false,
        },
        author:{
            type:DataTypes.INTEGER,//user id
            allowNull:false,
        },
        fav:{
            type:DataTypes.INTEGER,
            allowNull:false
        }

    },{
        timestamps:false,
    });
};