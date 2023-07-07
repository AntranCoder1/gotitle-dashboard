import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { db_images, db_imagesId } from './db_images';
import type { deed, deedId } from './deed';

export interface deed_db_imagesAttributes {
  deed_id: number;
  db_image_id: number;
}

export type deed_db_imagesPk = "deed_id" | "db_image_id";
export type deed_db_imagesId = deed_db_images[deed_db_imagesPk];
export type deed_db_imagesCreationAttributes = Optional<deed_db_imagesAttributes, deed_db_imagesPk>;

export class deed_db_images extends Model<deed_db_imagesAttributes, deed_db_imagesCreationAttributes> implements deed_db_imagesAttributes {
  deed_id!: number;
  db_image_id!: number;

  // deed_db_images belongsTo db_images via db_image_id
  db_image!: db_images;
  getDb_image!: Sequelize.BelongsToGetAssociationMixin<db_images>;
  setDb_image!: Sequelize.BelongsToSetAssociationMixin<db_images, db_imagesId>;
  createDb_image!: Sequelize.BelongsToCreateAssociationMixin<db_images>;
  // deed_db_images belongsTo deed via deed_id
  deed!: deed;
  getDeed!: Sequelize.BelongsToGetAssociationMixin<deed>;
  setDeed!: Sequelize.BelongsToSetAssociationMixin<deed, deedId>;
  createDeed!: Sequelize.BelongsToCreateAssociationMixin<deed>;

  static initModel(sequelize: Sequelize.Sequelize): typeof deed_db_images {
    deed_db_images.init({
    deed_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'deed',
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
    tableName: 'deed_db_images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "deed_id" },
          { name: "db_image_id" },
        ]
      },
      {
        name: "IDX_58F4C226C63AAD2A",
        using: "BTREE",
        fields: [
          { name: "deed_id" },
        ]
      },
      {
        name: "IDX_58F4C226ABF4F4B8",
        using: "BTREE",
        fields: [
          { name: "db_image_id" },
        ]
      },
    ]
  });
  return deed_db_images;
  }
}
