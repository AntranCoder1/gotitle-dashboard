import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { db_images, db_imagesId } from './db_images';
import type { tax, taxId } from './tax';

export interface tax_db_imagesAttributes {
  tax_id: number;
  db_image_id: number;
}

export type tax_db_imagesPk = "tax_id" | "db_image_id";
export type tax_db_imagesId = tax_db_images[tax_db_imagesPk];
export type tax_db_imagesCreationAttributes = Optional<tax_db_imagesAttributes, tax_db_imagesPk>;

export class tax_db_images extends Model<tax_db_imagesAttributes, tax_db_imagesCreationAttributes> implements tax_db_imagesAttributes {
  tax_id!: number;
  db_image_id!: number;

  // tax_db_images belongsTo db_images via db_image_id
  db_image!: db_images;
  getDb_image!: Sequelize.BelongsToGetAssociationMixin<db_images>;
  setDb_image!: Sequelize.BelongsToSetAssociationMixin<db_images, db_imagesId>;
  createDb_image!: Sequelize.BelongsToCreateAssociationMixin<db_images>;
  // tax_db_images belongsTo tax via tax_id
  tax!: tax;
  getTax!: Sequelize.BelongsToGetAssociationMixin<tax>;
  setTax!: Sequelize.BelongsToSetAssociationMixin<tax, taxId>;
  createTax!: Sequelize.BelongsToCreateAssociationMixin<tax>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tax_db_images {
    tax_db_images.init({
    tax_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tax',
        key: 'id'
      }
    },
    db_image_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'db_images',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tax_db_images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tax_id" },
          { name: "db_image_id" },
        ]
      },
      {
        name: "IDX_DD31EF7DB2A824D8",
        using: "BTREE",
        fields: [
          { name: "tax_id" },
        ]
      },
      {
        name: "IDX_DD31EF7DABF4F4B8",
        using: "BTREE",
        fields: [
          { name: "db_image_id" },
        ]
      },
    ]
  });
  return tax_db_images;
  }
}
