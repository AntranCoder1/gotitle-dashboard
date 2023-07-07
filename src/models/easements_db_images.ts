import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { db_images, db_imagesId } from './db_images';
import type { easements, easementsId } from './easements';

export interface easements_db_imagesAttributes {
  easement_id: number;
  db_image_id: number;
}

export type easements_db_imagesPk = "easement_id" | "db_image_id";
export type easements_db_imagesId = easements_db_images[easements_db_imagesPk];
export type easements_db_imagesCreationAttributes = Optional<easements_db_imagesAttributes, easements_db_imagesPk>;

export class easements_db_images extends Model<easements_db_imagesAttributes, easements_db_imagesCreationAttributes> implements easements_db_imagesAttributes {
  easement_id!: number;
  db_image_id!: number;

  // easements_db_images belongsTo db_images via db_image_id
  db_image!: db_images;
  getDb_image!: Sequelize.BelongsToGetAssociationMixin<db_images>;
  setDb_image!: Sequelize.BelongsToSetAssociationMixin<db_images, db_imagesId>;
  createDb_image!: Sequelize.BelongsToCreateAssociationMixin<db_images>;
  // easements_db_images belongsTo easements via easement_id
  easement!: easements;
  getEasement!: Sequelize.BelongsToGetAssociationMixin<easements>;
  setEasement!: Sequelize.BelongsToSetAssociationMixin<easements, easementsId>;
  createEasement!: Sequelize.BelongsToCreateAssociationMixin<easements>;

  static initModel(sequelize: Sequelize.Sequelize): typeof easements_db_images {
    easements_db_images.init({
    easement_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'easements',
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
    tableName: 'easements_db_images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "easement_id" },
          { name: "db_image_id" },
        ]
      },
      {
        name: "IDX_AE68C73ECC03E41E",
        using: "BTREE",
        fields: [
          { name: "easement_id" },
        ]
      },
      {
        name: "IDX_AE68C73EABF4F4B8",
        using: "BTREE",
        fields: [
          { name: "db_image_id" },
        ]
      },
    ]
  });
  return easements_db_images;
  }
}
