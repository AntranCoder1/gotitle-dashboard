import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { covenants, covenantsId } from './covenants';
import type { db_images, db_imagesId } from './db_images';

export interface covenants_db_imagesAttributes {
  covenant_id: number;
  db_image_id: number;
}

export type covenants_db_imagesPk = "covenant_id" | "db_image_id";
export type covenants_db_imagesId = covenants_db_images[covenants_db_imagesPk];
export type covenants_db_imagesCreationAttributes = Optional<covenants_db_imagesAttributes, covenants_db_imagesPk>;

export class covenants_db_images extends Model<covenants_db_imagesAttributes, covenants_db_imagesCreationAttributes> implements covenants_db_imagesAttributes {
  covenant_id!: number;
  db_image_id!: number;

  // covenants_db_images belongsTo covenants via covenant_id
  covenant!: covenants;
  getCovenant!: Sequelize.BelongsToGetAssociationMixin<covenants>;
  setCovenant!: Sequelize.BelongsToSetAssociationMixin<covenants, covenantsId>;
  createCovenant!: Sequelize.BelongsToCreateAssociationMixin<covenants>;
  // covenants_db_images belongsTo db_images via db_image_id
  db_image!: db_images;
  getDb_image!: Sequelize.BelongsToGetAssociationMixin<db_images>;
  setDb_image!: Sequelize.BelongsToSetAssociationMixin<db_images, db_imagesId>;
  createDb_image!: Sequelize.BelongsToCreateAssociationMixin<db_images>;

  static initModel(sequelize: Sequelize.Sequelize): typeof covenants_db_images {
    covenants_db_images.init({
    covenant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'covenants',
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
    tableName: 'covenants_db_images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "covenant_id" },
          { name: "db_image_id" },
        ]
      },
      {
        name: "IDX_D6E6D74ADA91032A",
        using: "BTREE",
        fields: [
          { name: "covenant_id" },
        ]
      },
      {
        name: "IDX_D6E6D74AABF4F4B8",
        using: "BTREE",
        fields: [
          { name: "db_image_id" },
        ]
      },
    ]
  });
  return covenants_db_images;
  }
}
