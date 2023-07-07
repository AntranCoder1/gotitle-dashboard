import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { db_images, db_imagesId } from './db_images';
import type { plat_floor_plans, plat_floor_plansId } from './plat_floor_plans';

export interface plat_floor_plans_db_imagesAttributes {
  plat_floor_plan_id: number;
  db_image_id: number;
}

export type plat_floor_plans_db_imagesPk = "plat_floor_plan_id" | "db_image_id";
export type plat_floor_plans_db_imagesId = plat_floor_plans_db_images[plat_floor_plans_db_imagesPk];
export type plat_floor_plans_db_imagesCreationAttributes = Optional<plat_floor_plans_db_imagesAttributes, plat_floor_plans_db_imagesPk>;

export class plat_floor_plans_db_images extends Model<plat_floor_plans_db_imagesAttributes, plat_floor_plans_db_imagesCreationAttributes> implements plat_floor_plans_db_imagesAttributes {
  plat_floor_plan_id!: number;
  db_image_id!: number;

  // plat_floor_plans_db_images belongsTo db_images via db_image_id
  db_image!: db_images;
  getDb_image!: Sequelize.BelongsToGetAssociationMixin<db_images>;
  setDb_image!: Sequelize.BelongsToSetAssociationMixin<db_images, db_imagesId>;
  createDb_image!: Sequelize.BelongsToCreateAssociationMixin<db_images>;
  // plat_floor_plans_db_images belongsTo plat_floor_plans via plat_floor_plan_id
  plat_floor_plan!: plat_floor_plans;
  getPlat_floor_plan!: Sequelize.BelongsToGetAssociationMixin<plat_floor_plans>;
  setPlat_floor_plan!: Sequelize.BelongsToSetAssociationMixin<plat_floor_plans, plat_floor_plansId>;
  createPlat_floor_plan!: Sequelize.BelongsToCreateAssociationMixin<plat_floor_plans>;

  static initModel(sequelize: Sequelize.Sequelize): typeof plat_floor_plans_db_images {
    plat_floor_plans_db_images.init({
    plat_floor_plan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'plat_floor_plans',
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
    tableName: 'plat_floor_plans_db_images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plat_floor_plan_id" },
          { name: "db_image_id" },
        ]
      },
      {
        name: "IDX_5E1F4D7A6530763D",
        using: "BTREE",
        fields: [
          { name: "plat_floor_plan_id" },
        ]
      },
      {
        name: "IDX_5E1F4D7AABF4F4B8",
        using: "BTREE",
        fields: [
          { name: "db_image_id" },
        ]
      },
    ]
  });
  return plat_floor_plans_db_images;
  }
}
