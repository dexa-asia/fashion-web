import { Sequelize } from "sequelize";
import db from "../config/database.js";
import ProductStatus from "./product_status.js";
import ProductCategory from "./product_category.js";
const { DataTypes } =Sequelize;

const Product = db.define('product',{
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  code: {
    type: DataTypes.STRING(18),
    allowNull: false,
    field: 'code',
  },
  product: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'product',
  },
  image: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'image',
  },
  price: {
    type: DataTypes.DECIMAL(15,2),
    allowNull: false,
    field: 'price',
  },
  isDiscount: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'is_discount',
  },
  catId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'cat_id',
  },
  statusId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'status_id',
  }
  
},{
  tableName: 'product',
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
    {
      name: "code",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "code" },
      ]
    },
  ]
});


Product.belongsTo(ProductStatus,{
  foreignKey: 'status_id',
  targetKey:'id',
  as:'status',
});


Product.belongsTo(ProductCategory,{
  foreignKey: 'cat_id',
  targetKey:'id',
  as:'category',
});
export default Product;