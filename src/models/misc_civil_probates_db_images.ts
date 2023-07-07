import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { db_images, db_imagesId } from './db_images';
import type { misc_civil_probates, misc_civil_probatesId } from './misc_civil_probates';

export interface misc_civil_probates_db_imagesAttributes {
  misc_civil_probate_id: number;
  db_image_id: number;
}

export type misc_civil_probates_db_imagesPk = "misc_civil_probate_id" | "db_image_id";
export type misc_civil_probates_db_imagesId = misc_civil_probates_db_images[misc_civil_probates_db_imagesPk];
export type misc_civil_probates_db_imagesCreationAttributes = Optional<misc_civil_probates_db_imagesAttributes, misc_civil_probates_db_imagesPk>;

export class misc_civil_probates_db_images extends Model<misc_civil_probates_db_imagesAttributes, misc_civil_probates_db_imagesCreationAttributes> implements misc_civil_probates_db_imagesAttributes {
  misc_civil_probate_id!: number;
  db_image_id!: number;

  // misc_civil_probates_db_images belongsTo db_images via db_image_id
  db_image!: db_images;
  getDb_image!: Sequelize.BelongsToGetAssociationMixin<db_images>;
  setDb_image!: Sequelize.BelongsToSetAssociationMixin<db_images, db_imagesId>;
  createDb_image!: Sequelize.BelongsToCreateAssociationMixin<db_images>;
  // misc_civil_probates_db_images belongsTo misc_civil_probates via misc_civil_probate_id
  misc_civil_probate!: misc_civil_probates;
  getMisc_civil_probate!: Sequelize.BelongsToGetAssociationMixin<misc_civil_probates>;
  setMisc_civil_probate!: Sequelize.BelongsToSetAssociationMixin<misc_civil_probates, misc_civil_probatesId>;
  createMisc_civil_probate!: Sequelize.BelongsToCreateAssociationMixin<misc_civil_probates>;

  static initModel(sequelize: Sequelize.Sequelize): typeof misc_civil_probates_db_images {
    misc_civil_probates_db_images.init({
    misc_civil_probate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'misc_civil_probates',
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
    tableName: 'misc_civil_probates_db_images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "misc_civil_probate_id" },
          { name: "db_image_id" },
        ]
      },
      {
        name: "IDX_577A8B3819E888CD",
        using: "BTREE",
        fields: [
          { name: "misc_civil_probate_id" },
        ]
      },
      {
        name: "IDX_577A8B38ABF4F4B8",
        using: "BTREE",
        fields: [
          { name: "db_image_id" },
        ]
      },
    ]
  });
  return misc_civil_probates_db_images;
  }
}
