import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { db_images, db_imagesId } from './db_images';
import type { mortgages, mortgagesId } from './mortgages';

export interface mortgages_db_imagesAttributes {
  mortgage_id: number;
  db_image_id: number;
}

export type mortgages_db_imagesPk = "mortgage_id" | "db_image_id";
export type mortgages_db_imagesId = mortgages_db_images[mortgages_db_imagesPk];
export type mortgages_db_imagesCreationAttributes = Optional<mortgages_db_imagesAttributes, mortgages_db_imagesPk>;

export class mortgages_db_images extends Model<mortgages_db_imagesAttributes, mortgages_db_imagesCreationAttributes> implements mortgages_db_imagesAttributes {
  mortgage_id!: number;
  db_image_id!: number;

  // mortgages_db_images belongsTo db_images via db_image_id
  db_image!: db_images;
  getDb_image!: Sequelize.BelongsToGetAssociationMixin<db_images>;
  setDb_image!: Sequelize.BelongsToSetAssociationMixin<db_images, db_imagesId>;
  createDb_image!: Sequelize.BelongsToCreateAssociationMixin<db_images>;
  // mortgages_db_images belongsTo mortgages via mortgage_id
  mortgage!: mortgages;
  getMortgage!: Sequelize.BelongsToGetAssociationMixin<mortgages>;
  setMortgage!: Sequelize.BelongsToSetAssociationMixin<mortgages, mortgagesId>;
  createMortgage!: Sequelize.BelongsToCreateAssociationMixin<mortgages>;

  static initModel(sequelize: Sequelize.Sequelize): typeof mortgages_db_images {
    mortgages_db_images.init({
    mortgage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mortgages',
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
    tableName: 'mortgages_db_images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mortgage_id" },
          { name: "db_image_id" },
        ]
      },
      {
        name: "IDX_1F86F50815375FCD",
        using: "BTREE",
        fields: [
          { name: "mortgage_id" },
        ]
      },
      {
        name: "IDX_1F86F508ABF4F4B8",
        using: "BTREE",
        fields: [
          { name: "db_image_id" },
        ]
      },
    ]
  });
  return mortgages_db_images;
  }
}
