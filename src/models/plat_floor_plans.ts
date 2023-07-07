import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { db_images, db_imagesId } from './db_images';
import type { deed_types, deed_typesId } from './deed_types';
import type { plat_floor_plans_db_images, plat_floor_plans_db_imagesId } from './plat_floor_plans_db_images';
import type { titles, titlesId } from './titles';

export interface plat_floor_plansAttributes {
  id: number;
  master_document_id?: number;
  deed_type_id?: number;
  title_id?: number;
  plat_book?: string;
  plat_page?: string;
  nulla_bona?: string;
  without_book_page_info?: string;
  note?: string;
  created_at: Date;
  updated_at: Date;
  position?: number;
}

export type plat_floor_plansPk = "id";
export type plat_floor_plansId = plat_floor_plans[plat_floor_plansPk];
export type plat_floor_plansCreationAttributes = Optional<plat_floor_plansAttributes, plat_floor_plansPk>;

export class plat_floor_plans extends Model<plat_floor_plansAttributes, plat_floor_plansCreationAttributes> implements plat_floor_plansAttributes {
  id!: number;
  master_document_id?: number;
  deed_type_id?: number;
  title_id?: number;
  plat_book?: string;
  plat_page?: string;
  nulla_bona?: string;
  without_book_page_info?: string;
  note?: string;
  created_at!: Date;
  updated_at!: Date;
  position?: number;

  // plat_floor_plans belongsTo deed_types via deed_type_id
  deed_type!: deed_types;
  getDeed_type!: Sequelize.BelongsToGetAssociationMixin<deed_types>;
  setDeed_type!: Sequelize.BelongsToSetAssociationMixin<deed_types, deed_typesId>;
  createDeed_type!: Sequelize.BelongsToCreateAssociationMixin<deed_types>;
  // plat_floor_plans belongsToMany db_images via plat_floor_plan_id and db_image_id
  db_images!: db_images[];
  getDb_images!: Sequelize.BelongsToManyGetAssociationsMixin<db_images>;
  setDb_images!: Sequelize.BelongsToManySetAssociationsMixin<db_images, db_imagesId>;
  addDb_image!: Sequelize.BelongsToManyAddAssociationMixin<db_images, db_imagesId>;
  addDb_images!: Sequelize.BelongsToManyAddAssociationsMixin<db_images, db_imagesId>;
  createDb_image!: Sequelize.BelongsToManyCreateAssociationMixin<db_images>;
  removeDb_image!: Sequelize.BelongsToManyRemoveAssociationMixin<db_images, db_imagesId>;
  removeDb_images!: Sequelize.BelongsToManyRemoveAssociationsMixin<db_images, db_imagesId>;
  hasDb_image!: Sequelize.BelongsToManyHasAssociationMixin<db_images, db_imagesId>;
  hasDb_images!: Sequelize.BelongsToManyHasAssociationsMixin<db_images, db_imagesId>;
  countDb_images!: Sequelize.BelongsToManyCountAssociationsMixin;
  // plat_floor_plans belongsTo plat_floor_plans via master_document_id
  master_document!: plat_floor_plans;
  getMaster_document!: Sequelize.BelongsToGetAssociationMixin<plat_floor_plans>;
  setMaster_document!: Sequelize.BelongsToSetAssociationMixin<plat_floor_plans, plat_floor_plansId>;
  createMaster_document!: Sequelize.BelongsToCreateAssociationMixin<plat_floor_plans>;
  // plat_floor_plans hasMany plat_floor_plans_db_images via plat_floor_plan_id
  plat_floor_plans_db_images!: plat_floor_plans_db_images[];
  getPlat_floor_plans_db_images!: Sequelize.HasManyGetAssociationsMixin<plat_floor_plans_db_images>;
  setPlat_floor_plans_db_images!: Sequelize.HasManySetAssociationsMixin<plat_floor_plans_db_images, plat_floor_plans_db_imagesId>;
  addPlat_floor_plans_db_image!: Sequelize.HasManyAddAssociationMixin<plat_floor_plans_db_images, plat_floor_plans_db_imagesId>;
  addPlat_floor_plans_db_images!: Sequelize.HasManyAddAssociationsMixin<plat_floor_plans_db_images, plat_floor_plans_db_imagesId>;
  createPlat_floor_plans_db_image!: Sequelize.HasManyCreateAssociationMixin<plat_floor_plans_db_images>;
  removePlat_floor_plans_db_image!: Sequelize.HasManyRemoveAssociationMixin<plat_floor_plans_db_images, plat_floor_plans_db_imagesId>;
  removePlat_floor_plans_db_images!: Sequelize.HasManyRemoveAssociationsMixin<plat_floor_plans_db_images, plat_floor_plans_db_imagesId>;
  hasPlat_floor_plans_db_image!: Sequelize.HasManyHasAssociationMixin<plat_floor_plans_db_images, plat_floor_plans_db_imagesId>;
  hasPlat_floor_plans_db_images!: Sequelize.HasManyHasAssociationsMixin<plat_floor_plans_db_images, plat_floor_plans_db_imagesId>;
  countPlat_floor_plans_db_images!: Sequelize.HasManyCountAssociationsMixin;
  // plat_floor_plans belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof plat_floor_plans {
    plat_floor_plans.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    master_document_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'plat_floor_plans',
        key: 'id'
      }
    },
    deed_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'deed_types',
        key: 'id'
      }
    },
    title_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'titles',
        key: 'id'
      }
    },
    plat_book: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    plat_page: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nulla_bona: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    without_book_page_info: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plat_floor_plans',
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
        name: "IDX_9DA7F970C937C8B2",
        using: "BTREE",
        fields: [
          { name: "master_document_id" },
        ]
      },
      {
        name: "IDX_9DA7F97093650679",
        using: "BTREE",
        fields: [
          { name: "deed_type_id" },
        ]
      },
      {
        name: "IDX_9DA7F970A9F87BD",
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
    ]
  });
  return plat_floor_plans;
  }
}
