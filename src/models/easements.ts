import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { db_images, db_imagesId } from './db_images';
import type { deed_types, deed_typesId } from './deed_types';
import type { easements_db_images, easements_db_imagesId } from './easements_db_images';
import type { titles, titlesId } from './titles';

export interface easementsAttributes {
  id: number;
  title_id?: number;
  deed_date?: string;
  rec_date?: string;
  deed_book?: string;
  deed_page?: string;
  grantor?: string;
  grantee?: string;
  created_at: Date;
  updated_at: Date;
  easement_type_id?: number;
  deed_type_id?: number;
  sell_in_virtual_vault: number;
  publish: number;
  price?: number;
  position?: number;
}

export type easementsPk = "id";
export type easementsId = easements[easementsPk];
export type easementsCreationAttributes = Optional<easementsAttributes, easementsPk>;

export class easements extends Model<easementsAttributes, easementsCreationAttributes> implements easementsAttributes {
  id!: number;
  title_id?: number;
  deed_date?: string;
  rec_date?: string;
  deed_book?: string;
  deed_page?: string;
  grantor?: string;
  grantee?: string;
  created_at!: Date;
  updated_at!: Date;
  easement_type_id?: number;
  deed_type_id?: number;
  sell_in_virtual_vault!: number;
  publish!: number;
  price?: number;
  position?: number;

  // easements belongsTo deed_types via deed_type_id
  deed_type!: deed_types;
  getDeed_type!: Sequelize.BelongsToGetAssociationMixin<deed_types>;
  setDeed_type!: Sequelize.BelongsToSetAssociationMixin<deed_types, deed_typesId>;
  createDeed_type!: Sequelize.BelongsToCreateAssociationMixin<deed_types>;
  // easements belongsToMany db_images via easement_id and db_image_id
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
  // easements hasMany easements_db_images via easement_id
  easements_db_images!: easements_db_images[];
  getEasements_db_images!: Sequelize.HasManyGetAssociationsMixin<easements_db_images>;
  setEasements_db_images!: Sequelize.HasManySetAssociationsMixin<easements_db_images, easements_db_imagesId>;
  addEasements_db_image!: Sequelize.HasManyAddAssociationMixin<easements_db_images, easements_db_imagesId>;
  addEasements_db_images!: Sequelize.HasManyAddAssociationsMixin<easements_db_images, easements_db_imagesId>;
  createEasements_db_image!: Sequelize.HasManyCreateAssociationMixin<easements_db_images>;
  removeEasements_db_image!: Sequelize.HasManyRemoveAssociationMixin<easements_db_images, easements_db_imagesId>;
  removeEasements_db_images!: Sequelize.HasManyRemoveAssociationsMixin<easements_db_images, easements_db_imagesId>;
  hasEasements_db_image!: Sequelize.HasManyHasAssociationMixin<easements_db_images, easements_db_imagesId>;
  hasEasements_db_images!: Sequelize.HasManyHasAssociationsMixin<easements_db_images, easements_db_imagesId>;
  countEasements_db_images!: Sequelize.HasManyCountAssociationsMixin;
  // easements belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof easements {
    easements.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'titles',
        key: 'id'
      }
    },
    deed_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rec_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deed_book: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deed_page: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    grantor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    grantee: {
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
    easement_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deed_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'deed_types',
        key: 'id'
      }
    },
    sell_in_virtual_vault: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    publish: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'easements',
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
        name: "IDX_C449EAACA9F87BD",
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
      {
        name: "IDX_C449EAAC93650679",
        using: "BTREE",
        fields: [
          { name: "deed_type_id" },
        ]
      },
    ]
  });
  return easements;
  }
}
