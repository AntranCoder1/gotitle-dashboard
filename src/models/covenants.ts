import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { covenants_db_images, covenants_db_imagesId } from './covenants_db_images';
import type { db_images, db_imagesId } from './db_images';
import type { deed_types, deed_typesId } from './deed_types';
import type { titles, titlesId } from './titles';

export interface covenantsAttributes {
  id: number;
  title_id?: number;
  type?: string;
  deed_book?: string;
  deed_page?: string;
  date_recorded?: string;
  re_recorded_list?: string;
  supplemented_list?: string;
  amended_list?: string;
  created_at: Date;
  updated_at: Date;
  instrument_date?: string;
  has_conditions?: number;
  is_mandatory_association?: number;
  revised_list?: string;
  master_document_id?: number;
  deed_type_id?: number;
  sell_in_virtual_vault: number;
  publish: number;
  price?: number;
  position?: number;
}

export type covenantsPk = "id";
export type covenantsId = covenants[covenantsPk];
export type covenantsCreationAttributes = Optional<covenantsAttributes, covenantsPk>;

export class covenants extends Model<covenantsAttributes, covenantsCreationAttributes> implements covenantsAttributes {
  id!: number;
  title_id?: number;
  type?: string;
  deed_book?: string;
  deed_page?: string;
  date_recorded?: string;
  re_recorded_list?: string;
  supplemented_list?: string;
  amended_list?: string;
  created_at!: Date;
  updated_at!: Date;
  instrument_date?: string;
  has_conditions?: number;
  is_mandatory_association?: number;
  revised_list?: string;
  master_document_id?: number;
  deed_type_id?: number;
  sell_in_virtual_vault!: number;
  publish!: number;
  price?: number;
  position?: number;

  // covenants belongsTo covenants via master_document_id
  master_document!: covenants;
  getMaster_document!: Sequelize.BelongsToGetAssociationMixin<covenants>;
  setMaster_document!: Sequelize.BelongsToSetAssociationMixin<covenants, covenantsId>;
  createMaster_document!: Sequelize.BelongsToCreateAssociationMixin<covenants>;
  // covenants hasMany covenants_db_images via covenant_id
  covenants_db_images!: covenants_db_images[];
  getCovenants_db_images!: Sequelize.HasManyGetAssociationsMixin<covenants_db_images>;
  setCovenants_db_images!: Sequelize.HasManySetAssociationsMixin<covenants_db_images, covenants_db_imagesId>;
  addCovenants_db_image!: Sequelize.HasManyAddAssociationMixin<covenants_db_images, covenants_db_imagesId>;
  addCovenants_db_images!: Sequelize.HasManyAddAssociationsMixin<covenants_db_images, covenants_db_imagesId>;
  createCovenants_db_image!: Sequelize.HasManyCreateAssociationMixin<covenants_db_images>;
  removeCovenants_db_image!: Sequelize.HasManyRemoveAssociationMixin<covenants_db_images, covenants_db_imagesId>;
  removeCovenants_db_images!: Sequelize.HasManyRemoveAssociationsMixin<covenants_db_images, covenants_db_imagesId>;
  hasCovenants_db_image!: Sequelize.HasManyHasAssociationMixin<covenants_db_images, covenants_db_imagesId>;
  hasCovenants_db_images!: Sequelize.HasManyHasAssociationsMixin<covenants_db_images, covenants_db_imagesId>;
  countCovenants_db_images!: Sequelize.HasManyCountAssociationsMixin;
  // covenants belongsToMany db_images via covenant_id and db_image_id
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
  // covenants belongsTo deed_types via deed_type_id
  deed_type!: deed_types;
  getDeed_type!: Sequelize.BelongsToGetAssociationMixin<deed_types>;
  setDeed_type!: Sequelize.BelongsToSetAssociationMixin<deed_types, deed_typesId>;
  createDeed_type!: Sequelize.BelongsToCreateAssociationMixin<deed_types>;
  // covenants belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof covenants {
    covenants.init({
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
    type: {
      type: DataTypes.STRING(255),
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
    date_recorded: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    re_recorded_list: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    supplemented_list: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    amended_list: {
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
    instrument_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    has_conditions: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    is_mandatory_association: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    revised_list: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    master_document_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'covenants',
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
    tableName: 'covenants',
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
        name: "IDX_38234334A9F87BD",
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
      {
        name: "IDX_38234334C937C8B2",
        using: "BTREE",
        fields: [
          { name: "master_document_id" },
        ]
      },
      {
        name: "IDX_3823433493650679",
        using: "BTREE",
        fields: [
          { name: "deed_type_id" },
        ]
      },
    ]
  });
  return covenants;
  }
}
