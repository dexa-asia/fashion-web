import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } =Sequelize;

const ProductCategory = db.define('product_category',{
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  categrory: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: 'category',
  },
  
},{
  tableName: 'product_category',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
  ]
});

export default ProductCategory;