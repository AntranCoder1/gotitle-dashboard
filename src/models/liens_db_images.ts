import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { db_images, db_imagesId } from './db_images';
import type { liens, liensId } from './liens';

export interface liens_db_imagesAttributes {
  lien_id: number;
  db_image_id: number;
}

export type liens_db_imagesPk = "lien_id" | "db_image_id";
export type liens_db_imagesId = liens_db_images[liens_db_imagesPk];
export type liens_db_imagesCreationAttributes = Optional<liens_db_imagesAttributes, liens_db_imagesPk>;

export class liens_db_images extends Model<liens_db_imagesAttributes, liens_db_imagesCreationAttributes> implements liens_db_imagesAttributes {
  lien_id!: number;
  db_image_id!: number;

  // liens_db_images belongsTo db_images via db_image_id
  db_image!: db_images;
  getDb_image!: Sequelize.BelongsToGetAssociationMixin<db_images>;
  setDb_image!: Sequelize.BelongsToSetAssociationMixin<db_images, db_imagesId>;
  createDb_image!: Sequelize.BelongsToCreateAssociationMixin<db_images>;
  // liens_db_images belongsTo liens via lien_id
  lien!: liens;
  getLien!: Sequelize.BelongsToGetAssociationMixin<liens>;
  setLien!: Sequelize.BelongsToSetAssociationMixin<liens, liensId>;
  createLien!: Sequelize.BelongsToCreateAssociationMixin<liens>;

  static initModel(sequelize: Sequelize.Sequelize): typeof liens_db_images {
    liens_db_images.init({
    lien_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'liens',
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
    tableName: 'liens_db_images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lien_id" },
          { name: "db_image_id" },
        ]
      },
      {
        name: "IDX_18F2511CEDAAC352",
        using: "BTREE",
        fields: [
          { name: "lien_id" },
        ]
      },
      {
        name: "IDX_18F2511CABF4F4B8",
        using: "BTREE",
        fields: [
          { name: "db_image_id" },
        ]
      },
    ]
  });
  return liens_db_images;
  }
}
