import { Sequelize } from "sequelize";
const db = new Sequelize('vipa','root','root',{
    host:'localhost',dialect:'mysql'
});

export default db;